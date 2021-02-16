const allImagePlaceHolder = document.querySelector('.allImagePlaceHolder')
const carouselInner = document.querySelector('.carousel-inner');
document.addEventListener('DOMContentLoaded' , ()=>{

    getImages();
    // displayImages();

});
const allItems = document.querySelector('.itemOne');
const ItemTwo = document.querySelector('.itemTwo');
const ItemThree = document.querySelector('.itemThree');
const ItemFour =document.querySelector('.itemFour');
const ItemFive = document.querySelector('.itemFive')




function getImages(){

    let imageid= 1;
   

    while (imageid < 100){

        fetch(`https://picsum.photos/id/${imageid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
        
            allImagePlaceHolder.appendChild(imgp)
            allItems.src = img;
            // ItemTwo.src = img;
            // ItemThree.src = img;
            // ItemFour.src = img;
            // ItemFive.src = img;

         
        })
        .catch(function(err) {
            console.log(err);
        });
        let newimageid = imageid + 1;
        fetch(`https://picsum.photos/id/${newimageid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
        
            // allImagePlaceHolder.appendChild(imgp)
            // allItems.src = img;
            ItemTwo.src = img;
            // ItemThree.src = img;
            // ItemFour.src = img;
            // ItemFive.src = img;

         
        })
        .catch(function(err) {
            console.log(err);
        });
        let thirdid = imageid+2;
        fetch(`https://picsum.photos/id/${thirdid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
        
            // allImagePlaceHolder.appendChild(imgp)
            // allItems.src = img;
            // ItemTwo.src = img;
            ItemThree.src = img;
            // ItemFour.src = img;
            // ItemFive.src = img;

         
        })
        .catch(function(err) {
            console.log(err);
        });
        let fourthid = imageid + 3;
        fetch(`https://picsum.photos/id/${fourthid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
        
            // allImagePlaceHolder.appendChild(imgp)
            // allItems.src = img;
            // ItemTwo.src = img;
            // ItemThree.src = img;
            ItemFour.src = img;
            // ItemFive.src = img;

         
        })
        .catch(function(err) {
            console.log(err);
        });
        let fifthimageid = imageid + 4;
        fetch(`https://picsum.photos/id/${fifthimageid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
        
            // allImagePlaceHolder.appendChild(imgp)
            // allItems.src = img;
            // ItemTwo.src = img;
            // ItemThree.src = img;
            // ItemFour.src = img;
            ItemFive.src = img;

         
        })
        .catch(function(err) {
            console.log(err);
        });

        imageid++;
    }
   

}

function fetchImage(id){


}

// const allItems = document.querySelectorAll('.item');
// for (let index = 0; index < allItems.length; index++) {
//     let x = 'https://i.pinimg.com/236x/6a/11/13/6a1113d20d8d63a35a30e98c63da974c.jpg';
//     allItems.src = x;

    
// }
