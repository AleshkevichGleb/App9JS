"use strict"


let tasks;
let checkBoxes;
let spans;

const drawGoals = () => {
    const input = document.querySelector(".toDo__input");

    const field = document.querySelector('.toDo__field');
    
    input.addEventListener('keydown', event => {
        if(event.keyCode === 13 && event.target.value !== ""){
            const task = document.createElement('div');
            task.className = 'toDo__task'

            const checkBox = document.createElement('input');
            checkBox.className = 'toDo__checkBox'
            checkBox.setAttribute('type', 'checkbox');

            const span = document.createElement('span'); 
            span.innerHTML = event.target.value;
            span.classList.add('toDo__goal');

            task.append(checkBox, span);
            field.prepend(task);
    
            event.target.value = '';
    
            tasks = document.querySelectorAll('.toDo__task');
            checkBoxes = document.querySelectorAll('.toDo__checkBox');
            spans = document.querySelectorAll('.toDo__goal');
            crossOutTheTarget();
            editTarget();
        }
    }) 
    clearList();   
}
  
function crossOutTheTarget() {
    checkBoxes.forEach(elem => {
        elem.addEventListener('click', () =>{
           for(let i = 0; i < checkBoxes.length; i++){
            if(checkBoxes[i].checked) {
                spans[i].classList.add('active');
            }else {
                spans[i].classList.remove('active');
            }
        }
        })
    })
}


function editTarget() {
    spans.forEach(elem => {
        elem.addEventListener('dblclick', () => {
            let edit = prompt('Type a new target', elem.innerHTML);
            if(edit !== '')elem.innerHTML = edit;
        })
    })
}

function clearList(){
    const clearBtn = document.querySelector('.clearBtn');
    clearBtn.addEventListener('click', () => {
        tasks.forEach(elem => {
            elem.remove();
        })
    })
}


drawGoals();
