$(document).ready(function(){
  reset();

  var arrNumeri = [];
  var arrPlayer = [];
  var clock;
  var numeriComuni = [];

  // clicchiamo sul bottone via
  $('#via').click(function(){

    // generiamo i 5 numeri
    for(var i = 0; i < 5; i++){
      arrNumeri.push(randomNumber(0, 100))
    }

    // stampiamo i 5 numeri e nascondiamo il tasto "via"
    printOutput(arrNumeri.toString(), '#display')
    $(this).hide();

    // dopo 5s i numeri spariscono e compare "inserisci numero"
    setTimeout(function(){
      printOutput('Inserisci 5 numeri', '#display')
      $('#utente_numeri').show();
    }, 5000);
  })

  $('#invia').click(function(){
    
    var text = $('#user').val().trim();
    arrPlayer.push(text);
    $('#user').val("");
    
    if(arrPlayer.length === 5){
      
      $('#utente_numeri').hide();
      printOutput("Calcolo in corso", '#display')
      
      clock = setInterval(function(){
        $('#display').hide()
      }, 3000);
    }
  })

  for(var i = 0; i < arrNumeri.length; i++){
    var numberC = arrNumeri[i];
    if(numberC.includes(arrPlayer)){
      numeriComuni.push(numberC)
    }
  }

  console.log(numeriComuni)

  

})


// FUNZIONI
function reset(){
  printOutput('Clicca sul bottone', '#display')
  $('#via').show();
  $('#utente_numeri').hide();
}

function printOutput(text, target){
  $(target).text(text)
}
  
function randomNumber(min, max){
  return Math.ceil(Math.random() * (max - min) + min);
}

  

