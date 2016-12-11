#!/usr/bin/env node

const path = require('path');
const _ = require('lodash');
const args = process.argv.slice(2);

let property = 'version';

if (args.length === 1) {
	property = args[0];
}

process.stdout.write(_.get(require(path.join(process.cwd(), 'package.json')), property));
