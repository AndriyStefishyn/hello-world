//task 1 
function calcRectangleArea (){
let width= Number(prompt("Enter the width of the rectangle"));
let height =Number(prompt("Enter the height of the rectangle"));
let square = width*height;
if(isNaN(width) || isNaN(height)){    
    throw new Error ("You entered incorrect values");

}else{
    alert(" Your number is " + square)

}
}
try{
    calcRectangleArea();
    
}catch(exception){
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);

}


//task 2
function checkAge() {
   let age = Number(prompt("Enter your age"));
console.log(age);
   if(age=="") {
   alert("The field is empty! Please enter your age");
throw new Error("The field is empty!");    
}

   if(isNaN(age)==true) {

alert("You entered incorrect values");
throw new Error ("Entered incorrect values");
   }
   if(age<=14){
       alert("You have not reached the appropriate age");
       throw new Error("Wrong age");
   }else{
       alert("Enjoy ");
   }
}
try{   

    checkAge();
}catch(exception){
 console.log(exception.name);
     console.log(exception.message);
     console.log(exception.stack);
 
}


//Task 3




//Task 4
function showUser (id){
    let User = {id:id,}
    try{
        if(id<0 ){
            throw new Error("Error");
        }else{
            return User;
        }
    }catch(Error){
        console.log(Error.name + " ID must no be negative" + User.id);
        return null;
    }
}

function showUsers (ids){
let arr = [];
let j = 8;
for(let i = 0; i < ids.length; i++){
    if(showUser(ids[i])!=null){
        arr[j] = showUser(ids[i]); j++;
    }
}
return arr;
}
console.log(showUsers([]));