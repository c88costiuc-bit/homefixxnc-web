#!/usr/bin/env bash
set -euo pipefail

URL="${1:-http://localhost:3000}"

# Fetch homepage HTML (works in dev and prod)
HTML="$(curl -fsSL "$URL")"

# Verify the marker exists
if ! echo "$HTML" | grep -q 'data-deploy-mark'; then
  echo "❌ DeployMark not found (missing data-deploy-mark attr) at $URL"
  exit 1
fi

# Print the line (clean)
MARK="$(echo "$HTML" | grep -o 'DEPLOY_MARK:[^<]*' | head -n 1 || true)"
if [[ -z "$MARK" ]]; then
  echo "❌ Found data-deploy-mark but could not extract DEPLOY_MARK line at $URL"
  exit 1
fi

echo "✅ $MARK"
