const words = require('../data/five_letters_words.json')

// 找出包含 letters 中所有字母的单词
function search(letters) {
  let ret = []

  if (letters.length <= 5) {
    const lettersArr = letters.split('')
    ret = words.filter(word => lettersArr.every(c => word.includes(c)))
  }

  console.log(ret);
}

module.exports = search
