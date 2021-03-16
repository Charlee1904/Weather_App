let url = new URL("http://api.openweathermap.org/data/2.5/forecast?q=seattle&exclude=hourly&appid=b3b3ac2e37696090ee68c129172d2a15&units=imperial");
let api ="&appid=b3b3ac2e37696090ee68c129172d2a15";
let sUnits ="&units=imperial&";

function saveSearch(){
    let searchVal = document.querySelector('#searchInput').value; 
    let search= url.search = "?q="+searchVal+api+sUnits;
  $('#cityName').append(searchVal);
    console.log(searchVal);


fetch(url)
  .then(function (response){
    return response.json()
  }) 

   .then(function(data){
        var temp = data.list[0].main.temp
        document.querySelector(".temp").append(temp);
        console.log(temp)
    })

    .then(function(data){
        var hum = data.list[0].main.humidity;
        document.querySelector(".hum").append(hum);
        console.log(temp)


    .then(function(data){
        var temp = data.list[0].wind.;
        document.querySelector(".wind").append(temp);
        console.log(temp)



     .then(function(data){
        var temp = data.list[0].main.temp;
        document.querySelector(".uv").append(temp);
        console.log(temp)


};

