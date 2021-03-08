#!/usr/bin/env node
'use strict';
const meow = require('meow');
const nativefierCatalog = require('.');

const cli = meow(`
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
});

console.log(nativefierCatalog(cli.input[0] || 'unicorns'));
