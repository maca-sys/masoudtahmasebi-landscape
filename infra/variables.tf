# Account and zone identifiers are not secrets (they appear in dashboard URLs
# and API responses); committed defaults keep the showcase reproducible.
# The API token is deliberately NOT a variable — see providers.tf.

variable "account_id" {
  description = "Cloudflare account ID that owns the Pages project, Worker, and KV namespace."
  type        = string
  default     = "c8cecea9a8650ac9a199dff271d81aef"
}

variable "zone_id" {
  description = "Cloudflare zone ID for the apex domain."
  type        = string
  default     = "03ad3152536ae693ecc28d0211b5f543"
}

variable "domain" {
  description = "Apex domain the site is served from."
  type        = string
  default     = "max-ta.com"
}

variable "pages_project_name" {
  description = "Cloudflare Pages project name (also the *.pages.dev subdomain)."
  type        = string
  default     = "max-ta"
}

variable "production_branch" {
  description = "Git branch that deploys to production."
  type        = string
  default     = "main"
}

variable "worker_name" {
  description = "Name of the Worker script serving /api/*."
  type        = string
  default     = "max-ta-api"
}
