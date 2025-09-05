#!/bin/bash
cd ~/riot-api-app
docker compose down
docker compose up -d --build
