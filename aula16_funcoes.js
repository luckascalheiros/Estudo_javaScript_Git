function parimpar (n){
    if (n%2==0){
        return 'par'
    } else {
        return 'impar'
    }

    
}

console.log(parimpar(4))

//função com valores pre definiddos
function soma (n1=0, n2=0){
    return n1+n2
}

console.log(soma(7, 7))


//Função armazenada em variável
let v = function(x=1, y=1){
    return x*y
}

console.log(v(7))

//recursividade, a função pode chamar ela mesmo
function fat(n){
    if (n==1){
        return 1
    } else {
        return n * fat(n-1)
    }
}
console.log(fat(5))