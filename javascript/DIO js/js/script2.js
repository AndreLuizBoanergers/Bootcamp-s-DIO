let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let tarefa = document.getElementById('tarefa').value;
    if(tarefa != ""){
        document.getElementById('tarefas').innerHTML += "<p><input type='radio'>"+tarefa+"da pra ao</p>"
        document.getElementById('tarefa').value = "";
    }
})