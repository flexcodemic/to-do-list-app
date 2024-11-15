const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#addBtn");
const display = document.querySelector("#displayResult");

// Task function
function taskAdder() {
    if(inputBox.value === "") {
        display.textContent = "You must write something...";
        
    } else {
        display.textContent = "";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

// Add Event listener
addBtn.addEventListener('click', () => {
    taskAdder();
});

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);