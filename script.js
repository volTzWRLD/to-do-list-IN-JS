

const ul_element    = document.querySelector('ul');
const input_element = document.getElementById("input");
const buttonAdd     = document.getElementById("add");
const buttonRem     = document.getElementById("remall");






const tasks = JSON.parse(localStorage.getItem("key")) || []

    
function showTasks(){

    ul_element.innerHTML = ''

    for (list of tasks){

        const element_of_li   = document.createElement('li');
        const text_of_element = document.createTextNode(list);
        const element_img     = document.createElement('img');

        
        element_of_li.appendChild(text_of_element);
        element_of_li.appendChild(element_img);
        ul_element.appendChild   (element_of_li);


        element_img.src   = './images/trash-bin.png';
        element_img.align = 'right';

        element_img.setAttribute("onclick", `remTasks(this)`);
   
    }

}


showTasks()

function addTasks(){

    const verify_input  = input_element.value == '' || input_element.value == ' ' ? alert("Preencha o campo, por favor") : true; 

    if (verify_input){

        const element_in_li = input_element.value;
        tasks.push(element_in_li);
    

        input_element.value = '';
        showTasks();
        Storage()
        
    }

}

buttonAdd.setAttribute("onclick", 'addTasks()')


function remTasks(e){

    tasks.splice(e.target, 1)
    showTasks()
    Storage()

}


buttonRem.setAttribute("onclick", 'remAllTasks()')


function remAllTasks(){
    
    localStorage.clear();
    showTasks();
    ul_element.innerHTML = '';
    tasks.splice(list)
    
}


function Storage(){

    localStorage.setItem("key", JSON.stringify(tasks))

}
