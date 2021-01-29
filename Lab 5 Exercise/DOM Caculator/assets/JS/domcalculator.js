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



const input = document.querySelector("#inputNumber");
const result = document.querySelector(".result") ;
var numberArrays = [zero,one,two,three,four,five,six,seven,eight,nine]

let firstNumber = "";
let secondNumber = "";
let isOperator = false;

function onNumberClicked(...inputarray){
      var inputValue = input.value ;
      var i ;
      for (i= 0; i < numberArrays.length; i++) {
          numberArrays[i].addEventListener('click' , ()=>{
            if (isOperator){
              firstNumber += inputValue.toString();
              result.textContent = firstNumber;
              console.log("clicked");
              
            }
            else{
              secondNumber += inputValue.toString();

            }
            
          
          });
          
        
        }
      

}

onNumberClicked(numberArrays);