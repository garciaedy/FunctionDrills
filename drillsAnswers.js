// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
'use strict'

/// DO NOT EDIT ABOVE THIS LINE ///

/// /// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
// Test Cases:
//   Expect sumOfNums([1,2,3,4,5]) to equal 15
//   Expect sumOfNums([0,0,5]) to equal 5
//   Expect sumOfNums([-1,0,1])) to equal 0
//   Expect sumOfNums([])) to equal 0

const sumOfNums = function (numsArray) {
  let total = 0

    for (let i=0;i<numsArray.length;i++){
      total += numsArray[i]
    }
    return total
}
sumOfNums([1,2,3,4,5])
console.log(sumOfNums([1, 2, 3, 4, 5])) //15
console.log(sumOfNums([0, 0, 5]))       //5
console.log(sumOfNums([-1, 0, 1]))      //0
console.log(sumOfNums([]))              //0
console.log('')



// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
// Test Case: 
//   Expect numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]) to equal [11, 20, 100]

const numsGreaterThanTen = function (numsArray) {
    let i;
    let numbers = [];
  for(i = 0; i <= numsArray.length - 1; i++){
    console.log(numsArray[i])
    
      if(numsArray[i] > 10){
        numbers.push(numsArray[i])
      }  
    }
    return numbers
  }
  // make own number
  numsGreaterThanTen([2,4,6,10,11,30,80])
console.log(numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]))
//[11, 20, 100]
console.log(numsGreaterThanTen([2, 5, 7, 11, 29, 48, 56, 90]))
//[11, 29, 48, 56, 90]
console.log('')
// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// Test Cases: 
//   Expect allGreaterThanTen([11, 20, 100]) to equal true
//   Expect allGreaterThanTen([9, 100, 299])) to equal false
//   Expect allGreaterThanTen([1, 2])) to equal false
//   Expect allGreaterThanTen([10])) to equal false
//   Expect allGreaterThanTen([])).to.equal(true);

const allGreaterThanTen = (numberArray) => {

  for (let i = 0; i < numberArray.length; i++) {
    let numb = numberArray[i]

    if (numb > 10) {
      return true
    }

    else {
      return false
    }
  }
  return true
}

console.log(allGreaterThanTen([11, 20, 100])) //true
console.log(allGreaterThanTen([9, 100, 299])) //false
console.log(allGreaterThanTen([1, 2]))        //false
console.log(allGreaterThanTen([10]))          //false
console.log(allGreaterThanTen([]))            //true
console.log('')



// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
// Test Cases: 
//  Expect wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
//    to equal ['alphabet', 'banana', 'carrot']

const wordsWithAtLeastFiveLetters = (words) => {

  let newArray = []

  for (let i = 0; i <= words.length - 1; i++) {
     // console.log(words[i])
    if (words[i].length > 5) {
      newArray.push(words[i])
    }
  }
  // return newArray
  console.log('newArrays')

}

// const allGreaterThanTen =  (numsArray = [0]) => {

//   let numbers = [];
// for(let i = 0; i <= numsArray.length - 1; i++){
//   console.log(numsArray[i])

//     if(numsArray[i] > 10){
//       numbers.push(numsArray[i])
//       return true;
//     }  
//     else if(numsArray[i] === 0){
//       return true
//     }
//     else {
//       return false;
//     }
//   }
//  }
// allGreaterThanTen()
console.log('s')

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases: 
//  Expect allStartingWithA(['apple', 'alligator', 'Arkansas'])) to equal true
//  Expect allStartingWithA(['Amy', 'Bob'])) to equal false
//  Expect allStartingWithA([]) to equal true

const allStartingWithA = function (words) {

  // Your Code Here

    for(let i = 0; i < words.length;i++){
      // console.log(words[i][0])
     let wordsFirstLtrA = words[i].charAt(0);
      if (wordsFirstLtrA !== 'a' && wordsFirstLtrA !== 'A'){
        return false
      }
    }return true
  }
  allStartingWithA(['apple', 'alligator', 'Arkansas'])
  allStartingWithA(['Amy', 'Bob'])

      // or


// const allStartingWithA = (words) => {
//   for (let i = 0; i < words.length; i++) {
//     let awords = words[i][0]

