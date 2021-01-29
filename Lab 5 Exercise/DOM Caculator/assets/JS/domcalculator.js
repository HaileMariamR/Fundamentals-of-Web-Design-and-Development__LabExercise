const zero = document.querySelector('.btnzero');
const one = document.querySelector('.btnone');
const two = document.querySelector('.btntwo');
const three = document.querySelector('.btnthree');
const four = document.querySelector('.btnfour');
const five = document.querySelector('.btnfive');
const six= document.querySelector('.btnsix');
const seven = document.querySelector('.btnseven');
const eight = document.querySelector('.btneight');
const nine = document.querySelector('.btnnine');
const add = document.querySelector('.btnplus');
const sub = document.querySelector('.btnmius');
const mul = document.querySelector('.btnx');
const divide = document.querySelector('.btndiv');
const operands = document.querySelector('.operands');

const input = document.querySelector("#inputNumber");
const result = document.querySelector(".result") ;
var numberArrays = [zero,one,two,three,four,five,six,seven,eight,nine]
let firstNumber = "";
let secondNumber = "";
let isOperator = false;
var opratorList = [];

function onNumberClicked(...inputarray){
    
      var i ;
      for (i= 0; i < numberArrays.length; i++) {
          numberArrays[i].addEventListener('click' , (e)=>{
            if (isOperator === false){
              firstNumber +=e.target.textContent;
              operands.textContent = firstNumber;
            }
            else{
              operands.textContent = firstNumber;
              operands.textContent = "";
              secondNumber  +=e.target.textContent;
            }

          
          });
          
        
        }
}

onNumberClicked(numberArrays);

add.addEventListener('click' , (e)=>{

    isOperator = true;
    firstNumber = operands.textContent;
    operands.textContent = "";
    opratorList.push(e.target.textContent);



});

