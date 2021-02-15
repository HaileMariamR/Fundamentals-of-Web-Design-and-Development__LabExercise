// UI Vars 
const postDiv = document.getElementById('myPost');



//load a single post function 
function loadPost() {

    const newxmlHttpRequest = new XMLHttpRequest();
    newxmlHttpRequest.open('GET' , '/jsondata.json' , true);
    newxmlHttpRequest.onload = function() {
        if (this.status === 200)     //check the status  
           {
            const post = JSON.parse(this.responseText);
            console.log(post);
            let output = `
     <div class="item">
          <div class="image"> <img src="${post.image}"> </div>
          <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
                <div class="meta">
                    <span id="bDate">${post.date} </span>
                    <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                </div>
                <div class="description">  <p id="bDesc">  ${post.postText} </p>  </div>
                <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
          </div>
     </div>           `;
            postDiv.innerHTML = output;
        }
    }

    

    newxmlHttpRequest.send();



}