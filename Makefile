help: 
	@echo "help- Generates this"
	@echo "bdd- runs bdd test"
	@echo "setup- setup flow server for static typing"
	

bdd:
	@echo "running cucumber"
	./node_modules/.bin/cucumber.js

setup:
	@echo "setup"
	@echo "setup flow init"
	yarn run flow init
	@echo "run flow"
	yarn run flow
