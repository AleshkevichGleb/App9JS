"use strict"

let tasks;
let checkBoxes;
let spans;

const drawGoals = () => {
    const input = document.querySelector(".toDo__input");
    input.focus();

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

            checkBox.addEventListener('click', () => {
                if(checkBox.checked) {
                    span.classList.add('active');
                }else {
                    span.classList.remove('active');
                }
            })

            task.append(checkBox, span);
            field.prepend(task);
    
            event.target.value = '';
    
            tasks = document.querySelectorAll('.toDo__task');
            checkBoxes = document.querySelectorAll('.toDo__checkBox');
            spans = document.querySelectorAll('.toDo__goal');

            editTarget(spans);
            clearList();  
        }
    })  
}

function editTarget(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener('dblclick', () => {
            const targetInput = document.createElement('input')
            targetInput.className = 'toDo__targetInput';
            targetInput.focus();
            arr[i].replaceWith(targetInput)

            targetInput.addEventListener('blur', () => {
                if(targetInput.value !== '') {
                    arr[i].innerHTML = targetInput.value;
                    targetInput.replaceWith(arr[i]);
                }else {
                    targetInput.replaceWith(arr[i]);       
                }
            })

            targetInput.addEventListener('keydown', event => {
                if(event.keyCode === 13 && targetInput.value !== "") {
                    arr[i].innerHTML = targetInput.value;
                    targetInput.replaceWith(arr[i]);
                }else if(targetInput.value === "" && event.keyCode === 13){
                    targetInput.replaceWith(arr[i]);
                }
                    
            })

            setTimeout(() => {
                if(targetInput.value === '') {
                    targetInput.replaceWith(arr[i]); 
                }
            }, 6000);
        })
        break;
    }
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
