const task=document.querySelector('button');
const input=document.querySelector('input');
const items=document.querySelector('#list-container')
 function addtask(){
    if(input.value===''){
        alert('Please enter a task');
    }
    else{
        const taskname=input.value;
        const li=document.createElement('li');
        li.textContent = taskname;
        items.appendChild(li);
        input.value='';
        let span=document.createElement("span");
        span.textContent ="x";
        span.setAttribute("class", "close");
        li.appendChild(span);
        savedata();
    }
 }
task.addEventListener('click',addtask);


items.addEventListener('click',(e)=>{
    if(e.target.className==='close'){
        e.target.parentNode.remove();
        savedata();
    }
},false);


function  savedata(){
    localStorage.setItem("data",items.innerHTML);
}

function showlist(){
    items.innerHTML=localStorage.getItem("data");
}
showlist();

