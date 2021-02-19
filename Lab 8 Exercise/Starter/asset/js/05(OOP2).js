// 1. A Person Object for Base 
const PersonObj = {

    greeting() {
        return `Hi , ${this.firstName} ${this.lastName}`;
    }
}

//2. Create Theon Object using Person Template using Object.create

const Theon = Object.create(PersonObj)

//3. Add firstName[Theon] and lastName[Greyjoy] 
Theon.firstName = 'Theon'
Theon.lastName = 'Greyjoy'


//4. Display the greeting on Theon Object [remove the string when you have the object]
let message = Theon.greeting()
Obj_C2.innerHTML =  `message : ${message}`;
