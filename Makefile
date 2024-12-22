DOCKER_REGISTRY ?=

.PHONY: usage
usage:
	@echo "USAGE:"
	@echo "   make command [options]"
	@echo
	@echo "COMMANDS:"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed 's/^/   /' | sed -e 's/\\$$/AA/' | sed -e 's/#//g' | column -t -s ":" | sort -k1

.PHONY: install
install: ## Install all dependencies
	npm install

.PHONY: check
check: ## Runs linter on the code
	npm run lint
	npx prettier --check "app/**/*.js"

.PHONY: format
format: ## Format the code
	npx prettier --write "app/**/*.js"

.PHONY: build
build: ## Build nextjs app
	npm run build