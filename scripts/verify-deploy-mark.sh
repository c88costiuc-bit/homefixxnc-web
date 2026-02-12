#!/usr/bin/env bash
set -euo pipefail
curl -s http://localhost:3000 | grep -n "DEPLOY_MARK" | tail -n 3
