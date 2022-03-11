#!/usr/bin/env node
const fs = require('fs');
const fileName = './apps.yaml';
const meow = require('meow');
const YAML = require('yaml');
const apps = YAML.parse(fs.readFileSync(fileName, 'utf8'))

const cli = meow(`Usage
    $ ./addApp.js [app-token] --name "App Name" --targetUrl https://appurl.example

  Options
    See https://github.com/nativefier/nativefier/blob/master/docs/api.md

  Examples
    $ ./addApp.js google-docs --name "Google Docs" --targetUrl https://docs.google.com/`);
file[cli.input[0]] = cli.flags;
fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeYAML(err) {
    if (err) return console.log(err);
    console.log(YAML.stringify(file));
    console.log('writing to ' + fileName);
});
