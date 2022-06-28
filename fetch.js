const url = "trainings.json";
const outputElement = document.getElementById('output');
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    console.log('here');
    const data = await response.json();

    //Loop and print each part of the array.
    for(let i = 0; i < data.options.length; i++){
      console.log(data.options[i].name)
      doStuff(data.options[i])
    }

  }
}

//
function doStuff(data) {
    const html = `<h2>${data.name}</h2>`;
    //Use backticks for above item to put in object info
    outputElement.innerHTML = html;
}
getPokemon(url);
