// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
console.log('Ok Js!');


function openInputs() {

    const inputBox = document.getElementById('inputs-container');

    inputBox.style.display = 'flex';


};


function addToDo() {

    const inputBox = document.getElementById('inputs-container');

    let newToDo = document.getElementById('text-act').value;

    inputBox.style.display = 'none';

    document.getElementById('text-act').value = '';

    const toDoListHtml = document.getElementById('toDoList');


    // creazione della card

    const taskCard = document.createElement('div');

    taskCard.id = "toDo-act";

    // creazione dell'icona

    const taskIco = document.createElement('i');

    taskIco.className = "fa-solid fa-square-xmark";

    taskIco.id = 'task_ico_delete';

    

    // creazione testo

    const taskText = document.createElement('p');

    taskText.className = "to_do_item";

    if (newToDo.length > 0) {
        taskText.innerText = newToDo;



        // inserisco ico e testo nella card

        taskCard.appendChild(taskIco);

        taskCard.appendChild(taskText);

        taskCard.style.display = 'flex';

        toDoListHtml.appendChild(taskCard);

        // creo l'evento di eliminazione del prodotto

        taskIco.addEventListener('click', () => {

            toDoListHtml.removeChild(taskCard);

        })

    }
}


function editItem(){


}
/*   
 
 <div id="toDo-act">
                  
 </div>

<i class="fa-solid fa-square-xmark" @click="taskIsDone(index)">
 
 */