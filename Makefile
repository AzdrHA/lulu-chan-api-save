start:
	@docker compose up

stop:
	@docker compose down

build:
	@docker compose build

rebuild:
	@docker compose build --no-cache

.PHONY: start stop
restart: stop start

enter:
	@docker compose exec app sh

migration:
	@docker compose exec app npm run migration:generate && npm run migration:run
