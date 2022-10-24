/* 
 OPERADOR TERNARIO OU CONDICIONAL 

 ? SE
 : SE NÃO
*/

const rain = true

const umbrela = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(umbrela) 


// preciso transferir dinheiro

const balance = true
const isNotBlocked = true
const accountExist = true
const transferOk = balance && isNotBlocked && accountExist ? 'tranferencia realizada.' : 'transferencia negada.'

console.log(transferOk)