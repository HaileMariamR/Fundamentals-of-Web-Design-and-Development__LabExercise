//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    templateStringConcatenation();

    displayTemplateExpression();


})



function templateStringConcatenation() {

    // A Student Object 
    const student = { name: "Abebe", age: 21 }

    //String to Display 
    const fullIntro = "My Name is " + student.name + " and i am " + student.age + " Years Old"

    //1. Create a variable called fullIntroTemplate and Store the same string displayed above with template literal
    const fullIntroTemplate = `"My Name is ${student.name} " and i am  ${student.age}  Years Old`

    //3. Display it [change it to fullIntroTemplate]
    templateConcatenationResult.innerHTML = fullIntroTemplate;

}

function displayTemplateExpression() {


    //String to Display 
    const result = "The Sum of the Numbers is  : " + sum(1, 2)

    //1. Create a variable called result1 and Store the same string displayed above with template literal

    const result1 = `The Sum of the Numbers is ${sum(1,2)} `;
    //3. Display it [change it to result1]
    templateExpression.innerHTML = result;



}

function sum(x, y) {

    return x + y;

}