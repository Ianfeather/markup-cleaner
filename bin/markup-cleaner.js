#!/usr/bin/env node

var MarkupCleaner = require('../lib/markup-cleaner');
var optimist = require('optimist')
	.usage('markupcleaner [options] url')

	.boolean('h')
	.alias('h', 'help')
	.describe('h', 'This screen')

	.boolean('v')
	.alias('v', 'version')
	.describe('v', 'Version info');

var argv = optimist.argv;

if (argv.h) {
  optimist.showHelp();
  process.exit();
}

if (argv.v) {
	package = require('../package.json')
	console.log('v' + package.version)
	process.exit();
}

var markupCleaner = new MarkupCleaner(argv._[0]);
markupCleaner.clean();