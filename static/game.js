$(document).ready(() => {
  // get one enigma in random
  $.get({
    url: '/enigma.json',
    success: function(data) {
        //const data = {"category": "entreprise", "theme": "logo", "clue1": "hello", "clue2": "is it ok?", "clue3": "ok i'm waiting"};
        console.log(data);

        //display category
        $('#category-value').text(data.category);

        // display theme
        $('#theme-value').text(data.theme);

        //display clue 1
        $('#indice1').text(data.clue1);

        // sleep 5 secondes and display clue 2
        setTimeout(() => $('#indice2').text(data.clue2), 5*1000);

        // sleep 5 secondes and display clue 3
        setTimeout(() => $('#indice3').text(data.clue3), 10*1000);

        // sleep 5 secondes
        //display clue 4
        // sleep 5 secondes
        //display clue 5
        // sleep 5 secondes
        //display answer
        // sleep 5 secondes
        // clear screen
        clearAllElement();
    }
  })
});

function clearAllElement() {
  clearElement('#category-value');
  clearElement('#theme-value');
  clearElement('#indice1');
  clearElement('#indice2');
  clearElement('#indice3');
}

function clearElement(divSelector, delay=15*1000) {
  setTimeout(() => $(divSelector).empty(), delay);
}
