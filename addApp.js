#!/usr/bin/env node
const fs = require('fs');
const fileName = './apps.json';
const file = require(fileName);
const meow = require('meow');
const cli = meow(`Usage
    $ ./addApp.js [app-token] --name "App Name" --targetUrl https://appurl.example

  Options
    See https://github.com/nativefier/nativefier/blob/master/docs/api.md

  Examples
    $ ./addApp.js google-docs --name "Google Docs" --targetUrl https://docs.google.com/`);
file[cli.input[0]] = cli.flags;
fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
});