//     console.log(words)
//     let a = 'a'
//     let A = 'A'
//     if (awords !== (a || A)) {
//       return false
//     }
//     return true
//   }
//   return true
// }

// console.log(allStartingWithA(['apple', 'alligator', 'Arkansas']))
// //true
// console.log(allStartingWithA(['Amy', 'Bob']))
// //false
// console.log(allStartingWithA([]))
// //true
// console.log('')

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
// Test Cases: 
//   Expect anyStartingWithB(['Amy', 'Bob']) to equal true
//   Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
const anyStartingWithB = (words) => {

  console.log(words)
  for (let i = 0; i < words.length; i++) {
    let bWords = words[i][0]

    let b = 'b'
    let B = 'B'

    if (bWords !== (B || b)) {
      // console.log(false)
    }
    if (bWords === (B || b)) {
      return true
    }
  }

  return false
}

console.log(anyStartingWithB(['Amy', 'Bob']))
//true
console.log(anyStartingWithB(['apple', 'alligator', 'Arkansas']))
//false

// This last set of functions are all related to one another! Use functions 7 to solve function 8,
// use function 8 to solve 9, 10, and 11.
console.log('')
// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
// Test Cases: 
//  Expect hasAtLeastNVowels('uncopywriteable', 0)) to equal true
//    This case should be true as long as n is less or equal to 6
//  Expect hasAtLeastNVowels('dangerous', 5) to equal false
//  Expect hasAtLeastNVowels('banana', -1) to equal null

const hasAtLeastNVowels = function (word, n) {
  if (n < 0) {
    return null
  }
  let testWord = word.toLowerCase()
  let vCount = 0
  for (let i = 0; i < testWord.length; i++) {
    if (testWord[i] == "a" || testWord[i] == "e" || testWord[i] == "i" || testWord[i] == "o" || testWord[i] == "u") {
      vCount++
    }
  }
  if (vCount >= n) {
    return true
  }
  return false
 }

//   // or
// const hasAtLeastNVowels = (word, n) => {

//   console.log(word)
//   let wordarr = word.split('')

//   let vowel = []
//   for (let i = 0; i < wordarr.length; i++) {
//     let letters = wordarr[i]
//     let vowelarr = ['a', 'e', 'i', 'o', 'u']

//     for (let i = 0; i < vowelarr.length; i++) {
//       let vowels = vowelarr[i]

//       if (letters === vowels) {
//         vowel.push(vowels)
//       }
//     }

//     if (n < 0) {
//       return null
//     }

//     if (vowel.length >= n) {
//       return true
//     }
//   }

//   // if (vowel.length < n) {
//   // }

//   return false
// }

// console.log(hasAtLeastNVowels('uncopywriteable', 0))
// //true as long as n is less or equal to 6.... 6 vowels
// console.log(hasAtLeastNVowels('dangerous', 5))
// //false........ 4 vowels
// console.log(hasAtLeastNVowels('banana', -1))
// //null.... 3 vowels
// console.log('')

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
// Test Cases:
//   Expect wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
//     to equal ['alphabet', 'doe']

const wordsWithAtLeastTwoVowels = function (words) {
  let twoVArray = []
  for (let i = 0; i < words.length; i++) {
    let vCheck = hasAtLeastNVowels(words[i], 2)
    if (vCheck == true) {
      twoVArray.push(words[i])
    }
  }
  return twoVArray
}

    // or

// const wordsWithAtLeastTwoVowels = function (words) {
//   console.log(words)
//   let vowel = []
//   let vowelarr = ['a', 'e', 'i', 'o', 'u']

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i]
//     console.log(word)
//     let wordarr = word.split('')
//     for (let i = 0; i < vowelarr.length; i++) {
//       let vowels = vowelarr[i]
//       for (let i = 0; i < wordarr.length; i++) {
//         let letters = wordarr[i]

//         if (letters === vowels) {
//           vowel.push(vowels)
//         }
//         if (vowel.length > 2) {
//         }
//       }
//       console.log(vowel)
//     }
//     return false
//   }
// }

// console.log(wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg']))
// //['alphabet', 'doe']
// console.log('')


// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
//  Expect allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']) to equal true
//  Expect allHaveAtLeastTwoVowels(['Al', 'Barbara']) to equal false
//  Expect allHaveAtLeastTwoVowels(['Al', 'buck', 'can']) to equal false
//  Expect allHaveAtLeastTwoVowels([]) to equal true

