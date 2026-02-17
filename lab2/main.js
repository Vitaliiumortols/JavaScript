//1.2.3
let car1 = new Object();
car1.color = "yellow";
car1.maxSpeed = 10;
car1.driver = new Object();
car1.driver.name = "Tomenko Vitalii";
car1.driver.category = "C";
car1.driver.personalLiminations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;
console.log(car1);

//1.2.5
car1.drive = function () {
    console.log("I am not driving at night");
}
car1.drive();

//1.2.4
let car2 = new Object();
car2.color = "red";
car2.maxSpeed = 12;
car2.driver = new Object();
car2.driver.name = "Tomenko Vitalii";
car2.driver.category = "B";
car2.driver.personalLiminations = null;
car2.tuning = false;
car2.numberOfAccidents = 2;
console.log(car2);

//1.2.6
car2.drive = function () {
    console.log("I can drive anytime");
}
car2.drive()

//1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

//1.2.8
Truck.prototype.AssignDriver = function (name, nightDriver, experience) {
    this.driver = new Object();
    this.driver.name = name;
    this.driver.nightDriver = nightDriver;
    this.driver.experience = experience;
};

//1.2.9
Truck.prototype.trip = function () {
    if (this.driver === undefined) {
        console.log("No driver assigned");
    } else {
        console.log(
            this.driver.name + " " +
            (this.driver.nightDriver ? "drives at night" : "does not drive at night") +
            " and has " +
            this.driver.experience +
            " years of experience"
        );
    }

}

//1.2.10
let truck1 = new Truck("white", 2400, 250, "BMW", "M5");
truck1.AssignDriver("Vitalii Tomenko", true, 2);

let truck2 = new Truck("black", 2350, 255, "Mercedes", "E63s");
truck2.AssignDriver("Denys Malyk", false, 5);

truck1.trip();
truck2.trip();

//1.2.12
class Square {
    a = 10;
    //1.2.13
    constructor(a) {
        this.a = a;
    }
    //1.2.14
    static help() {
        console.log("Square — це чотирикутник з рівними сторонами");
        console.log("Усі кути дорівнюють 90°");
        console.log("Площа = a * a");
        console.log("Периметр = 4 * a");
    }
    //1.2.15
    length() {
        console.log("сума 4-х сторін: " + this.a * 4);
    }

    square() {
        console.log("площа: " + this.a * this.a);
    }

    info() {
        console.log("довжина 4-х сторін: " + this.a);
        console.log("Усі кути дорівнюють 90°");
        this.length();
        this.square();
    }
}

//1.2.16
class Rectangle extends Square {
    b = 5;
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    //1.2.17
    static help() {
        console.log("Rectangle — це чотирикутник");
        console.log("Протилежні сторони рівні");
        console.log("Площа = a * b");
        console.log("Периметр = 2*(a+b)");
    }

    length() {
        console.log("периметр: " + (this.a + this.b) * 2);
    }

    square() {
        console.log("площа: " + this.a * this.b);
    }

    info() {
        console.log("сторона a: " + this.a);
        console.log("сторона b: " + this.b);
        this.length();
        this.square();
    }
}

//1.2.18
class Rhombus extends Square {

    constructor(a, alpha, beta) {
        super(a);
        this._a = a;
        this._alpha = alpha;
        this._beta = beta;
    }
    //1.2.22
    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }

    //1.2.19
    static help() {
        console.log("Rhombus — це чотирикутник з рівними сторонами");
        console.log("Протилежні кути рівні");
        console.log("Площа = a * a * sin(alpha)");
        console.log("Периметр = 4 * a");
    }

    length() {
        console.log("периметр: " + this.a * 4);
    }

    square() {
        let rad = this.alpha * Math.PI / 180;
        console.log("площа: " + this.a * this.a * Math.sin(rad));
    }

    info() {
        console.log("сторона a: " + this.a);
        console.log("кут alpha: " + this.alpha);
        console.log("кут beta: " + this.beta);
        this.length();
        this.square();
    }
}

//1.2.20
class Parallelogram extends Rectangle {

    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    //1.2.21
    static help() {
        console.log("Parallelogram — чотирикутник, де протилежні сторони паралельні");
        console.log("Протилежні сторони рівні, протилежні кути рівні");
        console.log("Периметр = 2*(a+b)");
        console.log("Площа = a * b * sin(alpha)");
    }

    length() {
        console.log("периметр: " + 2 * (this.a + this.b));
    }

    square() {
        let rad = this.alpha * Math.PI / 180;
        console.log("площа: " + this.a * this.b * Math.sin(rad));
    }

    info() {
        console.log("сторона a: " + this.a);
        console.log("сторона b: " + this.b);
        console.log("кут alpha: " + this.alpha);
        console.log("кут beta: " + this.beta);
        this.length();
        this.square();
    }
}
//1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//1.2.24
let s = new Square(5);
s.info();

let rect = new Rectangle(4, 6);
rect.info();

let rh = new Rhombus(5, 120, 60);
rh.info();

let p = new Parallelogram(6, 4, 120, 60);
p.info();

//1.2.25
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c }
}

//1.2.26
let t1 = Triangular();
console.log(t1);

let t2 = Triangular(6, 8, 10);
console.log(t2);

let t3 = Triangular(9, 12, 15);
console.log(t3);

//1.2.27
function PiMultiplier(x) {
    return function () {
        return Math.PI * x;
    };
}

//1.2.28
let f1 = PiMultiplier(2);
let f2 = PiMultiplier(3 / 2);
let f3 = PiMultiplier(1 / 2);

console.log(f1());
console.log(f2());
console.log(f3());

//1.2.29
function Painter(color) {
    return function (a) {

        if (!a.type) {
            console.log("No 'type' property occurred!");
            return;
        }

        console.log(color + " " + a.type);
    };
}

//1.2.30
let PaintBlue = Painter("Blue");
let PaintRed = Painter("Red");
let PaintYellow = Painter("Yellow");

//1.2.31
let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

let obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(obj1);
PaintRed(obj1);
PaintYellow(obj1);

PaintBlue(obj2);
PaintRed(obj2);
PaintYellow(obj2);

PaintBlue(obj3);
PaintRed(obj3);
PaintYellow(obj3);
