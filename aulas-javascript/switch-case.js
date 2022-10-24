/* CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE

 */

const temperatura = 30
switch (temperatura) {
    case (30): 
        console.log('A pessoa esta com a temperatura muito abaixo do normal')
        break; 

    case (33): 
        console.log('a pessoa esta com a temperatura a baixo do normal')
        break; 

        case (36): 
        console.log('a pessoa esta com a temperatura normal')
        break; 
    default:
        console.log('temperatura nao encontrada')
        break;
}