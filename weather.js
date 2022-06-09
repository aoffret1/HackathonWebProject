async function getTemples(api){

    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=DYTAUHC2SFNFEANQ79FQ7385B&contentType=json");
  //check to see if the fetch was successful
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        console.log(data);
        fillInfo(data);
        //output(data);

        
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.        
    
    }
}

let api_id = "DYTAUHC2SFNFEANQ79FQ7385B";


getTemples(api_id);