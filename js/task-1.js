class school {
    student(name, email, contact) {
        document.getElementById("stu").innerHTML += "Name :- " + name + "</br>"; 
        document.getElementById("stu").innerHTML += "Email :- " + email + "</br>";
        document.getElementById("stu").innerHTML += "Contact :- " + contact; 
    }
    faculty(name, email, contact) {
        document.getElementById("fac").innerHTML += "Name :- " + name + "</br>"; 
        document.getElementById("fac").innerHTML += "Email :- " + email + "</br>";
        document.getElementById("fac").innerHTML += "Contact :- " + contact; 
    }
    peon(name, email, contact) {
        document.getElementById("peon").innerHTML += "Name :- " + name + "</br>"; 
        document.getElementById("peon").innerHTML += "Email :- " + email + "</br>";
        document.getElementById("peon").innerHTML += "Contact :- " + contact;
    }
}

const std1 = new school();
std1.student("Nilesh", "nileshparadva97@gmail.com", 6356384650);

const f1 = new school();
f1.faculty("Vivek", "vivek123@gmail.com", 5436626727);

const peon1 = new school();
peon1.peon("Rutam", "rutam7625@gmail.com", 9656324698);




