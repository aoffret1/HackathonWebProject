const url = "trainings.json";
const outputElement = document.getElementById('output');
let results = null;
async function getJSON(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    console.log('here');
    const data = await response.json();

    //Loop and print each part of the array.
    tableCreator(data.options)

    /*for(let i = 0; i < data.options.length; i++){
      console.log(data.options[i].name)
      doStuff(data.options[i])
    }*/

  }
}






//Creates each row for table
function sectionTemplate(section){
  return `<tr><td> <a href="${section.link}">${section.name}</a> 
  </td><td>${section.category}</td></tr>`
}

//Makes table
function tableCreator(sections){
  const element = document.getElementById('sections');
  const htmlStrings = sections.map(sectionTemplate);
  const htmlString = htmlStrings.join('');
  //console.log(htmlString);
  element.innerHTML = htmlString;
}

//Appends elements
let article = document.createElement('article');
async function output(section) {
      document.body.appendChild(sections);
      let nameElement = document.createElement('tr');
      nameElement.textContent = temple.templeName;

      article.appendChild(nameElement);
}

//Sorts by category
function sortBy(){
  reset();
  let sortOut = document.getElementById('sortBy').value;
  switch(sortOut){
      case "Professional Training":

        for(let i = 0; i < data.options.length; i++){
          if (data.options[i].category == "Professional Training"){
            //Add to output
            output()
            
          }
      
        }
      
      case "templeNameDescending":
          console.log("here2");
          templeList.sort((a, b) => {
              let temple1 = a.templeName;
              let temple2 = b.templeName;
              if (temple1 < temple2){
                  return -1;
              } else if (temple1 > temple2){
                  return 1;
              } else if (temple1 = temple2){
                  return 0;
              }
          });
          console.log(templeList);
          output(templeList);
          break;
      default:
          console.log("here2");
  }
}


getJSON(url);
