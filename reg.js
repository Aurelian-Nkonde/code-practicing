


// function add(numb){
//   let number = numb.split(',').join('');
//   let regex = number.match(/\d{1,2}/);
//   let string;

//   if (!regex){
//      string = 0;
//   } else {
//      string = regex.toString();
//   }

//   let answer = 0;
//   let i = 0;

//   while(i < string.length){
//     answer += Number(string[i]);
//     i++;
//   }

//   console.log(answer);

// }

// add("4,2");


// function add(numb){
//   let number = numb.split(',').join('');
//   let regex = number.match(/\d+/);
//   let string;
//
//   if (!regex){
//      string = 0;
//   } else {
//      string = regex.toString();
//   }
//
//   let answer = 0;
//   let i = 0;
//
//   while(i < string.length){
//     answer += Number(string[i]);
//     i++;
//   }
//
//   console.log(answer);
//
// }
//
// add("1,2,3,4");



// function add(str){
//   let regex = /(?<=.)\d+/sg;
//   let answer = str.match(regex);
//   console.log(answer)
// }

// add("//;\n1;2");







function add(numb){
  let number = numb.split(',').join('');
  let regex = number.match(/(?<=.)\d+/sg);
  let string;

  if (!regex){
     string = 0;
  } else {
     string = regex.toString();
  }

  let answer = 0;
  let i = 0;

  while(i < string.length){
    answer += Number(string[i]);
    i++;
  }

  console.log(answer);

}

add("//;\n1000;1;2");








//
