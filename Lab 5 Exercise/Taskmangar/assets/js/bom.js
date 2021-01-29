/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

const allElementsInfo = document.querySelectorAll('a');
let allinfoIndicator = [];
const allSpanElements = document.querySelectorAll('span');

(function bomInformationTexts(){
    for (let index = 0; index < allElementsInfo.length; index++) {
        allinfoIndicator.push(allElementsInfo[index].firstChild.textContent);
        
    }

})();

(function bomInformation(){  

    for (let index = 0; index < allinfoIndicator.length; index++) {
            let value = allinfoIndicator[index];
              let count = 0;

            switch(value){
                case "Href" :
                    allSpanElements[0].firstChild.textContent = location.href;
                    
                case "Protocol":
                    allSpanElements[1].firstChild.textContent = location.protocol;
        

                case "Host":
                    allSpanElements[2].firstChild.textContent = location.host;
                
                case "Port":
                    allSpanElements[3].firstChild.textContent = location.port;
                    
                case "Hostname":
                    allSpanElements[4].firstChild.textContent = location.hostname;
                
                case "Appname":
                    allSpanElements[5].firstChild.textContent = navigator.appName;
                    
                case "Appversion":
                    allSpanElements[6].firstChild.textContent = navigator.appVersion;
                
                case "Platform" :
                    allSpanElements[7].firstChild.textContent = navigator.platform;
                    
                case "Language":
                    allSpanElements[8].firstChild.textContent = navigator.language;
        

                case "CookieEnabled":
                    allSpanElements[9].firstChild.textContent = navigator.cookieEnabled;
                
                case "Height":
                    allSpanElements[10].firstChild.textContent = screen.height;
                    
                case "Width":
                    allSpanElements[11].firstChild.textContent = screen.width;
                
                case "PixelDepth":
                    allSpanElements[12].firstChild.textContent = screen.pixelDepth;
                    
                case "Length":
                    allSpanElements[13].firstChild.textContent = history.length;
                case "State":
                    allSpanElements[14].firstChild.textContent = history.state;
                default:
                    console.log("No browser Info");
                
                
            }
    
        
    }

})();


// Display the BOM Information on the innerHTML of the elements