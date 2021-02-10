//Task 1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development", 
     };     
function propsCount(currentObject){
    return Object.keys(currentObject).length;
}
console.log(propsCount(mentor));

//Task 2
let laptop = {
CPU : "Intel Core",
GPU : "Nvidia",
HDD : "1000",
Display : "FullHD" ,
Model : "HP",
};
function showProps(obj){
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.values(obj));

} 
showProps(laptop);

//Task 3 
 class Person {
    constructor(name,surname){
    this.name = name;
    this.surname = surname;
}
showFullName(){
    console.log(this.name,this.surname);
}
}
class Student extends Person{
    constructor(name,surname,year){
        super(name,surname);
        this.year = year; 
    }
    showFullName(midleName){
        super.showFullName();
        this.midleName = midleName;
        return midleName;
    }
    showCourse(){
        this.currentYear = 2021;
        let course = this.currentYear - this.year;
        return course;
    }
}
let student = new Student("Oleh", "Olezhenko", 2016);
console.log(student.showFullName("Olehovych"));
console.log(student.showCourse()); */





//Task 4
  class Worker{
    constructor(fullName,dayRate,workingDays){
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
}

    showSalary(){
       
       return this.dayRate * this.workingDays;
    }
    _experience = 1.2;
    showSalaryWithExperience(){
  
  
    return this.dayRate * this.workingDays * this._experience
    }
    get showExp(){
    return this._experience;
    }
    set setExp(value){
        this._experience = value;
        console.log(this._experience);
    }
 }
 let worker1 = new Worker("John Johnson", 20, 23);

 let worker2 = new Worker("Tom Tomson", 48, 22);

 let worker3 = new Worker("Andy Ander", 29, 23);

function x (obj){
    console.log(obj.fullName);                 
    console.log(obj.showSalary());
    console.log("New experience: " + obj.showExp);
    console.log(obj.showSalaryWithExperience());
    worker1.setExp = 1.5;
    console.log("New experience: " + obj.showExp);
    console.log(obj.showSalaryWithExperience());
}
x(worker1);
x(worker2);
x(worker3); 
  let salaries = {
    worker1:worker1.showSalaryWithExperience(),
    worker2:worker2.showSalaryWithExperience(),
    worker3:worker3.showSalaryWithExperience(),
}
console.log(salaries); 
  



//Task 5 
class GeometricFigure {
    
    getArea(){
        return 1;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;        
    }

    }
 class Triangle extends GeometricFigure{
    constructor(a,b){
        super();
        this.a = a;
        this.b = b;
    }
    getArea(){
         
        return (this.a*this.b)/2;
       
    } 
   
}

class Square extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        
        return this.a**2;
    }
  
}
class Circle extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
      
    }
    getArea(){
        
        return this.a * Math.PI;
    } 
    
}
 

 
 function handleFigures(figures){
    let sum1 = 0;
figures.reduce(function(sum,obj){ 
    if(obj instanceof GeometricFigure){
console.log(obj.__proto__.toString() + ":" + obj.toString() + " area - " + obj.getArea());
    }else{
     throw new Error();
    }
    
sum1 += obj.getArea();
},figures[0]);
return sum1;
} 
 const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures)); 
 

