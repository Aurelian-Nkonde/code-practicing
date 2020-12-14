let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
  };
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  rabbit.__proto__ = animal;


  console.log(rabbit.walk());