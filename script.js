//Questão 1 - Função calcular a soma de 4 números:
// function soma(n1, n2, n3, n4){
//     return n1 + n2 + n3 + n4;
// }

//console.log('A soma dos quatro números é' + ' ' + soma(1,2,3,4))

//Questão 2 - Função média 4 números
// function media(n1, n2, n3, n4){
//     return (n1 + n2 + n3 + n4)/4;
// }

//console.log('A média dos quatro números é' + ' ' + media(1,2,3,4))

//Questão 3 - Função para chamar as duas anteriores: 
// function somaMedia(n1, n2, n3, n4){
//     // let soma = soma(n1, n2, n3, n4);
//     // let media = media(n1, n2, n3, n4);

//     console.log(`
//     Números: ${n1}, ${n2}, ${n3}, ${n4}
//     A soma dos quatro números é: ${soma(n1, n2, n3, n4)}
//     A média dos quatro números é: ${media(n1, n2, n3, n4)}`)
// }

// somaMedia(1,2,3,4)

//Questão 4 - Converter temperatura
// function toF(celsius){
//     let far = celsius*1.8+32;
//     console.log(far)
// }
// toF(30)

//Questão 5 - Média aluno
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

//Questão 6 - Função imprimir números ímpares de 100 a 200:
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

//Questão 7 - Dias da semana (Falta ajustar):
// function mostrarOrdinalDiaSemana(diaSemana) {
//     let diaAjustado = diaSemana.toLowerCase();

//     if (diaAjustado === 'segunda-feira'){
//         console.log('1º dia da semana');
//     } else if(diaAjustado === 'terça-feira'){
//         console.log('2º dia da semana');
//     }
// }
// mostrarOrdinalDiaSemana('Segunda-FEIRA')

//Questão 8 - Tabuada de 6:
// let tabuadaSeis = 6;

// console.log("Tabuada de 6:");

// for(let i = 1; i <= 10; i++){
//   let resultado = tabuadaSeis * i;
//   console.log(tabuadaSeis + " x " + i + " = " + resultado);
// }

//Questão 9:
