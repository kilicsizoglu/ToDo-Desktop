var ToDoText = document.getElementById("ToDoText");
var ToDoAddButton = document.getElementById("ToDoAddButton");

ToDoAddButton.addEventListener("click", function () {
    var i = 0;
    while (true) {

        var Todo = window.localStorage.getItem("ToDoText" + i);
        if (Todo != null) {

            i++;

        }
        else {
            break;
        }

    }

    if (ToDoText != null) {
        
        window.localStorage.setItem("ToDoText" + i, ToDoText.value);

    }

    window.location.reload();
})

window.addEventListener("load", function () {

    var i = 0;
    var ToDos = Array();
    while (true) {

        var Todo = window.localStorage.getItem("ToDoText" + i);
        if (Todo != null) {

            ToDos.push(Todo);

        }
        if (i == 250) {
            break;
        } 
        i++;

    }

        var ToDoList = document.getElementById("ToDoList");

        var j = 0;

        while (ToDos.length != j) {

            var ul = document.createElement("ul");

            ul.classList.add("list-group");
            ul.classList.add("list-group-horizontal");
            ul.classList.add("rounded-0");
            ul.classList.add("bg-transparent");

            var li = document.createElement("li")

            li.classList.add("list-group-item");
            li.classList.add("d-flex");
            li.classList.add("align-items-center");
            li.classList.add("ps-0");
            li.classList.add("pe-3");
            li.classList.add("py-1");
            li.classList.add("rounded-0");
            li.classList.add("border-0");
            li.classList.add("bg-transparent");

            var p = document.createElement("p");

            p.innerText = j;

            li.appendChild(p);
            
            ul.appendChild(li);

            li = document.createElement("li")

            li.classList.add("list-group-item");
            li.classList.add("px-3");
            li.classList.add("py-1");
            li.classList.add("d-flex");
            li.classList.add("align-items-center");
            li.classList.add("flex-grow-1");
            li.classList.add("border-0");
            li.classList.add("bg-transparent");

            var p = document.createElement("p");

            p.classList.add("lead");
            p.classList.add("fw-normal");
            p.classList.add("mb-0");

            p.innerText = ToDos[j];

            li.appendChild(p)

            ul.appendChild(li);

            li = document.createElement("li");

            li.classList.add("list-group-item");
            li.classList.add("px-3");
            li.classList.add("pe-0");
            li.classList.add("rounded-0");
            li.classList.add("border-0");
            li.classList.add("bg-transparent");

            var RemoveTodoButton = document.createElement("button");

            RemoveTodoButton.classList.add("text-danger");

            RemoveTodoButton.innerText = "Remove";

            RemoveTodoButton.onclick = function () {
                      
                var g = 0;
                var ToDos = Array();
                while (true) {

                    var Todo = window.localStorage.getItem("ToDoText" + g);
                    if (Todo != null) {

                        ToDos.push(Todo);
                        window.localStorage.removeItem("ToDoText" + g)

                    }
                    if (g == 250) {
                        break;
                    } 
                    g++;

                }

                var h = 0;
                while (g != h) {

                    if (ToDos[h] != null) {
                        localStorage.setItem("ToDoText" + h, ToDos[h]); 
                        h++;
                    } else {
                        break;
                    }

                }

                window.location.reload();

                var element = this.parentElement.parentElement;
                var e = 0;
                while (element.children.length >= e) {
                    var d = 0;
                    while (element.children[e].children.length >= d) {
                        if (element.children[e].children[d].nodeName == "P") {
                            var f = element.children[e].children[d].innerHTML;
                            window.localStorage.removeItem("ToDoText" + f);
                        };
                        d++;
                    }
                    e++;
                }

                

            }
            
            li.appendChild(RemoveTodoButton);

            ul.appendChild(li);

            ToDoList.appendChild(ul);


            j++;
        }

});