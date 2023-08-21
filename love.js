let inp = document.querySelector('#m')
let inpp1=document.querySelector('#num')
let inpp2=document.querySelector('#num1')
let inp1 = document.querySelector('#m1')
let ot = document.querySelector('#ot')
let dos = document.querySelector('#do')
let btn = document.querySelector('#ok')
let x = document.querySelector('#x')
let x1 = document.querySelector('#xo')


inp.oninput = () =>{
    inpp2.value = inp.value
}
inp1.oninput = () =>{
    inpp1.value = inp1.value
}
btn.onclick = () =>{
    document.querySelector('.filterType').style.opacity = '100%'
    document.querySelector('.deleteAll').style.opacity = '100%'
    ot.innerHTML = inp1.value
    dos.innerHTML = inp.value
}
x.onclick = () =>{
    document.querySelector('.filterType').style.opacity = '0%'
    document.querySelector('.deleteAll').style.opacity = '0%'
}
x1.onclick = () =>{
    document.querySelector('.filterType').style.opacity = '0%'
    document.querySelector('.deleteAll').style.opacity = '0%'
}