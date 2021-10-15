let listadepecas = ['pecasdeteste', 'AB' , 'peca B'];
console.log('quantidade de caracteres');

if (listadepecas.length <=10){
    console.log(`as peças podem ser cadastradas`);
}


for(let i = 0; i <listadepecas.length; i++){
    let pecaatual = listadepecas[i];

    if(pecaatual.length <3){
        console.log(pecaatual + ': peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
    }
    
    else{
        console.log(pecaatual + ':a peça pode ser cadastrada')
    }
}
console.log('peso da peça')

let pesodapecaemgramas = 50;

if(pesodapecaemgramas>=100){
    console.log('peso suficiente')
}else{
    console.log('valor insuficiente')
}