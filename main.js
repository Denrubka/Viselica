alert('Добро пожаловать в игру "Виселица". Программа подберет рандомное слово, которое вам нужно будет угадать.');
let words  = ['лук', 'помидор', 'огурец', 'банан', 'яблоко', 'апельсин'];
let word = words[Math.floor(Math.random(words.length) * words.length)]

let answerArray = [];
let remainingLetters = word.length;
for(let i = 0; i < word.length; i++) {
  answerArray.push("_");
}
while(remainingLetters > 0) {
  alert(answerArray.join(' ') +  " Вам осталось угадать " + remainingLetters + " буквы")
  let letter = prompt("Введите букву");
  if(letter === null) {
    break;
  } else if(letter.length !== 1) {
    alert("Пожалуйста, введите только одну букву");
  } else {
    for(let j = 0; j < word.length; j++) {
      if(letter == word[j]) {
        answerArray[j] = letter;
        remainingLetters--;
      }
    }
  }
}


