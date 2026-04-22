
class Car{

  private _brand: string;

  constructor(brand: string){
    this._brand = brand;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }
}

const car = new Car("Hyundai");
console.log(car.brand); // Output: Hyundai

// 상속
class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("왈~ 왈~");
  }
}

const dog = new Dog();
dog.sound(); // Output: 왈~ 왈~

//조합
const canBark = (state: string) => ({
  bark: () => console.log("왈~ 왈~")
});

const canRun = (state: string) => ({
  run: () => console.log("달린다!")
});

const createDog = (name: string) => {
  const state = {name: name};
  // Object.assign()을 사용하여 상태와 행동을 결합합니다.
  return Object.assign({}, state, canBark(state.name), canRun(state.name));
};

const dog2 = createDog("Buddy");
dog2.bark(); // Output: 왈~ 왈~
dog2.run(); // Output: 달린다!

