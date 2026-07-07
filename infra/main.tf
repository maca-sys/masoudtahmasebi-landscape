# ---------------------------------------------------------------------------
# Cloudflare Pages — direct-upload project; GitHub Actions builds the site and
# deploys with wrangler, so no dashboard git integration is configured here.
# ---------------------------------------------------------------------------

resource "cloudflare_pages_project" "site" {
  account_id        = var.account_id
  name              = var.pages_project_name
  production_branch = var.production_branch
}

resource "cloudflare_pages_domain" "apex" {
  account_id   = var.account_id
  project_name = cloudflare_pages_project.site.name
  name         = var.domain
}

resource "cloudflare_pages_domain" "www" {
  account_id   = var.account_id
  project_name = cloudflare_pages_project.site.name
  name         = "www.${var.domain}"
}

# ---------------------------------------------------------------------------
# DNS — apex and www both point at the Pages project (proxied; Cloudflare
# flattens the apex CNAME automatically).
# ---------------------------------------------------------------------------

resource "cloudflare_dns_record" "apex" {
  zone_id = var.zone_id
  name    = var.domain
  type    = "CNAME"
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  proxied = true
  ttl     = 1
  comment = "Managed by Terraform (infra/)"
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  proxied = true
  ttl     = 1
  comment = "Managed by Terraform (infra/)"
}

# ---------------------------------------------------------------------------
# www → apex, 301, query string preserved.
# ---------------------------------------------------------------------------

resource "cloudflare_ruleset" "redirect_www_to_apex" {
  zone_id     = var.zone_id
  name        = "Redirects"
  description = "www to apex"
  kind        = "zone"
  phase       = "http_request_dynamic_redirect"

  rules = [
    {
      ref         = "www_to_apex"
      description = "301 www.${var.domain} to ${var.domain}"
      expression  = "(http.host eq \"www.${var.domain}\")"
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code           = 301
          preserve_query_string = true
          target_url = {
            expression = "concat(\"https://${var.domain}\", http.request.uri.path)"
          }
        }
      }
    }
  ]
}

# ---------------------------------------------------------------------------
# Zone security settings: HTTPS everywhere, TLS 1.2 floor, HSTS.
# ---------------------------------------------------------------------------

resource "cloudflare_zone_setting" "always_use_https" {
  zone_id    = var.zone_id
  setting_id = "always_use_https"
  value      = "on"
}

resource "cloudflare_zone_setting" "min_tls_version" {
  zone_id    = var.zone_id
  setting_id = "min_tls_version"
  value      = "1.2"
}

resource "cloudflare_zone_setting" "hsts" {
  zone_id    = var.zone_id
  setting_id = "security_header"
  value = {
    strict_transport_security = {
      enabled            = true
      max_age            = 31536000 # one year
      include_subdomains = true
      preload            = true
      nosniff            = true
    }
  }
}

# ---------------------------------------------------------------------------
# Workers KV — backing store for the privacy-friendly visit counter.
# ---------------------------------------------------------------------------

resource "cloudflare_workers_kv_namespace" "visits" {
  account_id = var.account_id
  title      = "max-ta-visits"
}

# ---------------------------------------------------------------------------
# Worker route: /api/* on the apex is served by the API Worker. The script
# itself is deployed by wrangler in CI; Terraform only owns the routing.
# NOTE: requires the API token scope Zone → Workers Routes → Edit.
# ---------------------------------------------------------------------------

resource "cloudflare_workers_route" "api" {
  zone_id = var.zone_id
  pattern = "${var.domain}/api/*"
  script  = var.worker_name
}
