//frame some text

// function longestWord(str){
//   let longest = ' ';
//   for (let i = 0; i < str.length; i++){
//     let innerword = str[i];
//     if (innerword.length > longest.length){
//       longest = innerword
//     }
//   }
// return  longest;
// }



// function myTextBox(arr){
//   let finalString = ' ';
//   let word = longestWord(arr);
//   let asterik = '*'.repeat(word.length + 4);
//   finalString += asterik + '\n';
//
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].length <  word.length){
//       let sub = word.length - arr[i].length;
//       let spaces = ' '.repeat(sub);
//       finalString += `* ${arr[i]}${spaces} *\n`;
//     } else {
//       finalString += `* ${arr[i]} *\n`;
//     }
//   }
//   finalString += asterik;
//   console.log(finalString);
// }

//myTextBox(["the", "fiest", "is", "around", "the", "corner"]);





function longestWord(str){
  let longestString = ' ';
  for (let i = 0; i < str.length; i++){
    let innerstring = str[i]
    if (innerstring.length > longestString.length){
      longestString = innerstring
    }
  }
  return  longestString;
}

function frame(str){
  let finalString = ' ';
  let wordString = longestWord(str);
  let asteriks = '*'.repeat(wordString.length + 4);
  finalString += asteriks + '\n';

  for (let i = 0; i < str.length; i++){
    if (str[i].length < wordString.length){
      let placehold = wordString.length - str[i].length
      let spaces = ' '.repeat(placehold);
      finalString += `* ${str[i]}${spaces} *\n`;
    } else {
      finalString += `* ${str[i]} *\n`;
    }
  }
  finalString += asteriks;
  console.log(finalString);
}


frame(["Write","good","code","every","day"]);






//
// function pyramid(n) {
//
//   for(let i=1; i<= n; i++){
//
//     let str = ' '.repeat(n-i);
//
//     let str2 = '*'. repeat(i*2 -1)
//
//     console.log(str + str2 + str);
//
//   }
//
// }
//
// pyramid(5);





// function createPyramid(rows)
// {
//     for (let i = 0; i < rows; i++) {
//         var output = '';
//         for (let j =0; j < rows - i; j++) output += ' ';
//         for (let k = 0; k <= i; k++) output += '* ';
//         console.log(output);
//     }
// }
//
// createPyramid(5)
