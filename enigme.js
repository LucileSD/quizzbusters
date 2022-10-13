import { findEnigma } from 'findenigme.js';
for (i = 0; i < 10 ; i++) {
  let indices = findEnigma();
  console.log(indices);
  let b = document.body;
  let categor = document.getElementById("cat");
  let parag = document.createElement('p');
  categor.textContent = indices[0];
  b.insertBefore(categor, parag);
  /*await setTimeout(5000);
  
  valuesIndice.clear();*/
}
