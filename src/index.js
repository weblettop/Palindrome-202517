'use script'
/**
 * @param {string} str - рядок для поліндрома
 * @returns {boolean} - true, якщо рядок є поліндроном, інакше false
 * @description- функція перевіряє, чи є рядок поліндромом (ігнорує регістр і не буквенні символи)
 *
 */

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zа-яґєії0-9]/gu, '')

  let left = 0
  let right = cleanStr.length - 1
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

console.log(isPalindrome('Кит на морі романтик'))
console.log(isPalindrome('Pull up if I pull up**'))
console.log(isPalindrome('Pоза упала на лапу Азора'))
console.log(isPalindrome('**/;lol '))
console.log(isPalindrome(123321))
