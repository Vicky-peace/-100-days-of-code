const list_el = document.getElementById("list");
const create_btn_el= document.getElementById("create");


let todos = [];

create_btn_el.addEventListener('click', CreateNewTodo);

function CreateNewTodo () {
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false
    }
    todos.unshift(item);

    const {item_el, input_el} = createTodoElement(item);

    list_el.prepend(item_el);

    input_el.removeAttribute("disabled");
    input_el.focus();

    // save()
}

function createTodoElement(item){
    const item_el =document.createElement("div");
    item_el.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;

    if(item.complete){
        item_el.classList.add("complete");
    } 

    const input_el = document.createElement("input");
    input_el.type = "text";
    input_el.value = item.text;
    input_el.setAttribute("disabled", "");
}