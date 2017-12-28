//ES5

function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyota = new Toyota({ title: 'Focus', color: 'white' });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

//ES6

class CarES6 {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class ToyotaES6 extends CarES6 {
    constructor(options) {
        //super calls parent constructor -> Car.constructor()
        super(options);
        this.color = options.color;
    }
    
    honk() {
        return 'beep'
    }
}

const toyotaES6 = new ToyotaES6({ color: 'red', title: 'Corolla' });
console.log(toyotaES6);
console.log(toyotaES6.drive());
console.log(toyotaES6.honk());

/**Ex1: Game Classes
 * You are a game developer tasked with setting up some basic classes for a new game you are working on.  
 * Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster 
 * whenever they are created. 
 * Initialize the Monster's health to 100.The constructor will be called with an 'options' object that 
 * has a 'name' property.  Assign the 'name' to the Monster
 */

class Monster {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
    }
    
}

const monster = new Monster({ name: 'The red monster' })
console.log(`The monster's health is ${monster.health} and the name of the monster is ${monster.name}`)


/**Ex2: Subclassing Monsters
 * Now that you have a monster created, create a subclass of the Monster called Snake. 
 * The Snake should have a 'bite' method.  The only argument to this method is another 
 * instance of a Snake. The instance of Snake that is passed in should have their health
 * deducated by 10
 */

  
  class Snake extends Monster {
      
      constructor(options) {
          super(options)
      }
      
      bite(instance) {
          
          return instance.health = instance.health - 10        
      }
  
  }
  
  const snake = new Snake({ name: 'Snake 1' })
  const snake2 = new Snake({ name: 'Snake 2' })
  snake2.bite(snake)
  snake2.bite(snake)  

  console.log(snake.health) // snake.health = 80, after two bites from snake2
