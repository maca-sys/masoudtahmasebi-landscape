terraform {
  required_version = ">= 1.5.0"

  # Remote state on HCP Terraform (free tier): encrypted state with locking,
  # while plan/apply still run in GitHub Actions (workspace execution mode:
  # local). Authentication via the TF_API_TOKEN / terraform login credential.
  cloud {
    organization = "max-ta"

    workspaces {
      name = "max-ta"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.0"
    }
  }
}

# Credentials come exclusively from the CLOUDFLARE_API_TOKEN environment
# variable — never from code or state inputs.
provider "cloudflare" {}
