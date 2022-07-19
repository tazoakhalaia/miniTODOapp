const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2');
const list  = document.querySelector('.list');

btn.addEventListener('click', Add);
function Add(){
    let dd = document.createElement('div');
    dd.classList.add('dd');
    let h2 = document.createElement('h2');
    h2.innerText = input.value + " ✔️";
    dd.append(h2);
    list.append(dd);

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeBtn');
    dd.append(removeButton);
    list.append(dd);
    if(input.value === ""){
        list.removeChild(dd);
    }
    if(btn){
        input.value = "";
    }
    removeButton.addEventListener('click', ()=> {
        list.removeChild(dd);
    })     
   

}
window.addEventListener('keypress', (e)=>{
    let key = e.key;
    if(key === "Enter"){
        Add();
    }
})

