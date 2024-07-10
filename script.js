
const toDoList = [];

const ul = document.getElementById("To-Do-List");


function addElement(){
    let text = document.getElementById("Element-Text").value;
    if (text){
        //Make li element
        let li = document.createElement("li");
        li.textContent = text;

        //Make checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //Add checbox to li
        li.appendChild(checkbox);

        //Add li to ul
        ul.appendChild(li);

        toDoList.push(text);
    }
}