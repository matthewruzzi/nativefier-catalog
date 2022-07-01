# nativefier-catalog
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmattruzzi%2Fnativefier-catalog.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmattruzzi%2Fnativefier-catalog?ref=badge_shield)


> Calalog of [nativefier](https://github.com/nativefier/nativefier) apps

## Install

```
npm install --global https://github.com/mattruzzi/nativefier-catalog
```

<!-- ## Usage

```js
import nativefierCatalog from 'nativefier-catalog';

nativefierCatalog('unicorns');
//=> 'unicorns & rainbows'
```

## API

### nativefierCatalog(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global nativefier-catalog
```
-->

## Usage

Type the name of an app to search or select it from the list to create it.

```
$ nativefier-catalog
? What app do you want to create …
Gmail
Google Meet
Google Docs
Google Sheets
Google Slides
```

## Dev

```
git clone https://github.com/mattruzzi/nativefier-catalog.git
cd nativefier-catalog
npm install
npm link
```

### Adding an app to apps.json

```
$ ./addApp.js [app-token] --name "App Name" --targetUrl https://appurl.example

  Options
    See https://github.com/nativefier/nativefier/blob/master/docs/api.md

  Examples
    $ ./addApp.js google-docs --name "Google Docs" --targetUrl https://docs.google.com/
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmattruzzi%2Fnativefier-catalog.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmattruzzi%2Fnativefier-catalog?ref=badge_large)