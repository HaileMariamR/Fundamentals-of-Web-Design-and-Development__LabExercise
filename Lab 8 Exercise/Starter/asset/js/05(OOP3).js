// 1. Create a Person_ES6 Class 
class newPerson{
    constructor(firstName , lastName){
        this.firstName = firstName, 
        this.lastName  = lastName
    }
    greeting(){
        return `full Name : ${this.firstName} ${this.lastName}`
    }
}


//2. Create the constructor that initialize firstName and lastName


//3. Define greeting() method that displays Full Name


//4. Create  Object using ES6 class by passing firstName,lastName ["Bran Stark"]

let Bran = new newPerson('Bran' , 'Stark')

//5. Display the greeting on Bran Object [remove the string when you have the object]
let fullName = Bran.greeting();
Obj_C3.innerHTML = `greeting Message : ${fullName}`;
