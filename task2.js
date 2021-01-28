//Task1
let x = 1;
let y = 2;

let res1 = x+""+y;
console.log(res1); 
console.log(typeof res1);

let res2 = Boolean(x)+""+y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = (x<y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (Math.sqrt(x-y));//ишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


//Task2
let a=prompt("Запишіть число");
if(a % 2==0) {
if (a>0){
    console.log("Число" + a + "є правильнним");


}else{
    console.log ("Парне від’ємне");
}
}
else {console.log("Число"+a+"є правильним 2 ");

}

if(a%7==0){
console.log("Число"+a+"кратне 7");
}else{
  console.log("Число"+a+"не кратне 7");  
}

//Task3
let elements=[];
elements.unshift(3);
elements.push("some");
elements.push(true);
elements.push(null);
alert(elements.length);
elements.push(prompt("Введіть будь-яке значення"));
alert(elements[4]);
elements.shift();
alert(elements);


//Task4

let cities = ["Rome", "Lviv", "Warsaw"]; 

let Cities=cities.join("*");

console.log(Cities);




//Task5
let isAdult=prompt("How ald are you?");
if(isAdult>=18){
alert("Ви досягли повнолітнього віку");

} else if(isAdult<=10){
alert("Ви ще надто молоді");

}else{
    alert("Ви не досягля повнолітнього віку");
}


//Task6
let a = prompt("Введіть число");
let b = prompt("Введіть число");
let c = prompt("Введіть число");
let Bol = false;
a=Number(a);
b=Number(b);
c=Number(c);

console.log(a+b+c);
if((a+b<c)||(a+c<b)||(b+c<a)){
    alert("incorrect data ");

}
else{
    let p=(a+b+c)/2;
let S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(parseInt(S*1000)/1000);

if((Math.hypot(a, b)==c)||(Math.hypot(a, c) == b)||(Math.hypot(c, b) == a)){
    alert("YEs");
    Bol = true;


}

if (Bol == false) {
    alert("NO");

}}
//Task7
let currDate=new Date();
let currHour = currDate.getHours();
console.log(currHour);
if(currHour>17&&currHour<=23){
    alert("Доброго вечора");
} if(currHour>23&&currHour<=5){
    alert("Доброї ночі");
}if(currHour>5&&currHour<=11){
    alert("Доброго ранку");
} if(currHour>11&&currHour<=17){
    alert("Доброго дня");

let currDate=new Date();
let currHour = currDate.getHours();
switch(true){
   case (currHour>17&&currHour<=23):
alert("Доброго вечора");
break;
case (currHour>23&&currHour<=5):
    alert("Доброго ночі");
    break;
    case (currHour>5&&currHour<=11):
alert("Доброго ранку");
break;
case (currHour>11&&currHour<=17):
alert("Доброго дня");
break;
default:alert("Error");
}