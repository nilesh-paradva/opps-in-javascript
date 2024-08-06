class Person {

    constructor(age){
        this.age = age; 
    }

    father(age) {
        this.age;
        document.getElementById("f-age").innerHTML =  "Father age of " + this.age; 
    }

    child(age) {
        this.age;
        document.getElementById("c-age").innerHTML =  "Child age of " + this.age; 
    }
}

const fath = new Person(40);
fath.father();

const chil = new Person(21);
chil.child();