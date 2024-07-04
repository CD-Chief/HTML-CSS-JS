
const toDoList = ["Example 1", "Example 2", "Example 3"];

const ul = document.getElementById("To-Do-List");

function generateList(){
    toDoList.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}

generateList();