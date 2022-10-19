let count = 0; //count points
let flagAnswer = 0; //flag for answer already give or not
const delay = 7 * 1000;

$(document).ready(() => {
  // get one enigma in random
  $.get({
    url: '/tenEnigma.json',
    success: function(data) {
      displayList(data.listOfEnigma);
    }
  });
})

async function displayList(dataList) {
  for (let idx = 0; idx < dataList.length; idx++) {
    await displayElement(dataList[idx]);
    $('#answer').val('');//let empty span answer after one enigma
    $("#answer").css({"background-color": "white"});
    flagAnswer = 0;
  }
}

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
  //clear one element of tghe screen
  setTimeout(() => $(divSelector).empty(), delay);
}
const sleep = m => new Promise(r => setTimeout(r, m));

async function displayElement(dataItem) {
  //display elements of one enigma in the screen
  const delay = 5*1000; //delay of 5 seconds
  buzzerAnswer(dataItem);
  
  $('#category-value').text(dataItem.category); //display category

  $('#theme-value').text(dataItem.theme); // display theme

  $('#indice1').text(dataItem.clue1); //display clue 1
  $('#indice2').hide();
  $('#indice3').hide();
  $('#indice4').hide();
  $('#indice5').hide();
  $('#reponse').hide();
  $('#indice2').text(dataItem.clue2);
  $('#indice3').text(dataItem.clue3);
  $('#indice4').text(dataItem.clue4);
  $('#indice5').text(dataItem.clue5);
  $('#reponse').text(dataItem.answer);
  // sleep 5 secondes and display clue
  await sleep(delay)
  $('#indice2').show();
  await sleep(delay);
  $('#indice3').show();
  await sleep(delay);
  $('#indice4').show();
  await sleep(delay);
  $('#indice5').show();
  await sleep(delay);
  $('#reponse').show();
  await sleep(delay);
  clearAllElement();
}

  function buzzerAnswer(dataItem) {
    // user answers and click on the buzzer to record the answer and give the good numbers of points
    let buzzerclicked;
    let userAnswer;
    $("#answer").keypress(() => {
      //press enter
      if ( event.which == 13 ) {
        console.log("touche entrée");
        buzzerclicked = true;
        userAnswer = $("#answer").val();
        userAnswer = userAnswer.toUpperCase();
      if ($("#reponse").is(":visible")) {
        count += 0;
        $("#number_points").text(count);
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice5").is(":visible") && $("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 1;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 2;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 3;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 4;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && flagAnswer == 0) {
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
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice5").is(":visible") && $("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 1;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice4").is(":visible") && $("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 2;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice3").is(":visible") && $("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 3;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && ($("#indice2").is(":visible") && $("#indice1").is(":visible")) && flagAnswer == 0) {
        count += 4;
        $("#answer").css({"background-color": "green"});
        $("#number_points").text(count);
        flagAnswer = 1;
      }
      else if ((userAnswer === dataItem.answer || userAnswer == dataItem.answer2 || userAnswer == dataItem.answer3) && flagAnswer == 0) {
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
