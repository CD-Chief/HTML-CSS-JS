
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

        //Add event listener
        li.addEventListener("click", function(event) {

            if (event.target.type !== "checkbox") {
                if (li.classList.contains("Selected")) {
                    li.classList.remove("Selected");
                } else {
                    li.classList.add("Selected");
                }
            }
        })

        //Add checbox to li
        li.appendChild(checkbox);

        //Add li to ul
        ul.appendChild(li);

    }
}

function deleteElement(){
    let ulItems = ul.querySelectorAll("li");

    ulItems.forEach(function(item) {
        if (item.classList.contains("Selected")) {
            item.remove();
        }
    });
}

function editElement(){
    let found = 0;
    let ulItems = ul.querySelectorAll("li");

    ulItems.forEach(function(item) {
        if (item.classList.contains("Selected")) {
            found += 1;
        }
    });

    if (found == 0){
        alert("Must select a task first!");
    } else {
        let userInput = prompt("Enter task to replace selected tasks:", "Enter Task...");
        if (userInput !== null) {
            ulItems.forEach(function(item) {
                if (item.classList.contains("Selected")) {
                    item.textContent = userInput;

                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";

                    item.appendChild(checkbox);
                };
            });
        };
    };
};