const allHaveAtLeastTwoVowels = function (words) {
  console.log(words)

  let vowel = []

  for (let i = 0; i < words.length; i++) {
    let letters = words[i]
    // console.log(letters)
    let wordarr = letters.split('')
    // console.log(wordarr)

    for (let i = 0; i < wordarr.length; i++) {
      let letter2 = wordarr[i]
      // console.log(letter2)

      let vowelarr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
      for (let i = 0; i < vowelarr.length; i++) {
        let vowels = vowelarr[i]
        // console.log(vowels)
        if (vowels === letter2) {
          vowel.push(letter2)
        }
        if (vowel >= 2) {
          // console.log(vowel)
          return true
        }
      }
    }
    return false
  }
  return true
}

console.log(allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']))
//true
console.log(allHaveAtLeastTwoVowels(['Al', 'Barbara']))
//false
console.log(allHaveAtLeastTwoVowels(['Al', 'buck', 'can']))
//false
console.log(allHaveAtLeastTwoVowels([]))
//true
console.log('')

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
// Test Cases:
//  Expect anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])) to equal true
//  Expect anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])) to equal true
const anyHaveAtLeastTwoVowels = function (words) {

  console.log(words)

  let vowel = []

  for (let i = 0; i < words.length; i++) {
    let letters = words[i]
    // console.log(letters)
    let wordarr = letters.split('')
    // console.log(wordarr)

    for (let i = 0; i < wordarr.length; i++) {
      let letter2 = wordarr[i]
      // console.log(letter2)

      let vowelarr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
      for (let i = 0; i < vowelarr.length; i++) {
        let vowels = vowelarr[i]
        // console.log(vowels)
        if (vowels === letter2) {
          vowel.push(letter2)
        }
        if (vowel >= 2) {
          // console.log(vowel)
          // return true
        }
      }
    }
    return true
  }
  return true
}

console.log(anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']))
//true
anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])
//true
console.log('')


// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
//   Expect noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])) to equal true
//   Expect noneHaveTwoOrMoreVowels(['Al', 'Barbara'])) to equal false
//   Expect noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']) to equal false
//   Expect noneHaveTwoOrMoreVowels([]) to equal true


const noneHaveTwoOrMoreVowels = function (words) {

  console.log(words)

  let vowel = []

  for (let i = 0; i < words.length; i++) {
    let letters = words[i]
    // console.log(letters)
    let wordarr = letters.split('')
    // console.log(wordarr)

    for (let i = 0; i < wordarr.length; i++) {
      let letter2 = wordarr[i]
      // console.log(letter2)

      let vowelarr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
      for (let i = 0; i < vowelarr.length; i++) {
        let vowels = vowelarr[i]
        // console.log(vowels)
        if (vowels === letter2) {
          vowel.push(letter2)
        }
        if (vowel < 2) {
          // console.log(vowel)
          return true
        }
      }
      return false
    }
    // return false
  }
  return true

}

console.log(noneHaveTwoOrMoreVowels(['Al', 'buck', 'can']))
//true
console.log(noneHaveTwoOrMoreVowels(['Al', 'Barbara']))
//false
console.log(noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']))
//false
console.log(noneHaveTwoOrMoreVowels([]))
//true
console.log('')


// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
// Test Cases:
//  Expect buildObjectFromWords(['apple', 'banana', 'cranberry'])
//    to equal {'apple': 5, 'banana': 6, 'cranberry': 9}


const buildObjectFromWords = function (words) {
  let keyarr = []
  let valarr = []
  let newObject = {}

  for (let i = 0; i < words.length; i++) {

    let key = words[i]
    keyarr.push(key)

    let val = words[i].length
    valarr.push(val)

    newObject[keyarr[i]] = valarr[i]
  }
  console.log(keyarr)
  console.log(valarr)
  return newObject
}

console.log(buildObjectFromWords(['apple', 'banana', 'cranberry']))
// {'apple': 5, 'banana': 6, 'cranberry': 9}
console.log(buildObjectFromWords(['cat', 'horse', 'elephant']))
// { cat: 3, horse: 5, elephant: 8}



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
