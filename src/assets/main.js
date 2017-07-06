let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let mmessage = document.getElementById('message');
function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
}

function setHiddenFields(){
  var num = Math.random()*10000;
  num =  Math.floor(num);
  num = num.toString();
  while(num.length<4){
    num = "0"+num;
  }
  answer.value = num

}

function setMessage(mmessage){
  mmessage.innerHTML = "kkkkkk";
  //  alert("kkjkj");
}


//implement new functions here
