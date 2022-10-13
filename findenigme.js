export function findEnigma() {
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
  return (valuesIndice);
}
