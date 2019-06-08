'use strict';

// Go Easy write simple code , Do not overthinking to solve it.

//global variables
Product.cataLogArr =[];
var lastDisplayed =[];
var totalVotes = 0;
// hold data for chart data
var imageNameArray = [];
var ClickFinal = [];
var ViewFinal = [];

//View Results Button
// var viewResultsButton = document.createElement('button');




//// render 3 images to the DOM
var picSection = document.getElementById('picSection');
var leftProduct = document.getElementById('left');
var centerProduct = document.getElementById('center');
var rightProduct = document.getElementById('right');
// results
// var resultsEl = document.getElementById('results');
// var resultList = document.getElementById('results2s');

var canvas = document.getElementById('userdata');

// Constructor

function Product (imgName,filepath) {
  this.imageName = imgName;
  this.filePath = filepath;
  this.votes = 0;
  this.views = 0;
  //Push the object to Array
  Product.cataLogArr.push(this);
  imageNameArray.push(this.imageName);
}

for (var i = 0; i < Product.cataLogArr.length; i++) {
  imageNameArray.push(Product.cataLogArr[i].name);
}


// Instances
new Product ('R2D2 Bag', 'img/bag.jpg');
new Product ('Banana Slicer', 'img/banana.jpg');
new Product ('iPad TP Stand', 'img/bathroom.jpg');
new Product ('Open-toed Boots', 'img/boots.jpg');
new Product ('All-in-One Breaky', 'img/breakfast.jpg');
new Product ('Meatball Gum', 'img/bubblegum.jpg');
new Product ('Chair', 'img/chair.jpg');
new Product ('Cthulhu', 'img/cthulhu.jpg');
new Product ('Dog Duck Bill', 'img/dog-duck.jpg');
new Product ('Dragon Meat', 'img/dragon.jpg');
new Product ('Utensil Pen', 'img/pen.jpg');
new Product ('Pet Sweeper', 'img/pet-sweep.jpg');
new Product ('Pizza Scissors', 'img/scissors.jpg');
new Product ('Shark Sleeper', 'img/shark.jpg');
new Product ('Baby Sweeper', 'img/sweep.png');
new Product ('Tauntaun Sleeper', 'img/tauntaun.jpg');
new Product ('Unicorn Meat', 'img/unicorn.jpg');
new Product ('Tentacle USB', 'img/usb.gif');
new Product ('Watering Can', 'img/water-can.jpg');
new Product ('Wine Glass', 'img/wine-glass.jpg');






// ++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
// ++++++++++++++++++++++++++++++++++++++++++++
var randIndex1;
var randIndex2;
var randIndex3;

function randGenerator() {
  randIndex1 = Math.floor(Math.random() * (Product.cataLogArr.length-1) );
  randIndex2 = Math.floor(Math.random() * (Product.cataLogArr.length-1) );
  randIndex3 = Math.floor(Math.random() * (Product.cataLogArr.length-1));
}



//Function to Load Images to Page
function loadImages() {
  if (totalVotes > 24) {
    surveyEnd();
  }

  lastDisplayed = [];


  lastDisplayed.push(randIndex1);
  lastDisplayed.push(randIndex2);
  lastDisplayed.push(randIndex3);


  //Re-assigning the variables for each picture
  randGenerator();
 

  //While loop to prevent double choices AND no prior choice repeats
  // this sh**t difficult things ever driving me crazyy 2hr. !!!
  // I would better name  called Var BigStupidcrazyNumber2 !!

  // Ahren credit solution .include , splice ('')
  // For{ var i= 0}
  //   while
  //   while 
 
  while (randIndex1 === lastDisplayed[0] || randIndex1 === lastDisplayed[1] || randIndex1 === lastDisplayed[2] || randIndex2 === lastDisplayed[0] || randIndex2 === lastDisplayed[1] || randIndex2 === lastDisplayed[2] || randIndex3 === lastDisplayed[0] || randIndex3 === lastDisplayed[1] || randIndex3 === lastDisplayed[2] || randIndex1 === randIndex2 || randIndex1 === randIndex3 || randIndex2 === randIndex3) {
    randGenerator();
  }


  console.log('/////////////////////////////////////////');
  console.log('Product.cataLogArr:', Product.cataLogArr);
  console.log('randIndex2', randIndex2);
  console.log('randIndex1', randIndex1);
  console.log('randIndex3', randIndex3);


  //Makes leftImg's src property equal to the fileName of the indexed item
  leftProduct.src = Product.cataLogArr[randIndex2].filePath;
  centerProduct.src = Product.cataLogArr[randIndex1].filePath;
  rightProduct.src = Product.cataLogArr[randIndex3].filePath;

  //Adds 1 to the display tally property of the indexed object
  Product.cataLogArr[randIndex1].views++;
  Product.cataLogArr[randIndex2].views++;
  Product.cataLogArr[randIndex3].views++;

}

