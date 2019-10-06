include docker/.env-dev

.PHONY: build
build: up

.PHONY: down
down:
	@docker-compose -f docker/docker-compose-dev.yml down

.PHONY: up
up: down
	@docker-compose -f docker/docker-compose-dev.yml build
	@docker-compose -f docker/docker-compose-dev.yml up -d

.PHONY: composer-install
composer-install:
	@docker exec -it onboarding-web sh -c "composer install -o -n"

.PHONY: laravel-migrate
laravel-migrate:
	@docker exec -it onboarding-web sh -c "php artisan migrate"

.PHONY: tests
tests:
	@docker exec -it onboarding-web sh -c "DB_CONNECTION=$(TEST_DB_CONNECTION); php artisan migrate"
	@docker exec -it onboarding-web sh -c "DB_CONNECTION=$(TEST_DB_CONNECTION); vendor/bin/phpunit --colors=always"

.PHONY: shell
shell:
	@docker exec -it onboarding-web sh -c "export COLUMNS=`tput cols`; export LINES=`tput lines`; exec sh"

.PHONY: shell-queue
shell-queue:
	@docker exec -it onboarding-queues sh -c "export COLUMNS=`tput cols`; export LINES=`tput lines`; exec sh"

.PHONY: shell-mysql
shell-mysql:
	@docker exec -it onboarding-mysql sh -c "export COLUMNS=`tput cols`; export LINES=`tput lines`; exec sh"

.PHONY: shell-mysql-test
shell-mysql-test:
	@docker exec -it onboarding-mysql-test sh -c "export COLUMNS=`tput cols`; export LINES=`tput lines`; exec sh"

.PHONY: logs
logs:
	@docker-compose -f docker/docker-compose-dev.yml logs -f -t

.PHONY: browser
browser:
	@xdg-open $(APP_HOST):$(APP_PORT)

.PHONY: mysql
mysql:
	@mysql -h $(MYSQL_HOST_SHELL) -P $(MYSQL_HOST_PORT) -u $(MYSQL_USER) -p$(MYSQL_PASSWORD) $(MYSQL_DATABASE)

.PHONY: mysql-test
mysql-test:
	@mysql -h $(MYSQL_HOST_SHELL) -P $(TEST_MYSQL_HOST_PORT) -u $(MYSQL_USER) -p$(MYSQL_PASSWORD) $(MYSQL_DATABASE)
