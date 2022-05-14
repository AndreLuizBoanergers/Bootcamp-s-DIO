const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
function  changeMode(){
    changeClass();
    changeText();
}
function changeText(){
    if(body.classList.contains('dark-mode')){
        btn.innerHTML = "Ligth Mode";
        h1.innerHTML = "Dark Mode ON"
        return;
    }
    btn.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON"
}
function changeClass(){
    btn.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}
btn.addEventListener('click',changeMode);