---
sidebar_position: 1
slug: /
---

# Quick Start

## Deploy with Docker Compose

1. Sync the following to your host from the GitHub repo:

   - [compose.yml](https://github.com/teelur/budget-board/blob/main/compose.yml)
   - [compose.override.yml](https://github.com/teelur/budget-board/blob/main/compose.override.yml)

2. Edit the variables in `compose.override.yml`
3. Deploy using the command:

```
docker compose up -d
```
