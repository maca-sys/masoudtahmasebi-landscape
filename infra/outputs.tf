output "pages_subdomain" {
  description = "Default *.pages.dev host for the project (previews hang off this)."
  value       = cloudflare_pages_project.site.subdomain
}

output "kv_namespace_id" {
  description = "Workers KV namespace ID — paste into worker/wrangler.toml (kv_namespaces binding)."
  value       = cloudflare_workers_kv_namespace.visits.id
}

output "production_url" {
  description = "Canonical production URL."
  value       = "https://${var.domain}/"
}
