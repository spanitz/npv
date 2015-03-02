#!/usr/bin/env node

var path    = require('path'),
    pkgjson = path.join(process.cwd(), 'package.json'),
    version = require(pkgjson).version;

process.stdout.write(version);
process.exit();