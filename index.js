// Code your solutions in this file

function writeCards(namesArray, event) {
  let customMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
    customMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  }
  return(customMessages);
}

function countdown(number) {
  while (number >= 0) {
    console.log(number);
    number --;
  }
}