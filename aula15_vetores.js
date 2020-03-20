var vetor = ['lucas', 'breno','luana', 'rosana']


//vetor[6] = 'teste'//acrecenta variavel na posição desejada, os demais fica undefined
vetor.push('icaro')//coloca valor na ultima posição do arrey


console.log(vetor)
vetor.sort()//organiza o vetor em ordem crescente considerando letras maiusculas
console.log(vetor)

//for para percorrer vetor
// for(i=0; i < vetor.length; i++){
//     console.log(vetor[i])
// }

//for in
for (var v in vetor){
    console.log(vetor[v])
}

var busca = vetor.indexOf('l')//busca valor e retorna o indice

console.log('Resultado da busca: ' + vetor[busca])