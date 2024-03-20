// SINGLETON PATTERN: Object is instantiated only once
class Settings {
  static instance: Settings;

  // private constructor prevents the instantiation of the object via new keyword
  private constructor() {}

  public readonly mode = "dark";

  static getInstance = (): Settings => {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  };
}

// PROTOTYPE PATTERN: Instead of inheriting the features from a class, you inherit them from an already instantiated object

const zombie = {
  eatBrains: () => {
    console.log("yum! 🧠");
  },
};

// Add additional property of name by using Object.create()
const chad = Object.create(zombie, { name: { value: "chad" } });
console.log(chad.eatBrains());

// JS goes through the prototype chain upto the root searching for the function

console.log(chad.__proto__, Object.getPrototypeOf(chad));

// when it comes to classes in js, prototype refers to the constructor of the class

Array.prototype.bad = () => {
  console.log("I am a bad practice");
  // extending the functionality of the constructor
};
