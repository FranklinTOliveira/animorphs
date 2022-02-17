const addComment = document.getElementById('addComment');
const submitComment = document.getElementById('submitComment');

function addCommentFunction(e) {
    const addCommentText = addComment.value;
    console.log(addCommentText);         
    document.getElementById('readersParagraph').textContent = addCommentText;
    alert('Someone left a comment.');
}  

submitComment.addEventListener('click', addCommentFunction);

function submitComment() {
        let name = document.forms["RegForm"]["Name"];
        let email = document.forms["RegForm"]["EMail"];
  
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }
   
        if (email.value == "") {
            window.alert(
              "Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
  
        return true;
}

function blackenedTrivia() {
  console.log('blackenedTrivia');
  const secretTrivia = document.getElementById('secretTrivia');
  secretTrivia.style.color = 'black';
}

const revealVissersHost = document.getElementById('revealVissersHost');
revealVissersHost.addEventListener('click', blackenedTrivia);

const councilLeader = document.getElementById('councilLeader');
councilLeader.style.backgroundColor = 'black';

function brighten(el) {
  if (councilLeader.style.backgroundColor === 'black') {
    councilLeader.style.backgroundColor = 'white';   
  }
  else councilLeader.style.backgroundColor = 'black';
}

const aboutEmperor = document.getElementById('aboutEmperor');
aboutEmperor.addEventListener('click', brighten);