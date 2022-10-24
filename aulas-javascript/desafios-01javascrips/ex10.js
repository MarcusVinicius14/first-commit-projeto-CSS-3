//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
let marcus = {
    nome: "marcus",
    idade: 18,
    sexo: "masc",
    país: "brasil",
    estado: "SC",
}
let fe = {
    nome: "felice",
    idade: 18,
    sexo: "fem",
    país: "brasil",
    estado: "SC",
}
let pedro = {
    nome: "pedro",
    idade: 18,
    sexo: "masc",
    país: "brasil",
    estado: "SC",
}
let joao = {
    nome: "joao",
    idade: 17,
    sexo: "masc",
    país: "brasil",
    estado: "SC",
}
let ilza = {
    nome: "ilza",
    idade: 58,
    sexo: "masc",
    país: "brasil",
    estado: "SC",
}

var person1 = marcus.nome
var person2 = fe.nome
console.log(person1 == person2)