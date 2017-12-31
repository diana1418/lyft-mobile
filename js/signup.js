$(document).ready(function() {
    var $email=$('#inputEmail');
    var $password= $('#inputPassword');
    var $vPassword= $password.val().length>=6;
    var $check= $('#check');
  
    //Creando variables booleanas
    var validateEmail= false;
    var validatePassword= false;
    var validateCheked= false;
  
    //Asociando evento a los inputs
  $email.on('input', function(e) {
     // console.log(e.target.value);
     // console.log($(this).val());
     var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
     console.log(PATERNEMAIL.test($(this).val()));
     if(this===true){
       validateEmail=true;
       activeButton();
     } else {
       validateEmail;
       desactiveButton();
     }
    })
  
  $password.on('input', function() {
      if($vPassword) {
        
      } else {
        
      }
    })
  
  $(input {type='checkbox'}).on('click', function(e) {
      e.target.checked
     console.log($(this)); //valor booleano
     if(this===true) {
       console.log('');
     }else {
  
     }
      
    })
  
    activeButton() {
      if(validateEmail) {
        $('#button-signUp').attr('disable',false);
      }
    }
  
    desactiveButton() {
  
    }
  
  
    
    $('#button-signUp').on('click', function(e){
      e.preventDefult(),
  
      // localStorage permite guardar info de los usurios
      localStorage.email=$email.val(); //Esta creando un propiedad email
      localStorage.password=$password.val();
  
    })
  })
  
  