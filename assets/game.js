$(document).ready(function() {

   var counter = 0;
   var wins = 0;
   var losses = 0;
   var numberToGuess;



   $('#wins').text('0');
   $('#losses').text('0');

   
   var numberToGuess = Math.floor(Math.random() * 60) +1;
   $('#number').text(numberToGuess);
    
   
   function newNum(){
     var numberToGuess = Math.floor(Math.random() * 60) +1;
     $('#number').text(numberToGuess);
     counter = 0;
     $('#yourNumber').text("0");
   };
  
   
   var max = 13;
   counter = $('#yourNumber');

    $('#button1').click(function() {
       num = +counter.text();
       counter.text(num+ Math.ceil(Math.random() * max));
     });

    $('#button2').click(function() {
       num = +counter.text();
       counter.text(num+ Math.ceil(Math.random() * max));
     });

     $('#button3').click(function() {
       num = +counter.text();
       counter.text(num+ Math.ceil(Math.random() * max));
     });

    $('#button4').click(function() {
       num = +counter.text();
       counter.text(num+ Math.ceil(Math.random() * max));
     });



if ($(numberToGuess) == $(counter)) {
       console.log('hey');
} else {
   return false; 
}


   // for (var i=0; i< 5; i++){
   //   var buttonImage = $('<img>');
     
   //   imageCrystal.attr('data-num', numbers[i]);
   //   imageCrystal.attr('src', 'img/red.png');
   //   imageCrystal.addClass('buttons');
   //   $('.button').append(imageCrystal);
   // }




    if (counter == numberToGuess){
       wins++;
       $('#wins').text(wins);
       newNum();
       // newNumbers();
     }else if (counter > numberToGuess){
       losses++;
       $('#losses').text(losses);
       newNum();
       // newNumbers();
     }


// function checkWin() {

//    $('.crystalImage').on('click', function(){
//      counter = counter + parseInt($(this).data('num'));
     
//      $('#yourNumber').text(counter);

//      if (counter == numberToGuess){
//        wins++;
//        $('#wins').text(wins);
//        newNum();
//        // newNumbers();
//      }else if (counter > numberToGuess){
//        losses++;
//        $('#losses').text(losses);
//        newNum();
//        // newNumbers();
//      }
//    });//onclick
// // };

// checkWin();    






 });//document load