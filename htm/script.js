class Animal{
    constructor(name){
        this.name = name;
    }
    makesound(){
        document.write(`${this.name} Make a Sound`);
    }
}
class Dog extends Animal{
    makeSound(){document.write(`${this.name} Make a Sound Woof`);

    }
}

class Cat extends Animal{
    makeSound(){document.write(`${this.name} Make a Sound Woof`);

    }
}
 const animal = new Animal("Generic Animal");
 const dog = new Dog("Make a Barking");
 const cat = new Cat("Make a whiskers");

 animal.makeSound();
 dog .makeSound();
 cat .makeSound();