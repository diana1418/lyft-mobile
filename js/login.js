$(document).ready(function() {
  var $signUpInp = $('.signup-input');
    
  /* Creando variable booleana */
  
  var validateInput = false;
  
  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.code);
  $signUpInp.on('input', function(event) {
    if ($(this).val() === localStorage.code) {
      validateInput = true;
    }
  });
  
  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateInput) {
      alert('WELCOME!!');
      window.location.href = 'close.html';
    } else {
      alert('Oh no, you need register');
    }
  });
});