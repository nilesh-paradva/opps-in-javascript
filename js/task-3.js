class Employee {
    constructor() {
        this.massage = "A new employee has been created........!";
    }
}

const Employ = new Employee();
document.getElementById("e-m").innerHTML = Employ.massage;