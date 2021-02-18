//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    forINLoop();

    forOFLoop();
})


function forINLoop() {

    // A Student Object 
    const student = { name: "Abebe", age: 21, year: "2dn year" }

    // 1. Create a for in loop that iterate over the student object

    for (let key in student) {
        
                let values = [student.name , student.age, student.year];
                let count = 0;
                forInLoop.innerHTML +=
                `
                <li class="list-group-item" >${key} : ${student[key]}</li>

            `;
            
    }

    // 2. Inside the loop paint the UI [Use the Format Given Below]


    //Use this Format 

    // forInLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >${Key} : ${Value}</li>

    // `;


}


function forOFLoop() {

    // A Students Array
    const students = [{ name: "Abebe", age: 21, year: "2dn year" }, { name: "Kebede", age: 22, year: "2dn year" }, { name: "Abebech", age: 23, year: "2dn year" }]

    // 1. Create a for of loop that iterate over the students Array and displays the names of students 


    // 2. Inside the loop paint the UI [Use the Format Given Below]

    for (const iterator of students) {

    forOfLoop.innerHTML +=
        `
        <li class="list-group-item" >Name : ${iterator.name}</li>

    `;

        
    }
    //Use this Format 

    // forOfLoop.innerHTML +=
    //     `
    //     <li class="list-group-item" >Name : Abebe</li>

    // `;

}