# count-spaces
[![NPM version](https://badge.fury.io/js/count-spaces.svg)](https://badge.fury.io/js/count-spaces) [![Build Status](https://travis-ci.org/dustinspecker/count-spaces.svg)](https://travis-ci.org/dustinspecker/count-spaces) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/count-spaces.svg)](https://coveralls.io/r/dustinspecker/count-spaces?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/count-spaces/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/count-spaces) [![Dependencies](https://david-dm.org/dustinspecker/count-spaces.svg)](https://david-dm.org/dustinspecker/count-spaces/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/count-spaces/dev-status.svg)](https://david-dm.org/dustinspecker/count-spaces/#info=devDependencies&view=table)

> Count number of spaces

## Install
```
npm install --save count-spaces
```

## Usage
### ES2015 (ES6)
```javascript
import {end, start, total} from 'count-spaces';

end('some spaces  ');
// => 2

start('  start');
// => 2

total('  line of spaces ');
// => 5
```

### ES5
```javascript
var countSpaces = require('count-spaces');

countSpaces.end('some spaces  ');
// => 2

countSpaces.start('  start');
// => 2

countSpaces.total('  line of spaces ');
// => 5
```

## LICENSE
MIT