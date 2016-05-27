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

     $('#red').click(function() {
        num = Math.floor(Math.random() * max);
        
        $('yourNumber').html(counter + num);
        // counter = counter + num;
      });

     $('#green').click(function() {
        num = +counter.text();
        counter.text(num+ Math.ceil(Math.random() * max));
        counter = counter + num;
      });

      $('#blue').click(function() {
        num = +counter.text();
        counter.text(num+ Math.ceil(Math.random() * max));
      });

     $('#yellow').click(function() {
        num = +counter.text();
        counter.text(num+ Math.ceil(Math.random() * max));
      });


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
