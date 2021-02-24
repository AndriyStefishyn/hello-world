//Task 1
/* function toUpper(str){
    return /^[A-Z]/.test(str);
    }
console.log(toUpper("regexp"));
console.log(toUpper("RegExp")); */

//Task 2
/* function checkEmail(str){
    return /\S+@\S+\.\S+/.test(str); 
}
        console.log(checkEmail("Qmail@gmail.com")) */
 
//Task 3
/* let str ="cdbBdbsbz";
let reg = /d(b+)(d)/i;
console.log(reg.exec(str));  */
 

 //Task 4
/* let reg = "Java Script";
let res = /\s/;
let spl=reg.split(res);
[spl[0],spl[1]]=[spl[1],spl[0]];
console.log(spl); */



//Task 5
/* function validation(Number){
    return /\d{4}-\d{4}-\d{4}-\d{4}/.test(Number);
    
    }
console.log(validation("9999-9999-9999-9999")); */


//Task 6
/* function email(str){
let pattern = /^[a-zA-Z0-9]+([-]?\w+([-]?\w+))/
return pattern.test(str);
}
console.log(email("my_mail@gmail.com"));
console.log(email("#my_mail@gmail.com"));
 
//Task 7
function checkLogin(data){
    let res = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let numb = /[0-9\.]+/g;
    let resNumb = data.match(numb);
    let result = res.test(data);
    console.log('${data} is ${result} - ${resNumb}'); 
}
checkLogin('e1.88ret3');
checkLogin('ee1*1ret3'); */




















