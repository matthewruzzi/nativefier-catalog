#!/usr/bin/env node
'use strict';
// const meow = require('meow');
const { AutoComplete } = require('enquirer');
const fs = require('fs');
const createNativefierApp = require('.');
const YAML = require('yaml');
const apps = YAML.parse(fs.readFileSync('./apps.yaml', 'utf8'));

/*const cli = meow(`
	Usage
	  $ nativefier-catalog [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ nativefier-catalog
	  unicorns & rainbows
	  $ nativefier-catalog ponies
	  ponies & rainbows
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});*/
var appsList = [];
Object.keys(apps).forEach(element => {
	appsList.push({ value: element, name: apps[element].name })
});
// appsList.value = Object.keys(apps);
// appsList.name = apps[Object.keys(apps)].name;
const prompt = new AutoComplete({
	name: 'app',
	message: 'What app do you want to create',
	limit: 10,
	initial: 0,
	choices: appsList
});

prompt.run()
	.then(answer => createNativefierApp(answer))
	.catch(console.error);

// console.log(nativefierCatalog(cli.input[0] || 'unicorns'));
