var vel = 50.5

var agora = new Date()//declaração de Objeto
var hora = agora.getHours()//hora atual do sistema
console.log(hora)

//condicional IF
if (vel > 60){
    console.log(`A velocidade do carro é ${vel}km/h`)
    console.log('você será multado')
} else if (vel > 9) {
    console.log('dirija com segurança')
} else {
    console.log('Não captado')
}

//Condicional Multipla
//break é obrigatorio
var sexo = 'o'


switch (sexo.toUpperCase() ) {
case 'F':
    console.log('Feminino')
    break
case 'M':
    console.log('Masculino')
    break
default:
    console.log('Outros')
}