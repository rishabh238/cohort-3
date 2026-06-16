const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});