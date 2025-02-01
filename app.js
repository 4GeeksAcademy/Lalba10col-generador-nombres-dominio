//Generando los arreglos
let mensajeFinal = "";
let listaDeDominios = [];
let pronombre = ["the", "our", "his"];
let adjetivos = ["great", "big", "amazing"];
let sustantivos = ["jogger", "racoon", "dog", "merchant", "driver"];
let ext = [".com", ".co", ".net", ".mx", ".gov"];
//Agrupando los arreglos
let listaDominios = [];
let mensaje = "";
//Generando random y concatenando
for (let i = 0; i < pronombre.length; i++) {
  for (let j = 0; j < adjetivos.length; j++) {
    for (let k = 0; k < sustantivos.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        mensaje = pronombre[i] + adjetivos[j] + sustantivos[k] + ext[l];
        listaDominios.push(mensaje);
      }
    }
  }
}
console.table(listaDominios);
