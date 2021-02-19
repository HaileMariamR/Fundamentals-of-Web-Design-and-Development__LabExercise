// A Person_ES6 Class 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 1. Create a getFullName Method on prototype object 
Person.prototype.getFullName = function(){
        return `fullName : ${this.firstName}  ${this.lastName}`
}
// 2. The Function will return firstName lastName


//create a customer object
function Customer(firstName, lastName, membership) {

    //3. Call the Person Object Constructor using call [Person.call(this,firsName,lastName)]
    Person.call(this,firstName,lastName)

    this.membership = membership;

}



// 4. Set the prototype of Customer to be Person Prototype 
Customer.prototype = Object.create(Person.prototype)
// Note : Use Object.create
// let customer = Object.create(Person)
// let customer = Object.create(Person.prototype);


//5. Change the constructor of Customer to be Customer 
Customer.prototype.constructor = Customer




// Create Customer Object pass ["Jorah", "Mormont", "PRO"]
let custemr_1 = new Customer('Jorah' , 'Mormont', 'PRO')
console.log(custemr_1);

//6. Display The Full Name [remove the string when you have the object]

fun_proto.innerHTML = `${custemr_1.getFullName()}`;
