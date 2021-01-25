
var Balance=0;

while(true){

      
        let userOption =window.prompt(`
            ~~~~~~Bank System ~~~~~~
            1. Deposit 
            2. Withdraw
            3. Balance 
            4. Transefer


        `);
        (
            function bankSystem(){
            
                switch(userOption){
                    
                    case "1" :
                
                        let depositAmount =window.prompt("Enter the amount of ur deposit: ");
                        (
                        function Deposit(depositAmount){
                            Balance +=parseInt(depositAmount);
                        window.alert(`ur deposit is ${parseInt(depositAmount)} and ur current balance is ${Balance}
                            `)
                            console.log(parseInt(Balance));

                        }
                        )(depositAmount);
                        break;
                    case "2" :
                    let Withdrawamount = prompt("Enter Withdraw amount");
                    (function Withdraw(Withdrawamount){
                            if (parseInt(Withdrawamount) > Balance){
                                alert(`
                                Sorry! ur balance is not enough! for withdraw
                                `);
                                
                                
                            }else{
                            Balance = Balance - parseInt(Withdrawamount);

                            alert((`withdraw successfuly with amount ${parseInt(Withdrawamount)}`));

                            };
                        
                            
                    

                    })(Withdrawamount);
                    break;
                    case "3" :
                        (function B(){
                            alert(` Current Balance ${Balance}`);
                            console.log(`ur current balnce is ${Balance}`);

                        })();

                        break;
                    case "4":
                        let transeferAmount = prompt("Enter The amount");
                        let accoutNumber = prompt("Enter the account Number");
                        (function Transefer(transeferAmount,accoutNumber){

                            if ((Balance != 0)&&(Balance >= transeferAmount)){
                                Balance -=parseInt(transeferAmount);
                                alert(`u transfer ${transeferAmount} to the account number ${accoutNumber}
                                `)
                            }else{
                                alert("Failed!")
                            }

                        })(transeferAmount,accoutNumber);

                    default:
                        alert('No option');
                }


            }
        )();

}