let statePassword = false;
let stateConfirm = false;

let password = document.getElementById('password');
let confirm = document.getElementById('confirm');
let passwordStrength = document.getElementById('password-strength');

let lowerUpperCase = document.querySelector('.low-upper-case i');
let number = document.querySelector('.one-number i');
let specialChar = document.querySelector('.one-special-char i');
let eightChar = document.querySelector('.eight-character i');
let matchConfirm = document.querySelector('.match-password i');

function myFunction(show) {
  show.classList.toggle('fa-eye-slash');
}

function toggle(idpassword){
  if ('password' == idpassword) {
    statePassword = setStatus(idpassword,statePassword);
  }else{
    stateConfirm = setStatus(idpassword,stateConfirm);
  }
}

function setStatus(id, status) {
  if (status) {
    document.getElementById(id).setAttribute("type","password");
    status = false;
  }else {
    document.getElementById(id).setAttribute("type","text");
    status = true;
  }
  return status;
}

password.addEventListener('keyup', function(){
  let pass = password.value;
  let conf = confirm.value;
  checkStrength(pass, conf);
  valideMatch(pass, conf);
});

confirm.addEventListener('keyup', function(){
  let pass = password.value;
  let conf = confirm.value;
  valideMatch(pass, conf);
});

function valideMatch(password, confirm) {

  if (password == confirm) {
    matchConfirm.classList.remove('fa-times');
    matchConfirm.classList.add('fa-check');
  }else {
    matchConfirm.classList.add('fa-times');
    matchConfirm.classList.remove('fa-circle');
  }
}

function checkStrength(password, confirm){
  let strength = 0;

  if (password.match(/([a-z].*[A-Z].*)|([A-Z].*[a-z])/)) {
    strength += 1;
    lowerUpperCase.classList.remove('fa-circle');
    lowerUpperCase.classList.add('fa-check');
  }else {
    lowerUpperCase.classList.add('fa-circle');
    lowerUpperCase.classList.remove('fa-check');
  }

  if (password.match(/([0-9])/)) {
    strength += 1;
    number.classList.remove('fa-circle');
    number.classList.add('fa-check');
  }else {
    number.classList.add('fa-circle');
    number.classList.remove('fa-check');
  }

  if (password.match(/([!,%,&,@,#,$,*,?,_,~,.])/)) {
    strength += 1;
    specialChar.classList.remove('fa-circle');
    specialChar.classList.add('fa-check');
  }else {
    specialChar.classList.add('fa-circle');
    specialChar.classList.remove('fa-check');
  }

  if (password.length > 7) {
    strength += 1;
    eightChar.classList.remove('fa-circle');
    eightChar.classList.add('fa-check');
  }else {
    eightChar.classList.add('fa-circle');
    eightChar.classList.remove('fa-check');
  }

  if (strength == 0) {
    passwordStrength.style = 'width: 0%';
  }else if (strength == 2) {
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.add('progress-bar-danger');
    passwordStrength.style = 'width: 10%';
  }else if (strength == 3) {
    passwordStrength.classList.remove('progress-bar-success');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.add('progress-bar-warning');
    passwordStrength.style = 'width: 60%';
  }else if (strength == 4) {
    passwordStrength.classList.remove('progress-bar-warning');
    passwordStrength.classList.remove('progress-bar-danger');
    passwordStrength.classList.add('progress-bar-success');
    passwordStrength.style = 'width: 100%';
  }
}
