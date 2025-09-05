#!/bin/bash
cd ~/riot-api-app

git pull origin main

docker compose down
docker compose up -d --build
