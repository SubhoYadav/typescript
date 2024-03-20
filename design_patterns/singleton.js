// SINGLETON PATTERN: Object is instantiated only once
var Settings = /** @class */ (function () {
    // private constructor prevents the instantiation of the object via new keyword
    function Settings() {
        this.mode = "dark";
    }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    return Settings;
}());
// PROTOTYPE PATTERN: Instead of inheriting the features from a class, you inherit them from an already instantiated object
var zombie = {
    eatBrains: function () {
        console.log("yum! 🧠");
    },
};
// Add additional property of name by using Object.create()
var chad = Object.create(zombie, { name: { value: "chad" } });
console.log(chad.eatBrains());
// JS goes through the prototype chain upto the root searching for the function
console.log(chad.__proto__, Object.getPrototypeOf(chad));
// when it comes to classes in js, prototype refers to the constructor of the class
Array.prototype.bad = function () {
    console.log("I am a bad practice");
    // extending the functionality of the constructor
};
