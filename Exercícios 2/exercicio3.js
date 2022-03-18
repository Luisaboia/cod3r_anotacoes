// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.

function wage(n ,h, m){
    return `O funcionário ${n} trabalhou ${h} horas e recebeu R$${(h * m).toFixed(2)} no total.`
}

console.log(wage('Luis', 150, 40.5))