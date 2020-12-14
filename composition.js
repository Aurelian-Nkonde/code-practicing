// const one = {one:'one'}
// const two = {two:'two'}
// const combined = Object.assign({}, one, two);
// console.log(combined);

class Human{
    constructor(name,role){
        this.name = name,
        this.role = role
    }
    sayHello(){
        console.log(`Hello , im ${this.name}`);
    }
}

class Designer extends Human{
    design(thing){
        console.log(`ey, i design this ${this.thing}, name is ${this.name}`);
    }
}


class Developer extends Human{
    code(thing){
        console.log(`ey i coded this ${this.thing}, name is ${this.name}`);
    }
}