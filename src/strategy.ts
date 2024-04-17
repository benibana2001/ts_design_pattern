interface FlyBehavior {
  fly: () => void;
}
abstract class Animal {
  abstract flyBehavior: FlyBehavior;
  performFly(): void {
    this.flyBehavior.fly();
  }
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("I CAN FLY 🦅🦅🦅");
  }
}
class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("I cannot fly ... 🐛");
  }
}

class Duck extends Animal {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
  }
  flyBehavior: FlyBehavior;
}

class Cat extends Animal {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
  }
  flyBehavior: FlyBehavior;
}

export const name = "Strategy"
export function main() {
  const animals = [new Cat(), new Duck()];
  animals.forEach((animal) => {
    animal.performFly();
  });
}
