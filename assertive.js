// const morseCode = {
//     "A": ".-",
//     "B": "-...",
//     "C": "-.-.",
//     "D": "-..",
//     "E": ".",
//     "F": "..-.",
//     "G": "--.",
//     "H": "....",
//     "I": "..",
//     "J": ".---",
//     "K": "-.-",
//     "L": ".-..",
//     "M": "--",
//     "N": "-.",
//     "O": "---",
//     "P": ".--.",
//     "Q": "--.-",
//     "R": ".-.",
//     "S": "...",
//     "T": "-",
//     "U": "..-",
//     "W": ".--",
//     "X": "-..-",
//     "Y": "-.--",
//     "Z": "--.."
// }


// const toMorseCode = (str) => {
//     return str.toUpperCase().split("").map(el => {
//         return morseCode[el] ? morseCode[el] : el;
//     }).join("");
// }

// console.log(toMorseCode('coding is life'))


// var MORSE_CODE = {  
//     "-----":"0",
//     ".----":"1",
//     "..---":"2",
//     "...--":"3",
//     "....-":"4",
//     ".....":"5",
//     "-....":"6",
//     "--...":"7",
//     "---..":"8",
//     "----.":"9",
//     ".-":"A",
//     "-...":"B",
//     "-.-.":"C",
//     "-..":"D",
//     ".":"E",
//     "..-.":"F",
//     "--.":"G",
//     "....":"H",
//     "..":"I",
//     ".---":"J",
//     "-.-":"K",
//     ".-..":"L",
//     "--":"M",
//     "-.":"N",
//     "---":"O",
//     ".--.":"P",
//     "--.-":"Q",
//     ".-.":"R",
//     "...":"S",
//     "-":"T",
//     "..-":"U",
//     "...-":"V",
//     ".--":"W",
//     "-..-":"X",
//     "-.--":"Y",
//     "--..":"Z",
//     "-.-.--":"!",
//     ".-.-.-":".",
//     "--..--":","
// };



// decodeMorse = function( morseCode ) {
//     morseCode = morseCode.split( "   " ); // get single words
//     var result = "";
    
//     for( var i = 0; i < morseCode.length; i ++ ) {
//         morseCode[i] = morseCode[i].split( " " ); // get single characters
        
//         for( let a = 0; a < morseCode[i].length; a ++ ) {
//             if( morseCode[i][a] != "" ) {
//                 result += MORSE_CODE[ morseCode[i][a] ];
//             }
//         }
        
//         if( i < ( morseCode.length -1 ) ) {  // add space after words
//             result += " ";
//         }
        
//     }
    
//     return result.trim();
// }

// console.log(decodeMorse('-.-. --- -.. .. -.  --.   .. ...   .-.. .. ..-. .'));






// const MorseCode = str => {

//     var dictionary = {
//         "-----": "0",
//         ".----": "1",
//         "..---": "2",
//         "...--": "3",
//         "....-": "4",
//         ".....": "5",
//         "-....": "6",
//         "--...": "7",
//         "---..": "8",
//         "----.": "9",
//         ".-": "a",
//         "-...": "b",
//         "-.-.": "c",
//         "-..": "d",
//         ".": "e",
//         "..-.": "f",
//         "--.": "g",
//         "....": "h",
//         "..": "i",
//         ".---": "j",
//         "-.-": "k",
//         ".-..": "l",
//         "--": "m",
//         "-.": "n",
//         "---": "o",
//         ".--.": "p",
//         "--.-": "q",
//         ".-.": "r",
//         "...": "s",
//         "-": "t",
//         "..-": "u",
//         "...-": "v",
//         ".--": "w",
//         "-..-": "x",
//         "-.--": "y",
//         "--..": "z",
//         "-.-.--": "!",
//         ".-.-.-": ".",
//         "--..--": ","
//     };   
//     var words = ''
//     str.split(" ").forEach(cur => {
//         if(cur === ""){
//             words += " "
//         }else{
//             if(dictionary[cur]){
//                 words += dictionary[cur]
//             }
//         } 
//     });
//     return (words.split("  ")).join(" ")
// }

// const getPhrase = MorseCode("-.-. --- -.. .. -. --.   .. ...   .-.. .. ..-. .")


// console.log(getPhrase);