// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
const taskdate = document.querySelector('#taskdate');


let allList = document.getElementsByTagName('li');

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

function reloadPage() {
    // using the reload fun on location object
    location.reload();
  }


// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }
    let data = Date.now();
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
  
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    let datespan = document.createElement('span');
    datespan.className = 'datespan';
    datespan.style.display ='none';
    datespan.textContent = data;
    li.appendChild(datespan);
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);
    addToDatabase(taskInput.value)


  



}



// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks() {

    for (let index = 0; index < allList.length; index++) {
        let inputSearch = filter.value.toUpperCase();
        let listItemValue = allList[index].innerText.toUpperCase();
        if ((listItemValue).indexOf(inputSearch) > -1){
            allList[index].style.display = "block"
        }else{
            allList[index].style.display = "none"
        }

    };




    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }

    }
}

const collectionSorted = document.querySelector(".collection-temp");

const selectElement = document.querySelector('#selectoption');
selectElement.addEventListener('change' , (e)=>{

        if (e.target.value == 'ascending'){

            const unorderedList = document.querySelectorAll(".collection-item");
            var orderingArray = new Array();
            const currentTime = Date.now();
            for (let i = 0; i < unorderedList.length; i++) {
              listItem = unorderedList[i].querySelector(".datespan");
              taskListTime = listItem.textContent;
              let differenceTime = currentTime - taskListTime;
              orderingArray[i] = [differenceTime, i];
            }
          
            orderingArray.sort();
            for (let i = 0; i < unorderedList.length; i++) {
              collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
            }
            for (let i = 0; i < unorderedList.length; i++) {
              taskList.appendChild(unorderedList[orderingArray[i][1]]);
            }

        }
        else if(e.target.value == 'descending'){

            const unorderedList = document.querySelectorAll(".collection-item");
            var orderingArray = new Array();
            const currentTime = Date.now();
            for (let i = 0; i < unorderedList.length; i++) {
              listItem = unorderedList[i].querySelector(".datespan");
              taskListTime = listItem.textContent;
              let differenceTime = currentTime - taskListTime;
              orderingArray[i] = [differenceTime, i];
            }
          
            orderingArray.sort();
            orderingArray.reverse();
            for (let i = 0; i < unorderedList.length; i++) {
              collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
            }
            for (let i = 0; i < unorderedList.length; i++) {
              taskList.appendChild(unorderedList[orderingArray[i][1]]);
            }

        }

});