const allImagePlaceHolder = document.querySelector('.allImagePlaceHolder')
const carouselInner = document.querySelector('.carousel-inner');
document.addEventListener('DOMContentLoaded' , ()=>{

    getImages();
    // displayImages();

});

function getImages(){

    let imageid= 1;
   

    while (imageid < 10){

        fetch(`https://picsum.photos/id/${imageid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            let carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-inner';
            
          let imgp = document.createElement('img');
            imgp.src = img;
            carouselItem.appendChild(imgp);
            carouselInner.appendChild(carouselItem)
            allImagePlaceHolder.appendChild(imgp)
         
        })
        .catch(function(err) {
            console.log(err);
        });

        imageid++;
    }
   


 

}