//Event Handler for click on picture
function handleUserClick(event) {

  if (event.target.id === 'left') {
    Product.cataLogArr[randIndex1].votes++;
  }

  else if (event.target.id === 'center') {
    Product.cataLogArr[randIndex2].votes++;
  }

  else if (event.target.id === 'right') {
    Product.cataLogArr[randIndex3].votes++;
  }
  else {
    alert('Pick a product!');
    totalVotes--;
  }
  console.log('I clicked' + event.target.id);

  totalVotes++;

  loadImages();
}

//Function to end survey at 25 clicks
function surveyEnd() {
  // viewResultsButton.textContent = 'View Results';
  // picSection.appendChild(viewResultsButton);
  picSection.removeEventListener('click', handleUserClick);
  for (var i = 0; i < Product.cataLogArr.length; i++) {
    ClickFinal.push(Product.cataLogArr[i].votes);
    ViewFinal.push(Product.cataLogArr[i].views);
  }
}

// CHART STUFF
//Function to Draw Chart
function drawChart() {
  var ctx = canvas.getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

var data = {
  //Labels = imageName from each image object
  labels: imageNameArray,
  datasets: [
    {
      label: 'Times Clicked',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)',
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1,
      data: ClickFinal,
    },
    {
      label: 'Times Displayed',
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
      data: ViewFinal,
    },
  ]
};


// function renderBestProduct(){
//   // create an element
//   // add content
//   // append to the parent

//   var bestProduct;
//   var temp = 0;

//   for(var i = 0; i < Product.cataLogArr.length; i++){
//     if(Product.cataLogArr[i].votes > temp){
//       temp = Product.cataLogArr[i].votes;
//       bestProduct = Product.cataLogArr[i];
//     }
//   }


//   //   var h2El = document.createElement('h2');
//   //   h2El.textContent = `The Best Product is ${bestProduct.imageName} with ${bestProduct.votes} votes.`;
//   //   resultsEl.appendChild(h2El);


//   //   var liEl = document.createElement('li');
//   //   liEl.textContent = `Images 1 ${Product.cataLogArr[0].imageName} : ${Product.cataLogArr[0].votes} votes.`;
//   //   resultList.appendChild(liEl);

//   //   liEl = document.createElement('li');
//   //   liEl.textContent = `Images 2 ${Product.cataLogArr[1].imageName} : ${Product.cataLogArr[1].votes} votes.`;
//   //   resultList.appendChild(liEl);


//   //   liEl = document.createElement('li');
//   //   liEl.textContent = `Images 3 ${Product.cataLogArr[2].imageName}: ${Product.cataLogArr[2].votes} votes.`;
//   //   resultList.appendChild(liEl);


//   //   liEl = document.createElement('li');
//   //   liEl.textContent = `Images 4 ${Product.cataLogArr[3].imageName}: ${Product.cataLogArr[3].votes} votes.`;
//   //   resultList.appendChild(liEl);

//   //   liEl = document.createElement('li');
//   //   liEl.textContent = `Images 5 ${Product.cataLogArr[4].imageName}: ${Product.cataLogArr[4].votes} votes.`;
//   //   resultList.appendChild(liEl);

//   picSection.removeEventListener('click', handleUserClick);
// }

randGenerator();
loadImages();
drawChart();


// EVENT LISTENERS
//Listener for click-on-pic
picSection.addEventListener('click', handleUserClick);
canvas.addEventListener('click', drawChart);



// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

