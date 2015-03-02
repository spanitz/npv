#!/usr/bin/env node

var v = require('root-require')('package.json').version;
process.stdout.write(v);
process.exit();