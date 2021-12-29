#!/usr/bin/env node

const searchWords = require('../lib/search_words')
const insert = require('../lib/insert_word')

const yargs = require('yargs/yargs')(process.argv.slice(2))

const searchModuel = {
  command: 'search [value]',
  aliases: ['s'],
  desc: 'search words',
  handler: (argv) => searchWords(argv.value)
}

const insertModule = {
  command: 'insert [value]',
  aliases: 'i',
  desc: 'insert a word',
  handler: (argv) => insert(argv.value)
}

// .command(['start [app]', 'run', 'up'], 'Start up an app', {}, (argv) => {
//   console.log('starting up the', argv.app || 'default', 'app')
// })
// .command({
//   command: 'configure [key] [value]',
//   aliases: ['config', 'cfg'],
//   desc: 'Set a config variable',
//   builder: (yargs) => yargs.default('value', 'true'),
//   handler: (argv) => {
//     console.log(`setting ${argv.key} to ${argv.value}`)
//   }
// })

yargs
  .command(searchModuel)
  .command(insertModule)
  .demandCommand()
  .help()
  .argv
