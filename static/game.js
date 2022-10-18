let count = 0; //count points
let flagAnswer = 0; //flag for answer already give or not

$(document).ready(() => {
  // get one enigma in random and loop 10 times
  const delay = 5*1000;
  for (let i = 0; i < 10; i++) {
    setTimeout(() => 
      $.get({
        url: '/enigma.json',
        success: function(data) {
          setTimeout(() => displayElement(data), 100);
          flagAnswer = 0;
          $('#answer').val('');//let empty span answer after one enigma
          $("#answer").css({"background-color": "white"});
        }
      }), delay*(7*i)
    )
  }
  //write end of the game after the loop
  setTimeout(() => $('#end').text("Fin de la partie!"), delay*7*10);
});

function clearAllElement() {
  // clear all the elements of the screen
  clearElement('#category-value');
  clearElement('#theme-value');
  clearElement('#indice1');
  clearElement('#indice2');
  clearElement('#indice3');
  clearElement('#indice4');
  clearElement('#indice5');
  clearElement('#reponse');
}

function clearElement(divSelector, delay=30*1000) {
  //clear one element of the screen
  setTimeout(() => $(divSelector).empty(), delay);
}

function displayElement(data) {
  //display elements of one enigma in the screen
  const delay = 5*1000; //delay of 5 seconds

  $('#category-value').text(data.category); //display category

  $('#theme-value').text(data.theme); // display theme

  $('#indice1').text(data.clue1); //display clue 1
  $('#indice2').hide();
  $('#indice3').hide();
  $('#indice4').hide();
  $('#indice5').hide();
  $('#reponse').hide();
  $('#indice2').text(data.clue2);
  $('#indice3').text(data.clue3);
  $('#indice4').text(data.clue4);
  $('#indice5').text(data.clue5);
  $('#reponse').text(data.answer);
  // sleep 5 secondes and display clue
  setTimeout(() => $('#indice2').show(), delay);
  setTimeout(() => $('#indice3').show(), delay*2);
  setTimeout(() => $('#indice4').show(), delay*3);
  setTimeout(() => $('#indice5').show(), delay*4);
  setTimeout(() => $('#reponse').show(), delay*5);
  buzzerAnswer(data);
  clearAllElement()
}

function buzzerAnswer(data) {
  // user answers and click on the buzzer to record the answer and give the good numbers of points
  let buzzerclicked;
  let userAnswer;
  $("#answer").keypress(() => {
    //press enter
    if ( event.which == 13 ) {
      buzzerclicked = true;
      userAnswer = $("#answer").val();
      userAnswer = userAnswer.toUpperCase();
    if ($("#reponse").is(":visible")) {
      count += 0;
      $("#number_points").text(count);
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice5").is(":visible") && $("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 1;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 2;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 3;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 4;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && flagAnswer == 0) {
      count += 5;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else {
      count += 0;
      $("#number_points").text(count);
    }
      }
  });
  $(".answerbuzzer").click(() => {
    //click buzzer
    buzzerclicked = true;
    userAnswer = $("#answer").val();
    userAnswer = userAnswer.toUpperCase();
    if ($("#reponse").is(":visible")) {
      count += 0;
      $("#number_points").text(count);
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice5").is(":visible") && $("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 1;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 2;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 3;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && ($("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
      count += 4;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else if ((userAnswer === data.answer || userAnswer == data.answer2 || userAnswer == data.answer3) && flagAnswer == 0) {
      count += 5;
      $("#answer").css({"background-color": "green"});
      $("#number_points").text(count);
      flagAnswer = 1;
    }
    else {
      count += 0;
      $("#number_points").text(count);
    }
  })
}
