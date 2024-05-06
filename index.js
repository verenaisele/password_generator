const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let generateBtn = document.getElementById("generate-btn")
let pwOne = document.getElementById('pw-one');
let pwTwo = document.getElementById('pw-two');

//create random number and take this array item
//do this 15 times for the array
//show them in pwOne and pwTwo

function createRandomNumber() {
  let randomIndex = Math.floor (Math.random() * characters.length)
   return characters[randomIndex]
}

let passwordLength = 15

function createRandomPassword() {
  let randomPassword = " "
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += createRandomNumber()
  }
  return randomPassword
}

let randomPwOne = createRandomPassword()
let randomPwTwo = createRandomPassword()

generateBtn.addEventListener("click", function() {
  pwOne.textContent = randomPwOne
  pwTwo.textContent = randomPwTwo
})





