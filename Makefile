.PHONY: start

node_modules: package.json
	npm install

start: node_modules
	npm start
