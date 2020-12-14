/*
let word = "#";
for (let i = 0; i <= 6; i++){
  console.log(word);
  word += "##"
}

*/

/*
let number = 0;
while (number <= 10){
	console.log(number);
	number = number + 1;
}

*/

/*
let a = "#";
let b = a += "#";
console.log(b);
*/

//combine two list

/*
function twoArraysCombined(one, two){
    console.log(one.concat(two));
}
twoArraysCombined([11,22,33],[1,2,3]);
*/

//accessing the index of an array
//let one = colours[0];

//accessing the last element of an array
//let two = colours[colours.length -1];

/*
colours.forEach(function(item, index, array) {
  console.log(item, index);
})
*/



//

  // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // for(let i = 0; i < daysOfWeek.length; i++){
  //   console.log(daysOfWeek[i]);
  // }


// function myfun(str){
// let longest = "";
// let answer = str.split(" ")

// for (let i = 0; i < answer.length; i++){
//   let individual = answer[i]
//   if (individual.length > longest.length){
//     longest = individual
//     }
//   }

//   return longest
// }

// console.log(myfun("loving this more and more"));

// function myFunc(str){
//   let longest = "thousand";
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++){
//     let singleword = words[i]
//     if (singleword.length > longest.length){
//       longest = singleword
//     }
//   }

//   return longest
// }

// console.log(myFunc('the amazilet


function calculateFahrenheit(celsius){
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit
}

console.log(calculateFahrenheit(30));