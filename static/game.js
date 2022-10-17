$(document).ready(() => {
  // get one enigma in random
  const delay = 5*1000;
  setTimeout(() => 
    $.get({
    url: '/enigma.json',
    success: function(data) {
      setTimeout(() => displayElement(data), 100);
    }
  }), 500
  )
  for (let i = 1; i < 10; i++) {
  setTimeout(() => 
    $.get({
      url: '/enigma.json',
      success: function(data) {
        setTimeout(() => displayElement(data), 100);
      }
    }), delay*(7*i)
  )}
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
  //clear one element of tghe screen
  setTimeout(() => $(divSelector).empty(), delay);
}

function displayElement(data) {
  //display elements of one enigma in the screen
  const delay = 5*1000; //delay of 5 seconds
  /*$.map(data.listOfEnigma, function(res) {
    $('#category-value').text(res.category); //display category
    $('#theme-value').text(res.theme); // display theme
    $('#indice1').text(res.clue1); //display clue 1
    // sleep 5 secondes and display clue
    setTimeout(() => $('#indice2').text(res.clue2), delay);
    setTimeout(() => $('#indice3').text(res.clue3), delay*2);
    setTimeout(() => $('#indice4').text(res.clue4), delay*3);
    setTimeout(() => $('#indice5').text(res.clue5), delay*4);
    setTimeout(() => $('#reponse').text(res.answer), delay*5);
    clearAllElement();
    })*/
    /*$("#category-value").text(data.listOfEnigma[0].category)
    $(("#category-value")).queue(function() {
      $(this).text(data.listOfEnigma[1].category).dequeue();
    });
    $("#theme-value").text(data.listOfEnigma[0].theme)
    $(("#theme-value")).queue(function() {
      $(this).text(data.listOfEnigma[1].theme).dequeue();
    })
      /*$('#category-value').text(data.listOfEnigma[i].category); //display category
      $('#theme-value').text(data.listOfEnigma[i].theme); // display theme
      $('#indice1').text(data.listOfEnigma[i].clue1); //display clue 1
      // sleep 5 secondes and display clue
      setTimeout(() => $('#indice2').text(data.listOfEnigma[i].clue2), delay);
      setTimeout(() => $('#indice3').text(data.listOfEnigma[i].clue3), delay*2);
      setTimeout(() => $('#indice4').text(data.listOfEnigma[i].clue4), delay*3);
      setTimeout(() => $('#indice5').text(data.listOfEnigma[i].clue5), delay*4);
      setTimeout(() => $('#reponse').text(data.listOfEnigma[i].answer), delay*5);
    clearAllElement();
    */
    /*for(let i = 0; i < 10; i++) {
      $('#category-value').text(data.listOfEnigma[i].category); //display category
      $('#theme-value').text(data.listOfEnigma[i].theme); // display theme
      $('#indice1').text(data.listOfEnigma[i].clue1); //display clue 1
      // sleep 5 secondes and display clue
      setTimeout(() => $('#indice2').text(data.listOfEnigma[i].clue2), delay);
      setTimeout(() => $('#indice3').text(data.listOfEnigma[i].clue3), delay*2);
      setTimeout(() => $('#indice4').text(data.listOfEnigma[i].clue4), delay*3);
      setTimeout(() => $('#indice5').text(data.listOfEnigma[i].clue5), delay*4);
      setTimeout(() => $('#reponse').text(data.listOfEnigma[i].answer), delay*5);
      clearAllElement();
    }*/
  $('#category-value').text(data.category); //display category

  $('#theme-value').text(data.theme); // display theme

  $('#indice1').text(data.clue1); //display clue 1

  // sleep 5 secondes and display clue
  setTimeout(() => $('#indice2').text(data.clue2), delay);
  setTimeout(() => $('#indice3').text(data.clue3), delay*2);
  setTimeout(() => $('#indice4').text(data.clue4), delay*3);
  setTimeout(() => $('#indice5').text(data.clue5), delay*4);
  setTimeout(() => $('#reponse').text(data.answer), delay*5);
  clearAllElement()
}
