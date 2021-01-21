
let userOpetion = window.prompt(`

    ~Simple Calculator~
    
    opetions --
    1. Addtion 
    2. Substruction 
    3. Multiplication 
    4. Division 
    5. Maximum 
    6. Minimum
    7. Average

`);

(
    function Calculator(){

         switch(userOpetion){
             case "1":
                 let inputadd =  window.prompt("enter the arrays:  ");
                 let sum = 0;
                 (function add(...inputadd){
                     
                
                    for (let index = 0; index < inputadd.length; index++) {
                        if (inputadd[index] ===("," || "")){
                            continue;
                        }
                        sum += parseInt(inputadd[index]); 

                    }
                window.alert("Result : " + sum );
                console.log("Result : " + sum);
                    

                 })(...inputadd);
                 break;
            case "2":
                let firstNumber = window.prompt("Enter the first number");
                let secondNumber = window.prompt("Enter the second number");
                (
                    function Substruction(){
                        let r  ;
                        r = parseInt(firstNumber) - parseInt(secondNumber);
                        console.log("The Result is " + r);
                        window.alert("The result is " + r);
                    }
                )();    
            case "3":
                let inputmul=  window.prompt("enter the arrays:  ");
                let result = 1;
                (function Multiplication(...inputmul){
                    for (let index = 0; index < inputmul.length; index++) {
                        if (inputmul[index] ===("," || "")){
                            continue;
                        }
                        result *= parseInt(inputmul[index])
                        
                    }
                 
                window.alert("Result : " + result);
                console.log("Result :" + result);    

                })(...inputmul);
                break;

            case "4":
                let numinator = window.prompt("Enter the numinator: ");
                let dinominator = window.prompt("Enter the denominator");
                let resultsub ;
                (function Division(){
                        if (parseInt(dinominator) === 0){
                            window.alert("Division by zero 'error!'")
                        }
                        resultsub = parseInt(numinator)/parseInt(dinominator);

                        window.alert("Result  " + resultsub);
                        console.log("Result " + resultsub);
                })();
                break; 
            case "5":
                let inputmax = window.prompt("enter the array: ");
                (function Maximum(...inputmax){
                    let    max = parseInt(inputmax[0]);
                    for (let index = 0; index < inputmax.length; index++) {
                     
                        if (inputmax[index]===(","||"")){
                            continue
                        }

                        else if(parseInt(inputmax[index]) > max){
                            max = parseInt(inputmax[index]);
                        }
                    }
                    window.alert("The maximum is " + max);
                    console.log("The maximum is " + max);
                })(...inputmax);    
                break;
            case "6" :
                let inputmin = window.prompt("enter the array: ");
                (function Minimum(...inputmin){
                    let    min= parseInt(inputmin[0]);
                    for (let index = 0; index < inputmin.length; index++) {
                     
                        if (inputmin[index]===(","||"")){
                            continue
                        }
                        else if(parseInt(inputmin[index]) < min){
                            min = parseInt(inputmin[index]);
                        }
                    }
                    window.alert("The minimum is " + min);
                    console.log("The minimum is " + min);
                })(...inputmin);    
                break;
            case "7":
                let inputaverage = window.prompt("Enter the array : ");
                let avarageNumbers;
                (function Average(...inputaverage){
                    let totalnumbers = 0;
                    let totalsum = 0;
                    for (let index = 0; index < inputaverage.length; index++) {

                        if (inputaverage[index] === ("," || "")){
                            continue
                        }
                       totalsum  += parseInt(inputaverage[index]);
                        totalnumbers +=1;

                        
                    }
                    avarageNumbers = totalsum /totalnumbers;
                    window.alert("Average " + avarageNumbers);
                    console.log("Average" + avarageNumbers);


                }) (...inputaverage);  

        
            default:
                console.log("no result"); 

         }


    }

)();
