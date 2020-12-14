var numbers = [3,5,200,576,9,0,34];

function compare(num1, num2){
  return num1 - num2;
}

var one = numbers.sort(compare)
console.log(one);
