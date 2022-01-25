const taul = document.querySelector['taul'];
const bul = document.querySelector['bul'];

function commentFunction() {
    const pul = document.textarea.value('');         // Create a text node
    const comment = document.getElementById("visserOne").appendChild("paragraphOne");     // Append <li> to <ul> with id="myList" 
    alert('Someone left a comment.');
}  

bul.addEventListener("click", commentFunction);

const taur = document.querySelector['taur'];
const showtaur = taur.style.display;

const bur = document.querySelector['bur'];
bur.addEventListener("click", showtaur);

const talrl = document.getElementById("talrl");
talrl.style.backgroundColor = 'black';

function brighten(el) {
  if (el.style.backgroundColor === 'black') {
    el.style.backgroundColor = 'white';   
  }
  else el.style.backgroundColor = 'black';
}

const blrl = document.querySelector['blrl'];
blrl.addEventListener("click", brighten);