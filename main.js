const btu = document.getElementsByClassName('container')[0];

let nua = document.querySelectorAll('input')[0];
let nub = document.querySelectorAll('input')[1];



btu.addEventListener('submit', function(e){
    e.preventDefault();
    if(nua.value >= (nub.value)){
        alert('Valor de A é maior que B.');
    } else{alert('Valor de B é maior.')}

})
console.log(btu)
