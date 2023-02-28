//Questão 1
// function soma(n1, n2, n3, n4){
//     return n1 + n2 + n3 + n4;
// }

//console.log('A soma dos quatro números é' + ' ' + soma(1,2,3,4))

//Questão 2
// function media(n1, n2, n3, n4){
//     return (n1 + n2 + n3 + n4)/4;
// }

//console.log('A média dos quatro números é' + ' ' + media(1,2,3,4))

//Questão 3
// function somaMedia(n1, n2, n3, n4){
//     // let soma = soma(n1, n2, n3, n4);
//     // let media = media(n1, n2, n3, n4);

//     console.log(`
//     Números: ${n1}, ${n2}, ${n3}, ${n4}
//     A soma dos quatro números é: ${soma(n1, n2, n3, n4)}
//     A média dos quatro números é: ${media(n1, n2, n3, n4)}`)
// }

// somaMedia(1,2,3,4)

//Questão 4
// function toF(celsius){
//     let far = celsius*1.8+32;
//     console.log(far)
// }
// toF(30)

//Questão 5
// function mediaAluno(nota) {
//     if (nota < 7) {
//         console.log('Recuperação')
//     } else if(nota === 7) {
//         console.log('Na média')
//     }else if(nota > 7 && nota <= 9.4) {
//         console.log('Bom aproveitamento')
//     }else if (nota > 9.4) {
//         console.log('Aceita ser monitor')
//     }
// }
// mediaAluno(9.5)

//Questão 6
// function printImpar(inicio, fim) {
//     for(let i = 100; i <= 200; i++) {
//         let resto = i % 2
//         //console.log(i)
        
//         if(resto !== 0) {
//             console.log(`Ímpar: ${i}`)
//         }
//     }
// }
// printImpar()

//Questão 7 - Falta ajustar
function mostrarOrdinalDiaSemana(diaSemana) {
    let diaAjustado = diaSemana.toLowerCase();

    if (diaAjustado === 'segunda-feira') {
        console.log('1º dia da semana');
    } else if(diaAjustado === 'terça-feira') {
        console.log('2º dia da semana');
    }
}
mostrarOrdinalDiaSemana('Segunda-FEIRA')