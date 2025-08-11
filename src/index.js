'use script'
/**
 * @param {string} str - рядок для поліндрома
 * @returns {boolean} - true, якщо рядок є поліндроном, інакше false
 * @description- функція перевіряє, чи є рядок поліндромом (ігнорує регістр і не буквенні символи)
 *
 */

const isPolindrome = (str) => {
  if (typeof str !== 'string') {
    return false
  }
  const cleanStr = str.toLowerCase().replace(/[^a-zа-яґєії0-9]/giu, '');
                                     

  return cleanStr === cleanStr.split('').reverse().join('')
}

console.log(isPolindrome('Кит на морі романтик'))
console.log(isPolindrome('Pull up if I pull up**'))
console.log(isPolindrome('Pоза упала на лапу Азора'))
console.log(isPolindrome('**/;lol '))
console.log(isPolindrome(123321))
