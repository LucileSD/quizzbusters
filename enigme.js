#!/usr/bin/env node


function FindEnigma() {
  const fs = require('fs');
  const filesJson = fs.readdirSync('./models');
  const randomFile = filesJson[Math.floor(Math.random()*filesJson.length)];
  let dictOfEnigme = fs.readFileSync("models/" + randomFile, 'utf-8');
  const jsonObj = JSON.parse(dictOfEnigme);
  const categorie = Object.keys(jsonObj)[0];
  console.log("categorie " + categorie);
  const indices = Object.values(jsonObj);
  const listInList = indices[Math.floor(Math.random()*indices.length)];
  const randomIndice = listInList[Math.floor(Math.random()*listInList.length)];
  console.log(randomIndice);
}
FindEnigma();
