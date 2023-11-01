document.addEventListener (`DOMContentLoaded`, function () {
const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputDate= document.getElementById('inputDate');
const inputTime= document.getElementById('inputTime');
const inputMessage = document.getElementById('inputMessage');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = inputName.value.trim();

  if (name.length < 3 ) {
    outputName.textContent = `Please write your name.`;
    outputName.style.color = `red`;
  } else {
    outputName.textContent = `Hello, ${name}!`;
    outputName.style.color =`green`;
  }

  const email = inputEmail.value;

  if (email === `` ) {
     outputEmail.textContent = `Please write your email.`;
     outputEmail.style.color = `red`;
  } else {
    outputEmail.textContent = `Well received`;
    outputEmail.style.color =`green`;
  }

  const date = inputDate.value;

  if (date === `` ) {
     outputDate.textContent = `Please select preferred date`;
     outputDate.style.color = `red`;
  } else {
    outputDate.textContent = `Well received`;
    outputDate.style.color =`green`;
  }

  const time = inputTime.value;
  
   if (time === `` ) {
       outputTime.textContent = `Please select preferred time`;
       outputTime.style.color = `red`;
  } else {
      outputTime.textContent = `Well received`;
      outputTime.style.color =`green`;
  }

  const message = inputMessage.value; 

  if (message.length < 12) {
     outputMessage.textContent = `Please write the additional notes`;
     outputMessage.style.color = `red`;
  } else {
    outputMessage.textContent = `Thank you for the comments!`;
    outputMessage.style.color =`green`;
  }



}
})