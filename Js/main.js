
// var results = [] ;

// async function fakeData (){
//     var apiResponse = await fetch (`https://jsonplaceholder.typicode.com/posts` , {
//         method : 'GET'
//     } ) ;
//     var finalResulte = await apiResponse.json();
//     results = finalResulte ; 
//     displayData() ; 
//     console.log(results);
// }

// fakeData() ; 

// function displayData () {
//     var box = ` ` ; 
//     for (var i =0 ; i<results.length ; i++){
//         box += `<div class="col-md-3">
//         <div class="item">
//             <p>${results[i].id}</p>
//             <p>${results[i].title}</p>
//             <p>${results[i].body}</p>
//         </div>
//     </div>`

//     }
//     document.getElementById('rowData').innerHTML = box ; 
// }





// var results = [] ;
// var countryName ="eg"; 
// async function fakeData (countryName){
//     var apiResponse = await fetch (`https://newsapi.org/v2/top-headlines?country=${countryName}&category=sports&apiKey=865cd63c9e8944faae84aedbadd0d6a6` , {
//         method : 'GET'
//     } ) ;
//     var finalResulte = await apiResponse.json();
//     results = finalResulte.articles ; 
//     displayData() ; 
//     console.log(results);
// }

// fakeData() ; 

// function displayData () {
//     var box = ` ` ; 
//     for (var i =0 ; i<results.length ; i++){
//         box += `<div class="col-md-3">
//         <div class="item">
//             <img src=${results[i].urlToImage} width='200' height='300' >
//             <p>${results[i].title}</p>
//             <p>${results[i].description}</p>
//         </div>
//     </div>`

//     }
//     document.getElementById('rowData').innerHTML = box ; 
// }






























let mybtn = document.getElementsByClassName("mybtn")[0];
let menu = document.getElementsByClassName("menu")[0];
let but_close = document.getElementsByClassName("clo")[0];

mybtn.onclick = function() {
  menu.style.right = "0px";
};

but_close.onclick = function() {
  menu.style.right = "-300px";
};



let egybtn = document.getElementById("eg");
let usbtn = document.getElementById("usa");
let frbtn = document.getElementById("fr");
let grbtn = document.getElementById("gr");

egybtn.onclick = function() {
  countryName = "eg";
  getNews(countryName);
};

usbtn.onclick = function() {
  countryName = "us";
  getNews(countryName);
};

frbtn.onclick = function() {
  countryName = "fr";
  getNews(countryName);
};

grbtn.onclick = function() {
  countryName = "gr";
  getNews(countryName);
};
var countryName = "us";
var finalResulte = [];

async function getNews(countryName) {
  var apiresponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryName}&category=sports&apiKey=865cd63c9e8944faae84aedbadd0d6a6`);
  var Resulte = await apiresponse.json();
  finalResulte = Resulte.articles;
  console.log(finalResulte);
  displayPosts();
}

getNews(countryName);

function displayPosts() {
  var cartoona = ``;
  for (var i = 0; i < finalResulte.length; i++) {
    cartoona += `
      <div class="col-lg-4 col-md-6 d-flex justify-content-center align-content-center align-items-center flex-column text-center text-white">
        <div class="item d-flex justify-content-center align-content-center align-items-center flex-column text-center text-white">
          <img src=${finalResulte[i].urlToImage} width='100%' height='300'>
          <h5>${finalResulte[i].title}</h5>
          <a class="boot" href=${finalResulte[i].url}>Source</a>
        </div>
      </div>
    `;
  }
  document.getElementById('rowData').innerHTML = cartoona;
}
