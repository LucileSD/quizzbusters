#!/usr/bin/env node
/*
  find one enigma in all json files
  return category, theme, 5 clues and answer
*/
/*import { setTimeout } from "timers/promises";*/

async function FindEnigma() {
  for (i = 0; i < 10 ; i++) {
    const fs = require('fs');
    const filesJson = fs.readdirSync('./models');
    const randomFile = filesJson[Math.floor(Math.random() * filesJson.length)];
    const dictOfEnigme = fs.readFileSync('models/' + randomFile, 'utf-8');
    const jsonObj = JSON.parse(dictOfEnigme);
    const categorie = Object.keys(jsonObj)[0];
    const indices = Object.values(jsonObj);
    const listInList = indices[Math.floor(Math.random() * indices.length)];
    const randomIndice = listInList[Math.floor(Math.random() * listInList.length)];
    valuesIndice = Object.values(randomIndice);
    valuesIndice.unshift(categorie);
    console.log(valuesIndice);
    /*let b = document.body;
    let categor = document.getElementById("cat");
    let parag = document.createElement('p');
    categor.textContent = valuesIndice[0];
    b.insertBefore(categor, parag);*/
    /*document.getElementById("cat").innerHTML = valuesIndice[0];
    document.getElementById("th").innerHTML = valuesIndice[1];
    document.getElementById("indice1").innerHTML = valuesIndice[2];
    await setTimeout(5000);
    document.getElementById("indice2").innerHTML = valuesIndice[3];
    await setTimeout(5000);
    document.getElementById("indice3").innerHTML = valuesIndice[4];
    await setTimeout(5000);
    document.getElementById("indice4").innerHTML = valuesIndice[5];
    await setTimeout(5000);
    document.getElementById("indice5").innerHTML = valuesIndice[6];
    await setTimeout(5000);
    document.getElementById("reponse").innerHTML = valuesIndice[7];
    await setTimeout(5000);
    valuesIndice.clear();*/
  }
}
FindEnigma();

