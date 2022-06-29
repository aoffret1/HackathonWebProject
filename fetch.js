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
// let article = document.createElement('article');
// async function output(section) {
//       document.body.appendChild(sections);
//       let nameElement = document.createElement('tr');
//       nameElement.textContent = temple.templeName;

//       article.appendChild(nameElement);
// }

//Sorts by category
function sortBy(){
  reset();
  let sortOut = document.getElementById('sortBy').value;
  switch(sortOut){
    case "communication":
          console.log('communication');
    case "complianceTraining":
          console.log('complianceTraining');
    case "customerServiceProgram":
          console.log('Customer Service Program');
    case "discipleLeadershipProgram":
          console.log('discipleLeadershipProgram');
    case "leadershipTraining":
          console.log('leadershipTraining');
    case "personalDevelopment":
          console.log('personalDevelopment');
    case "professionalTraining":

        count = 0
        for(let i = 0; i < data.options.length; i++){
          if (data.options[i].category == "Professional Training"){
            //Add to output
            count += 1
            
            
          }
      
        }
        console.log(count)
    case "professionalTraining":
          console.log('professionalTraining');
    case "software":
          console.log('software');                  
    case "spiritOfRicks":
          console.log('spiritOfRicks')
    case "workDay":
          console.log('workDay');
    case "other":
          console.log('other');
    default:
          console.log("error");
  }
}
//Resets the table
function reset() {
  const element = document.getElementById('sections');
  element.innerHTML = '';
}

// Search training bar

function searchFunction(){
  //Declare variables to search table:
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");  
}

// // Loop through trainings:
// for (i = 0; i < tr.length; i++) {
//   td = tr[i].getElementsByTagName("td")[0];
//   if (td) {
//     txtValue = td.textContent || td.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       tr[i].style.display = "";
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }

getJSON(url);


//Listen to dropdown menu change
document.getElementById('sortBy').addEventListener('change', sortBy);