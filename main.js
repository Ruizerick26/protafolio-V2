//variables
const INFO = document.querySelector('.d1');
const PROY = document.querySelector('.d2');
const EXP = document.querySelector('.d3');
const CONT = document.querySelector('.d4')
const btn1 = document.querySelector('.b1');
const btn2 = document.querySelector('.b2');
const btn3 = document.querySelector('.b3');
const btn4 = document.querySelector('.b4');
const open = document.querySelector('.plus');
const modal = document.querySelector('.container');
const close = document.querySelector('.cerrar');

const form = document.querySelector('#form');
const btnmail = document.querySelector('#tomail');

//Acciones
btn1.addEventListener('click',toggle1)
btn2.addEventListener('click',toggle2)
btn3.addEventListener('click',toggle3)
btn4.addEventListener('click',toggle4)

form.addEventListener('submit',handelSubmit);


open.addEventListener('click',() =>{
    modal.classList.add('show');
})
close.addEventListener('click',() =>{
    modal.classList.remove('show');
})

//funciones
function toggle1(){
    INFO.classList.remove('inactive');
    PROY.classList.add('inactive');
    EXP.classList.add('inactive');
    CONT.classList.add('inactive');

}   
function toggle2(){
    PROY.classList.remove('inactive');
    INFO.classList.add('inactive');
    EXP.classList.add('inactive');
    CONT.classList.add('inactive');
}
function toggle3(){
    EXP.classList.remove('inactive');
    PROY.classList.add('inactive');
    INFO.classList.add('inactive');
    CONT.classList.add('inactive');
}
function toggle4(){
    CONT.classList.remove('inactive');
    EXP.classList.add('inactive');
    PROY.classList.add('inactive');
    INFO.classList.add('inactive')
}
function handelSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    btnmail.setAttribute('href',
        `mailto:ruizerick2525@gmail.com?subject=${form.get('name')} ${form.get('lastname')} correo ${form.get('email')} &body= 
        ${form.get('message')}`)
    btnmail.click()
    document.getElementById('form').reset()
}