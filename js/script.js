const taul = document.getElementById('taul');
const bul = document.getElementById('bul');

function commentFunction(e) {
    const pul = taul.value;
    console.log(pul);         
    document.getElementById('paragraphOne').textContent = pul
    alert('Someone left a comment.');
}  

bul.addEventListener('click', commentFunction);

function showtaur() {
  console.log('showtaur');
  const taur = document.getElementById('taur');
  taur.style.display = 'block';
}

const bur = document.getElementById('bur');
bur.addEventListener('click', showtaur);

function myFunction() {
  document.getElementById("panel").style.display = "block";
}











const talrl = document.getElementById('talrl');
talrl.style.backgroundColor = 'black';

function brighten(el) {
  if (talrl.style.backgroundColor === 'black') {
    talrl.style.backgroundColor = 'white';   
  }
  else talrl.style.backgroundColor = 'black';
}

const blrl = document.getElementById('blrl');
blrl.addEventListener('click', brighten);