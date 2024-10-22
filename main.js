/*
TO DO:
- how to run a JS function on load?
- continue getOutput, following pick_op
- apply timer (to dice and more)
- more 'on click' stuff (so make some text dis / re appear)
- bigger button and table?
- center things and add basic css

Bigger TO DO:
- some images?
- favicon?
*/

// alert("Success!!!")

// creating grid numbers
const diceOptions = [1, 2, 3, 4];
let sums = [];
let diffs = [];
let prods = [];
let quots = [];

for (let i=1; i<5; i++){
  for (let j=1; j<5; j++){
    sums.push(i+j);
    diffs.push(Math.abs(i-j));
    prods.push(i*j);
    if (Math.max(i, j)/ Math.min(i, j)%1===0){
      quots.push(Math.max(i, j)/ Math.min(i, j));
    }   
  }
}

const nums = Array.from(new Set(sums.concat(diffs, prods, quots)));


// backend functions

const gridKeys = ["b00", "b01", "b02", "b10", "b11", "b12", "b20", "b21", "b22"]; 

function makeGrid(gridKeys, nums){
  let gridVals = _.sampleSize(nums, 9);
  let grid = {};
  for (let i = 0; i < gridKeys.length; i++){
    grid[gridKeys[i]]=gridVals[i];
  }
  return grid;
}

const grid = makeGrid(gridKeys, nums);
const gridVals = Object.values(grid);
let gridValsLeft = gridVals.slice(0);



// for game

// elements


// grid related

// let gridMessageStart = "your starting grid:"
// let gridMessageNow = "your grid now:"

// document.getElementById("grid-message").textContent = gridMessageStart;

// function loadNewGrid(){
//   let grid = makeGrid(gridKeys, nums);
//   const gridVals = Object.values(grid)
//   let gridValsLeft = gridVals.slice(0);

//   for (let i=0; i<gridKeys.length; i++){
//   document.getElementById(gridKeys[i]).textContent = grid[gridKeys[i]];
//   }
// }

const gridMessage = document.getElementById("grid-message");

function test(){
  gridMessage.textContent = "your starting grid:";
  

  for (let i=0; i<gridKeys.length; i++){
  document.getElementById(gridKeys[i]).textContent = grid[gridKeys[i]];
  }
}




// testing space
// console.log(grid)
// console.log(gridValsLeft)

