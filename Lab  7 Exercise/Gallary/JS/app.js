const allImagePlaceHolder = document.querySelector('.allImagePlaceHolder')

document.addEventListener('DOMContentLoaded' , ()=>{

    getImages();
    // displayImages();

});

function getImages(){

    let imageid= 1;
   

    while (imageid <= 1000){

        fetch(`https://picsum.photos/id/${imageid}/200/300`)
        .then((res)=>{
            // return res
           
            let img =  res.url + '';
            
          let imgp = document.createElement('img');
            imgp.src = img;
            allImagePlaceHolder.appendChild(imgp)
         
            allImage.push(img);
        })
        .catch(function(err) {
            console.log(err);
        });

        imageid++;
    }
   


 

}

