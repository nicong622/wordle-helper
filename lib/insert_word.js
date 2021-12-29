const fs = require('fs')
const path = require('path')
const words = require('../data/five_letters_words.json')

module.exports = function (word) {
  words.push(word)
  fs.writeFileSync(path.resolve(__dirname, '../data/five_letters_words.json'), JSON.stringify(words))
}