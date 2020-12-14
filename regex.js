//two ways of creating re

// regexp = new RegExp ('pattern', 'flags');
// regexp = /pattern/gmi //fully static does not allow expressions




// function add(str){
//   let answer = 0;
//   let word = /\d/g;
//   let number = str.match(word);
//   if(!number){
//     number = 0;
//   } else {
//     let newNumber = number.join('');
//   }
//
//   for (let i = 0; i < number.length; i++){
//     let inner = Number(number[i]);
//     answer += inner;
//   }
//
//   console.log(answer)
//
// }
//
// add("1,2");
