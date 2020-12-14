//error handling

/*creating an error object => const err = new Error(`something bad happened`)
once created , error obj presents three properties
  message => a string with the error message
  name => the error's type
  stack => a stack of functions executions


  Types of Errors in js
    Error*,
    EvalError,
    InternalError,
    RangeError,
    ReferenceError,
    SyntaxtError,
    TypeError*,
    URIError,
*/

 const one = 10;
 if (one <= 35){
   console.log('this is awesome');
 } else {
   let err = new Error(`something bad`);
   console.log(err);
 }










//
