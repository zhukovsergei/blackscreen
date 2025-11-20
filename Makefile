.PHONY: help restart logs status up down pull clean

help:
	@echo "Available commands:"
	@echo "  make restart  - Restart all containers"
	@echo "  make logs     - Show logs from all containers"
	@echo "  make status   - Show container status"
	@echo "  make up       - Start containers"
	@echo "  make down     - Stop containers"
	@echo "  make pull     - Pull latest images"
	@echo "  make clean    - Clean unused Docker resources"

restart:
	docker compose down
	docker compose up -d
	@echo "Containers restarted"

logs:
	docker compose logs -f

logs-app:
	docker logs blackscreen-prod --tail 30 -f

logs-traefik:
	docker logs traefik-prod --tail 30 -f

status:
	docker compose ps
	@echo ""
	@echo "Memory usage:"
	free -h
	@echo ""
	@echo "Container stats:"
	docker stats --no-stream

up:
	docker compose up -d

down:
	docker compose down

pull:
	docker compose pull

clean:
	docker system prune -f
	docker image prune -af

rebuild:
	docker compose down
	docker system prune -f
	docker compose pull
	docker compose up -d --force-recreate

