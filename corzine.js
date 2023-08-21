let amount = document.querySelector('#number')
let price = document.querySelector('#prc')
let priceWAmount = document.querySelector('#price')
let disp = document.querySelector('.priceWAmount')
let check = document.querySelector('#of')
let dBtn = document.querySelector('#delete')
window.onmouseenter =() =>{
     priceWAmount.innerHTML = parseInt(amount.innerHTML) * parseInt(price.innerHTML)
     if(amount == 0){
        priceWAmount.innerHTML = 0
     }
}
document.querySelector('.minus').onclick = () =>{
    if(amount.innerHTML == 0){
        document.querySelector('.minus').disabled = true
    }else{
        priceWAmount.innerHTML = parseInt(amount.innerHTML) * parseInt(price.innerHTML)
        amount.innerHTML--
        if(amount.innerHTML == 0){
            priceWAmount.innerHTML = 0
         }
    }
}
document.querySelector('.plus').onclick = () =>{
    disp.style.display = 'inline-block'
    amount.innerHTML++
    priceWAmount.innerHTML = parseInt(amount.innerHTML) * parseInt(price.innerHTML)
    if(amount.innerHTML == 100){
        document.querySelector('.plus').disabled = true
    }
    for(let i of document.querySelectorAll('#price')){
        let reslut;
        reslut += i.innerHTML
        // console.log(reslut);
    }
}
check.onclick = () =>{
    for(let i of document.querySelectorAll('#ch')){
    i.checked = true ;
    if(check.checked == false){
      i.checked = false       
    }
}
}
// let block = document.querySelectorAll('.block')
// for(let o of block){
//     o.onmouseenter = () =>{

        dBtn.onclick =() =>{
            for(let i of document.querySelectorAll('#ch')){
                if(i.checked == true){
                    i.parentNode.parentNode.parentNode.style.display = 'none'
                    check.checked = false
                }
            }
        }
// }
// }