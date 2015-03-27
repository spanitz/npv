#!/usr/bin/env node

var path    = require('path'),
    pkgjson = path.join(process.cwd(), 'package.json'),
    npmpkg  = require(pkgjson),
    version = require(pkgjson).version,
    args    = process.argv.slice(2);

// set default if no params given 
if (args.length === 0) {
	args.push('--version');
}

// handle parametrs
args.forEach(function (val, index, array) {
	switch(val) {
	    case '--version':
	    case '-v':
	        printVersion();
	        break;
	    case '--name':
	    case '-n':
	        printName();
	        break;
	}
	process.exit();
});

// return package.json property values
function getPackageValue(property) {
	return npmpkg[property] || 'Could not find "' + property + '" at project package file!';
}

// Print project version
function printVersion() {
	process.stdout.write( getPackageValue('version') );
}

// Print project name
function printName() {
	process.stdout.write( getPackageValue('name') );
}
