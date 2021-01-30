// localStorage.setItem('1' ,"Harry");
// console.log(localStorage.getItem('1'));
// localStorage.setItem('2' ,"Merry");
// localStorage.removeItem('2');
// localStorage.clear();
// let person = {
//     firstName : "Harry",
//     secondName : "Fikadie",
//     age : 21
// }

// let myPerson = JSON.stringify(person);
// localStorage.setItem("me" , myPerson);
// let x = localStorage.getItem('me');
// let myObj = JSON.parse(x);
// console.log(myObj.age);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector('#userPass');
const btnsignup = document.querySelector("#btn");


const userEmailLogin = document.querySelector("#userEmaillogin");
const userPasswordLogin= document.querySelector('#userPasslogin');
const btnsignupLogin = document.querySelector("#btnlogin");
// let userinfoObject = {
//     userEmail :`${userEmail.value}`,
//     userPassword :`${userPassword.value}`

// }
let count = 1;
btnsignup.addEventListener('click' , ()=>{

    let userinfoObject = {
    userEmail :`${userEmail.value}`,
    userPassword :`${userPassword.value}`
    }
     let users = JSON.stringify(userinfoObject);
     
     localStorage.setItem(count , users);
     count++;

});

btnsignupLogin.addEventListener('click' , ()=>{

        let userLoginInfo = {
            userEmailLogin : userEmailLogin.value,
            userPasswordLogin : userPasswordLogin.value

        }
        var index;
        for ( index = 1; index < localStorage.length; index++) {
            let x = localStorage.getItem(index);  

             let userOne = JSON.parse(x);
            if(((userOne.userEmail === userLoginInfo.userEmailLogin) && (userOne.userPassword === userLoginInfo.userPasswordLogin))){

                location.href = "./normal.html";

            }
          else{
                alert("incorrect password or Email")
         }
        }
        


});


