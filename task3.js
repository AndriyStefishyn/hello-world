/*Task1
let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result);


let arr=[2,3,4,5];
let i=0;
let res=1;
while (i<arr.length) {
    res*=arr[i];i++;
}
alert(res);



//Task2
for(let i=0;i<15;i++){
    if(i%2==0){
alert(i+ "is even")
    }else{
        alert(i+ "is odd ")
    }


Math.ceil(Math.random()*number);
}
//Task3
let k=[];
function randArray(k){
for(let i=0;i<10;i++){
    k.push(Math.ceil(Math.random()*500));

}console.log(k)
}
randArray(k);


//Task4
let a=parseInt(prompt("Введіть число а"));
let b=parseInt(prompt("Введіть число b"));
function raiseToDegree(a,b){

    return a**b;
}
alert(raiseToDegree(a,b));

function x(a,b){
    return a**b;}
    alert(x(Number(prompt("enter a")),Number(prompt("enter b"))));
    

    
    //Task5
    function findMin(){
        let min = arguments[0];
        for(let i=0;i<arguments.length;i++){
if(arguments[i]<min) {
    min=arguments[i];
}

        }
    console.log(min);
    }
    findMin(2,5,65,561,516,-15,-18);
    //Task6
    function findUnique(arr) {
        const seenValues = {}
      
        for (let i = 0; i < arr.length; i++) {
         
          if (seenValues[arr[i]]) {
            return false;
          } else {
            seenValues[arr[i]] = true
          }
        }
      
        return true;
      }
      */

    //Task7
    last =  function (array, n) {
        if (array == null) 
          return void 0;
        if (n == null) 
           return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
        }
console.log(last([3, 4, 10, -5]));
    
    /*task8
    function capitalize(str) {
        let x = "";
        for (i = 0; i < str.length; i++) {
        if (str[i - 1] === " " || i === 0) {
        x = x + str[i].toUpperCase();
        } else {
        x = x + str[i];
        }
        }
        return x;
        }
capitalize("");*/