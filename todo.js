let inputs=document.getElementById('input');
let listcontainer=document.getElementById('list-container');
// let text=document.querySelector('.text');
function AddTaskToList(){
    //if user doesnot type any task in this situation we show alert to them
    if(inputs.value===''){
        alert("Please Enter Task");
    }
    // now we append add task 
    else{
        let li=document.createElement("li");
        li.innerHTML=inputs.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
        inputs.value="";
        savedata();
        // newElement.querySelector("i").addEventListener("click",remove);
        // function remove(){
        //     newElement.remove();
        // }
    }
    listcontainer.addEventListener('click',function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle('checked');
            savedata();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            savedata();

        }
        
    },false);
    //To save the data in browser
    function savedata(){
        localStorage.setItem('data',listcontainer.innerHTML);
    }
    //to show ther data on the browser
    function showTask(){
        listcontainer.innerHTML=localStorage.getItem('data');
    }
    showTask();