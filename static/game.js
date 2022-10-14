$(document).ready(() => {
  // get one enigma in random
  $.get({
    url: '/enigma.json',
    success: function(data) {
      displayElement(data);
      clearAllElement();
    }
  })
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

  $('#category-value').text(data.category); //display category

  $('#theme-value').text(data.theme); // display theme

  $('#indice1').text(data.clue1); //display clue 1

  // sleep 5 secondes and display clue
  setTimeout(() => $('#indice2').text(data.clue2), delay);
  setTimeout(() => $('#indice3').text(data.clue3), delay*2);
  setTimeout(() => $('#indice4').text(data.clue4), delay*3);
  setTimeout(() => $('#indice5').text(data.clue5), delay*4);
  setTimeout(() => $('#reponse').text(data.answer), delay*5);
}
