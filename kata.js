//a squire function

function squire(number){

  let characters = '';
  let i = 0;
  while(i < number){
    characters += '#'
    i++;
  }


  for (let p = 0; p < number; p++){
    console.log(characters);
  }

}

squire(5);
