class Shape {

    circleArea(radius){
        let circle = 3.14 * radius * radius;
        document.getElementById("c-area").innerHTML = "radius(5) =" + circle;
    }    

    rectangle(width, height){
        let rectangle = width * height;
        document.getElementById("ractengle").innerHTML = "width,height(5,6) =" + rectangle;
    }    

}
const area = new Shape();
area.circleArea(5);
area.rectangle(5, 6)