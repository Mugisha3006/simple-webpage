// Accessing the targeted elements on the web page
let inputElement = document.querySelector("input");
let button = document.querySelector("button");
let taskContainer = document.querySelector("ul");

// create an Itemlist function
function createListItem(task) {
    // get the input value
    // let task = inputElement.value;

    // create the list item
    let listItem = document.createElement("li");

    // create span for the task element
    let taskSpan = document.createElement("span");
    taskSpan.innerText = task;

    // create a span element
    let spanElement = document.createElement("span");

    // create icon elemets 
    let completeIcon = document.createElement("input");
    completeIcon.setAttribute("type", "checkbox");
    
    let editIcon = document.createElement("i");
    editIcon.classList.add("bx", "bx-edit-alt");
    
    let doneIcon = document.createElement("i");
    doneIcon.classList.add("bx", "bx-check-circle");
    doneIcon.style.display = "none";

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bx", "bx-trash");

    // add event listeners to the icons
    deleteIcon.addEventListener("click", function () {
        listItem.remove()
    })

    completeIcon.addEventListener("click", function (event) {
        if (event.target.checked === true) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    })

    editIcon.addEventListener("click", function () {
        taskSpan.contentEditable = true;
        console.dir(taskSpan);
        doneIcon.style.display = "inline";
        taskSpan.style.padding = "6px 12px";
        editIcon.style.display = "none";
        taskSpan.focus();
    })

    doneIcon.addEventListener("click", function () {
        taskSpan.contentEditable = false;
        doneIcon.style.display = "none";
        editIcon.style.display = "inline";
    })

    // add th icons to the span element
    spanElement.append(completeIcon, editIcon, doneIcon, deleteIcon);

    // add the spans to the list item
    listItem.append(taskSpan, spanElement);

    // add list to the taskcontainer
    taskContainer.appendChild(listItem);

    // add an event listener to the button element
    button.addEventListener("click", function () {
        // get the value of the input element
        let task = inputElement.value;
        
        // console.log(activity);
        createListItem(task);
    })
    


}