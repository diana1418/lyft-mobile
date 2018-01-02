$(document).ready(function() {

  var $signUpInp = $('.signup-input');
  
  /* Creando variable booleana */

  var validateInput = false;
  
  /* Asociando evento al input */

  $signUpInp.on('input', function(event) {
    if ($signUpInp.length === 10) {
      validateInput = true;
      activeButton();
    } else {
      validateInput;
      desactiveButton();
    }
  });

  
  /* Funciones para habilitar el boton */

  function activeButton() {
    if (validateInput) {
      $('#button-signUp').attr('disable', false);
    }
  }
  
  function desactiveButton() {
    $('#button-signUp').attr('disabled', 'disabled');
  }
  
  /* Generar numeros aleatorios */
  function getRandomArbitrary() {
    var min = 0;
    var max = 10;
    return Math.random() * (max - min) + min;
  }

  

  /* Funcionalidad del botón para guardarlo en el LocalStorage */
  $('#button-signUp').on('click', function(event) {
    event.preventDefult(),
    // localStorage permite guardar info de los usurios
    localStorage.code = $signUpInp.val(); // Esta creando un propiedad "code"
    window.location.href = 'register.html';
  });
});