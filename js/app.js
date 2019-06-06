'use strict';

// Go Easy write simple code , Do not overthinking to solve it.

//global variables
var cataLogArr =[];
var lastDisplayed =[];
var totalVotes = 0;

//// render 3 images to the DOM
var picSection = document.getElementById('picSection');
var leftProduct = document.getElementById('left');
var centerProduct = document.getElementById('center');
var rightProduct = document.getElementById('right');
// results
var resultsEl = document.getElementById('results');

// Constructor and Instances

function Product (imageName, filePath) {
  this.imageName = imageName;
  this.filePath = filePath;
  this.tallyClicked = 0;
  this.tallyDisplayed = 0;
  //Push the object to Array
  cataLogArr.push(this);
}


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
new Product ('Baby Sweeper', 'img/sweep.jpg');
new Product ('Tauntaun Sleeper', 'img/tauntaun.jpg');
new Product ('Unicorn Meat', 'img/unicorn.jpg');
new Product ('Tentacle USB', 'img/usb.jpg');
new Product ('Watering Can', 'img/water-can.jpg');
new Product ('Wine Glass', 'img/wine-glass.jpg');
new Product ('Willenium Album', 'img/willenium.jpg');





var randIndex1;
var randIndex2;
var randIndex3;



function randGenerator() {
  randIndex1 = Math.floor(Math.random() * cataLogArr.length-1);
  randIndex2 = Math.floor(Math.random() * cataLogArr.length-1);
  randIndex3 = Math.floor(Math.random() * cataLogArr.length-1);
};




function renderBestProduct(){
  // create an element
  // add content
  // append to the parent

  var bestProduct;
  var temp = 0;

  for(var i = 0; i < cataLogArr.length; i++){
    if(cataLogArr[i].tallyClicked > temp){
      temp = cataLogArr[i].tallyClicked;
      bestProduct = cataLogArr[i];
    }
  }


  var h2El = document.createElement('h2');
  h2El.textContent = `The Best Product is ${bestProduct.imageName} with ${bestProduct.tallyClicked} votes.`;
  resultsEl.appendChild(h2El);
}

//Function to Load Images to Page
function loadImages() {
  if (totalVotes > 24) {
    renderBestProduct();
  }

  lastDisplayed = [];

  lastDisplayed.push(randIndex1);
  lastDisplayed.push(randIndex2);
  lastDisplayed.push(randIndex3);

  //Re-assigning the variables for each picture
  randGenerator();

  //While loop to prevent double choices AND no prior choice repeats
  // this sh**t difficult things ever driving me crazyy 2hr. !!!
  // I would better name new var called Var BigStupidNumber2 !!
  while (randIndex1 === lastDisplayed[0] || randIndex1 === lastDisplayed[1] || randIndex1 === lastDisplayed[2] || randIndex2 === lastDisplayed[0] || randIndex2 === lastDisplayed[1] || randIndex2 === lastDisplayed[2] || randIndex3 === lastDisplayed[0] || randIndex3 === lastDisplayed[1] || randIndex3 === lastDisplayed[2] || randIndex1 === randIndex2 || randIndex1 === randIndex3 || randIndex2 === randIndex3) {
    randGenerator();
  }
  //Makes leftImg's src property equal to the fileName of the indexed item
  leftProduct.src = cataLogArr[randIndex1].filePath;
  centerProduct.src = cataLogArr[randIndex2].filePath;
  rightProduct.src = cataLogArr[randIndex3].filePath;

  //Adds 1 to the display tally property of the indexed object
  cataLogArr[randIndex1].tallyDisplayed ++;
  cataLogArr[randIndex2].tallyDisplayed ++;
  cataLogArr[randIndex3].tallyDisplayed ++;

}

//Event Handler for click on picture
function handleUserClick(event) {
  event.preventDefault();

  if (event.target.id === 'left') {
    cataLogArr[randIndex1].tallyClicked ++;
  }

  else if (event.target.id === 'center') {
    cataLogArr[randIndex2].tallyClicked ++;
  }

  else if (event.target.id === 'right') {
    cataLogArr[randIndex3].tallyClicked ++;
  }
  else {
    alert('Pick a product!');
    return;
  }
  console.log('I clicked' + event.target.id);

  totalVotes += 1;

  loadImages();
}

randGenerator();
loadImages();

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// ++++++++++++++++++++++++++++++++++++++++++++

//Listener for click-on-pic
picSection.addEventListener('click', handleUserClick);

