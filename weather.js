async function getInfo(api){

    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=DYTAUHC2SFNFEANQ79FQ7385B&contentType=json");
  //check to see if the fetch was successful
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        fillInfo(data);
        console.log(data);
        
        //output(data);
    
    }
}

function fillInfo(data) {
  console.log(data.address);
  let cityName = document.getElementById('city_name');
  cityName.innerHTML = `<h2>${data.address}<h2>`;

  let tempature = document.getElementById('tempature');
  tempature.innerHTML = `<h2>${data.currentConditions.temp}<h2>`;

  let weatherCondition = document.getElementById('weather_condition');
  weatherCondition.innerHTML = `<h2>${data.currentConditions.conditions}<h2>`;

  let wind = document.getElementById('wind_speed');
  wind.innerHTML = `<h2>${data.currentConditions.windspeed}<h2>`;

}

let api_id = "DYTAUHC2SFNFEANQ79FQ7385B";


getInfo(api_id);