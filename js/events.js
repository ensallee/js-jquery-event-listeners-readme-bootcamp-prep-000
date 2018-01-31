//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}
function frameIt(){
  $('img').bind('load', function(){
    return $('img').bind('.tasty');
  });
}
function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}
function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  });
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
