// let url = new URL("http://api.openweathermap.org/data/2.5/weather?q=term&appid=b3b3ac2e37696090ee68c129172d2a15&units=imperial");
let url = new URL("http://api.openweathermap.org/data/2.5/forecast?q=seattle&exclude=hourly&appid=b3b3ac2e37696090ee68c129172d2a15&units=imperial");
let api ="&appid=b3b3ac2e37696090ee68c129172d2a15";
let sUnits ="&units=imperial&";

//Search value 
function saveSearch(){
let searchVal = document.querySelector('#searchInput').value;
let search= url.search = "?q="+searchVal+api+sUnits;
$('#cityName').append(searchVal);
//city search is sent to local storage
localStorage.setItem('city',searchVal)
  console.log(searchVal);

  
let ch = localStorage.getItem('city');
let parent = document.createElement("div")
let p = document.createElement('p');
parent.append(ch,p);
// localStorage.getItem('city').append()
  // changes the city
// let cityName = fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// }) 
//   .then(function(data){
//     var cityMain = city.name;
//     document.getElementById('#cityName').append(cityMain);
//     console.log(cityMain)
// });
  
  
  // the city temp
let tempInfo = fetch(url)
  .then(function (response){
    return response.json()
  }) 

   .then(function(data){
   var temp = data.list[0].main.temp;
   document.querySelector(".temp").append(temp);
   console.log(temp)

//    var ic1 = "https://openweathermap.org/img/wn/"+data.list[2].weather[0].icon+".png";
// $('cityName').attr(src,ic1);
});

//the city humidity
let humInfo = fetch(url)
  .then(function (response){
    return response.json()
})

  .then(function(data){
    var humidity = data.list[0].main.humidity;
    document.querySelector(".hum").append(humidity);
    console.log(humidity)
 });

 //the city wind speed
let windInfo = fetch(url)
  .then(function (response){
    return response.json()
})
 .then(function(data){
  var wind = data.list[0].wind.speed;
  document.querySelector(".wind").append(wind);
  console.log(wind)
 });

//  .then(function(data){
//   var uvIndex = data.main.uvindex;
//   document.querySelector(".uv").append(uvIndex);
//   console.log(temp)
//  });
//  .then(function(data){
//   var temp = data.main.temp;
//   document.querySelector(".temp").append(temp);
//   console.log(temp)
//  })

//start of the 5-day forecast 

//day 1/5
fetch(url)
  .then(function (response){
    return response.json()
})
 .then(function(data){
  var dt1 = data.list[2].dt_txt;
  document.querySelector("#fwf-date1").append(dt1);

  var ic1 = "https://openweathermap.org/img/wn/"+data.list[2].weather[0].icon+".png";
  $('#fwf-icon1').attr('src',ic1);
  console.log(ic1);


  var tmp1 = data.list[2].main.temp;
  document.querySelector("#fwf-temp1").append(tmp1);

  var hm1 = data.list[2].main.humidity;
  document.querySelector("#fwf-hum1").append(hm1);
 });

//day 2/5

fetch(url)
  .then(function (response){
    return response.json()
})
 .then(function(data){
  var dt2 = data.list[11].dt_txt;
  document.querySelector("#fwf-date2").append(dt2);

  // var ic2 = data.list[11].wind.speed;
  // document.querySelector(".wind").append(wind);

  var tmp2 = data.list[11].main.temp;
  document.querySelector("#fwf-temp2").append(tmp2);

  var hm2 = data.list[11].main.humidity;
  document.querySelector("#fwf-hum2").append(hm2);
 });

//day 3/5
 fetch(url)
  .then(function (response){
    console.log(response);
    return response.json()
})
 .then(function(data){
  var dt3 = data.list[22].dt_txt;
  document.querySelector("#fwf-date3").append(dt3);

  // var ic3 = data.list[22].wind.speed;
  // document.querySelector(".wind3").append(wind);

  var tmp3 = data.list[22].main.temp;
  document.querySelector("#fwf-temp3").append(tmp3);

  var hm3 = data.list[22].main.humidity;
  document.querySelector("#fwf-hum3").append(hm3);
 });

 //day 4/5

 fetch(url)
  .then(function (response){
    return response.json()
})
 .then(function(data){
  var dt4 = data.list[32].dt_txt;
  document.querySelector("#fwf-date4").append(dt4);

  // var ic1 = data.list[32].wind.speed;
  // document.querySelector(".wind4").append(wind);

  var tmp4 = data.list[32].main.temp;
  document.querySelector("#fwf-temp4").append(tmp4);

  var hm4 = data.list[32].main.humidity;
  document.querySelector("#fwf-hum4").append(hm4);
 });

//day 5/5

fetch(url)
  .then(function (response){
    return response.json()
})
 .then(function(data){
  var dt5 = data.list[36].dt_txt;
  document.querySelector("#fwf-date5").append(dt5);

  // var ic1 = data.list[36].wind.speed;
  // document.querySelector(".wind").append(wind);

  var tmp5 = data.list[36].main.temp;
  document.querySelector("#fwf-temp5").append(tmp5);

  var hm5 = data.list[36].main.humidity;
  document.querySelector("#fwf-hum5").append(hm5);
 });
 //end of function
};




//   let fdfTemp = fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
// };
//  .then(function(data){
//   var temp1 = list;
//   document.querySelector("fwf-date1").append(temp1);
//   console.log(temp1)
//  });
// };
//  .then(function(data){

// let url2= "http://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=b3b3ac2e37696090ee68c129172d2a15&units=imperial";
// fetch(url2)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
//  .then(function(data){
//   // var date1 = data.wind.speed;
//   //   document.querySelector(".5date1").append(wind);
//   // var icon1 = data.wind.speed;
//   //   document.querySelector(".5icon1").append(wind);
//   var temp1 = data.main.temp;
//     document.getElementById("#5temp1").append(temp1);
//   var humidity1 = data.main.humidity;
//     document.getElementById("#5hum1").append(humidity1);
//  });


//  fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
//  .then(function(data){
//   var wind = data.wind.speed;
//   document.querySelector(".wind").append(wind);
//   console.log(wind)
//  });


//  fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
//  .then(function(data){
//   var wind = data.wind.speed;
//   document.querySelector(".wind").append(wind);
//   console.log(wind)
//  });

//  fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
//  .then(function(data){
//   var wind = data.wind.speed;
//   document.querySelector(".wind").append(wind);
//   console.log(wind)
//  });

//  fetch(url)
//   .then(function (response){
//     console.log(response);
//     return response.json()
// })
//  .then(function(data){
//   var wind = data.wind.speed;
//   document.querySelector(".wind").append(wind);
//   console.log(wind)
//  });

