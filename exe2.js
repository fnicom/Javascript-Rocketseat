// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function showPar(num1, num2) {

    let lista = []
    while(num1<=num2){
        if((num1%2) == 0){
            lista.push(num1)
        }
        num1++ 
    }
    return lista
}

console.log(showPar(0,20));
