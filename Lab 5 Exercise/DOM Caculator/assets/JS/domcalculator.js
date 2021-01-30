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
const sub = document.querySelector('.btnminus');
const mul = document.querySelector('.btnx');
const divide = document.querySelector('.btndiv');
const fNumber= document.querySelector('.firstNumber');
const sNumber = document.querySelector(".secondNumber");
const oprerator = document.querySelector('.operator')
const equal = document.querySelector('.btnequal') ;
const clear = document.querySelector('.btnclear');
const input = document.querySelector("#inputNumber");
const result = document.querySelector(".result") ;
const power = document.querySelector('.btnpow');
const sqrt = document.querySelector('.btnsqrt');
const max = document.querySelector('.btnmax');
const comma = document.querySelector('.btncomma');
var numberArrays = [zero,one,two,three,four,five,six,seven,eight,nine]
let firstNumber = "";
let secondNumber = "";
let isOperator = false;
let operatorArrays = [power,sub,divide,sqrt]

comma.addEventListener('click' , (e)=>{
  firstNumber +=e.target.textContent;
  fNumber.textContent = firstNumber;
});

add.addEventListener('click' , (e)=>{

      
      firstNumber += e.target.textContent;
      fNumber.textContent = firstNumber;
    

      oprerator.textContent = '+';

      oprerator.style.display = "none";
      

});
mul.addEventListener('click' , (e)=>{

      
  firstNumber += e.target.textContent;
  fNumber.textContent = firstNumber;


  oprerator.textContent = '*';

  oprerator.style.display = "none";
  

});
max.addEventListener('click' , (e)=>{

  oprerator.textContent = "max";
  oprerator.style.display = "none";


  let maximumString = fNumber.textContent;
  let numb= "";
  let maximum = parseInt(maximumString[0]);
  var index;
    for ( index = 0; index <= maximumString.length; index++) {
      if(isNaN(maximumString[index])){
          if (parseInt(numb) > maximum){
            maximum = parseInt(numb);
          }
          numb = "";
          
      } 
      else{
          numb += maximumString[index]
      }

    }
result.textContent ="   max =  " + maximum;
});



function onNumberClicked(...inputarray){
    
      var i ;
      for (i= 0; i < numberArrays.length; i++) {
          numberArrays[i].addEventListener('click' , (e)=>{
            if (isOperator === false){
              firstNumber +=e.target.textContent;
              fNumber.textContent = firstNumber;
            }
            else{
              
              secondNumber  +=e.target.textContent;
              sNumber.textContent = secondNumber;
            }

          
          });
          
        
        }

}
onNumberClicked(numberArrays);



function onOperatorClicked(...inputarray){
    
  var i ;
  for (i= 0; i < operatorArrays.length; i++) {
      operatorArrays[i].addEventListener('click' , (e)=>{
        
        isOperator = true;

        oprerator.textContent = e.target.textContent;


      });
      
    
    }

}
onOperatorClicked(operatorArrays);



equal.addEventListener('click' , ()=>{




   let operatorValue = oprerator.textContent;
   let finalResult ;
   let finalFirstNumber  = parseInt(firstNumber);
   let finalSecondNumber = parseInt(secondNumber);
   switch(operatorValue){
      case "^" : finalResult = finalFirstNumber ** finalSecondNumber;
                result.textContent ="=" + finalResult;
                break;
      case "-"  : finalResult = finalFirstNumber - finalSecondNumber;
                result.textContent ="=" + finalResult;
                break;
      case "/"  : 
                if(finalSecondNumber ===0){
                    alert("denominator shouldn't be zero")
                }
                finalResult = finalFirstNumber / finalSecondNumber;
                result.textContent ='=' + finalResult;
                break;
      case  "√" : finalResult = finalFirstNumber **(1/2);
                result.textContent = '=' + finalResult;
                break;
      case "+" :
                
              let stringofNumbersandoperators = fNumber.textContent;
              let number = "";
              let sum = 0;
              var index;
               for ( index = 0; index <= stringofNumbersandoperators.length; index++) {
                  if(isNaN(stringofNumbersandoperators[index])){
                      sum +=parseInt(number)
                      number = "";
                      
                  }
                  else{
                      number += stringofNumbersandoperators[index]
                  }

               }
              result.textContent ="=" + sum;
              break;
        case "*" :
          
                let multiplicationString = fNumber.textContent;
                let num = "";
                let multiplication = 1;
                var index;
                  for ( index = 0; index <= multiplicationString.length; index++) {
                    if(isNaN(multiplicationString[index])){
                        multiplication *=parseInt(num)
                        num = "";
                        
                    } 
                    else{
                        num += multiplicationString[index]
                    }

                  }
                result.textContent ="=" + multiplication;
                break;



      default:
                console.log("no options");
      

   }

});


clear.addEventListener('click' ,()=>{

    fNumber.innerHTML = '';
    sNumber.innerHTML = '';
    oprerator.innerHTML ='';
    result.innerHTML ='';
    firstNumber = "";
    secondNumber = "";
    isOperator = false;
    
});

