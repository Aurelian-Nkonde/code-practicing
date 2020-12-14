//HOF => High-Order functions

//map, forEach, filter, reduce, sort

//higher order functions
//a function that accepts and or returns another function is called  high order function
/*
its higher-order => instead of strings, numbers and boleans it goes higher to operate on functions

with functions in Js you can
	store them as variables
	use them in arrays
	assign them as object properties(methods)
	pass them as arguments
	return them from other functions
*/

/*
First class citizens in every mainstreem languege
	strings, numbers, booleans, objects, arrays
*/

/*
Four ways a function can be data
	pass them to ther functions
	set them as object properties
	store them in array
	set them as variables
*/

/*
	HOF ?
	 return other functions as results or take them as arguments
	taking other functions as arguments => callback function
*/

/*
the map() ==> creates a new array by calling a callback function provided as an argument on every element in the input array
the map() ==> will take every retunred value from the callback function and creates new arry using those
callback function passed to the map accept three arguments
element, index,array
*/


/*
filter
the filter() => creates a new array with all elements that pass the test provided by the callback function
it accept three argument element, index, array
*/


/*
REDUCE
The reduce method executes the callback function on each member of the calling array which results in a single output value.
The reduce method accepts two parameters: 1) The reducer function (callback), 2) and an optional initialValue.

The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);
*/







// const arrays = [3,4,5];
// const array = arrays.map((item) => item * 2)
//
// console.log(array);


// const devs = [
// 	{
// 		name: 'Joe',
// 		age: 24
// 	},
// 		{
// 		name: 'Alan',
// 		age: 25
// 	},
// 		{
// 		name: 'Marie',
// 		age: 29
// 	}
// ]

// const devsAges = (user) => user.age
// let ages = [];

// ages = devs.map(devsAges);
// console.log(ages)


// for (let i = 0; i < devs.length; i++){
// 	const age = devsAges(devs[i])

// 	ages.push(age)
// }

// console.log(ages)


//FILTER

// const startWithM = (string) => string.toUpperCase().startsWith('M')
// let namesSttartWithM = []

// for (let i = 0; i < devs.length; i++){
// 	if(startWithM(devs[i].name)) {
// 		namesSttartWithM.push(devs[i].name);
// 	}
// }

// console.log(namesSttartWithM)

// namesSttartWithM = devs.filter((M) => startWithM(M.name))
// console.log(namesSttartWithM)


// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];
//
// const pilotsAges = pilots.reduce((accumulator, pilot) => {
// 	return accumulator + pilot.years
// }, 0)
//
// console.log(pilotsAges);

//REDUCE

// const totalAge = devs.reduce((total, user) =>  user.age + total, 0)
// console.log(totalAge);
