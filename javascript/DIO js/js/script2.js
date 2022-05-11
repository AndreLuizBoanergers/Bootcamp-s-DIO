let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let tarefa = document.getElementById('tarefa').value;
    if(tarefa != ""){
        document.getElementById('tarefas').innerHTML += "<p'><input type='radio' id='chk'>"+tarefa+"da pra ao</p>"
        document.getElementById('tarefa').value = "";
    }
})

//let risco = document.getElementById('chk');
//risco.addEventListener("click",function(){
//   console.log("clicou")
//})
