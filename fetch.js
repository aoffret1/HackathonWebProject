const url = "trainings.json";

//global value of array of trainings
let trainingsArray = [];

const outputElement = document.getElementById('output');
let results = null;

//Obtains the information from the json file.
async function getJSON(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    console.log('here');
    const data = await response.json();

    //Loop and print each part of the array.
    trainingsArray = data.options;
    tableCreator(trainingsArray)
    
    

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


//Sorts by category
function sortBy(){
  reset();
  let sortOut = document.getElementById('sortBy').value;
  categoryList = []
  compare_value = ''
  //Which category will be filtered. It adds each matching training
  // objects to a seperate array that will be printed on the table.
  switch(sortOut){
    case "communication":
      compare_value = 'Communication';
      break;
    case "complianceTraining":
      compare_value = 'Compliance Training';
      break;
    case "customerServiceProgram":
      compare_value = 'Customer Service Program';
      break;
    case "discipleLeadershipProgram":
      compare_value = 'Disciple Leadership Program';
      break;
    case "leadershipTraining":
      compare_value = 'Leadership Training';
      break;
    case "personalDevelopment":
      compare_value = 'Personal Development';
      break;
    case "professionalTraining":
      compare_value = 'Professional Training';
      break;
    case "software":
      compare_value = 'Software';
        break;           
    case "spiritOfRicks":
      compare_value = 'Spirit of Ricks';
      break;
    case "workDay":
      compare_value = 'Workday Learning System';
      break;
    case "other":
      compare_value = 'Other';
      break;
    default:
      console.log("error");
  }

  //Adds to seperate list, and prints it out
  for(let i = 0; i < trainingsArray.length; i++){
    if (trainingsArray[i].category == compare_value){
      //Add to categoryList.
      categoryList.push(trainingsArray[i])
    }

  }
  tableCreator(categoryList);
}
//Resets the table
function reset() {
  const element = document.getElementById('sections');
  element.innerHTML = '';
}


getJSON(url);


//Listen to dropdown menu change
document.getElementById('sortBy').addEventListener('change', sortBy);