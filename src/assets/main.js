let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields(){
  answer = Math.random()*10000;
  answer =  Math.floor(answer);
  answer = answer.toString();
  while(answer.length<4){
    answer = "0"+answer;
  }
  return answer;
}


//implement new functions here
