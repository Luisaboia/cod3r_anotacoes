const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Todos os alunos são bolsistas?
function todosAlunosBolsistas(){
    const todosBolsistas = (resultado, bolsista) => resultado && bolsista
    bolsista = alunos.map(a => a.bolsista).reduce(todosBolsistas)
    if (bolsista === true){
        return bolsista = '\nR: Sim, todos os alunos são bolsistas!'
    } else {
        return bolsista = '\nR: Não, nem todos os alunos são bolsistas...'
    }
}

// Algum aluno é bolsista?
function algumAlunoBolsista(){
    const algumBolsista = (resultado, bolsista) => resultado || bolsista
    bolsista = alunos.map(a => a.bolsista).reduce(algumBolsista)
    if (bolsista === true){
        return bolsista = '\nR: Possui bolsista sim!'
    } else {
        return bolsista = '\nR: Não, não possui nenhum bolsista...'
    }
}

console.log(`Todos os alunos são bolsistas? ${todosAlunosBolsistas()}`)
console.log(`##########`)
console.log(`Porém, existe algum aluno bolsista? ${algumAlunoBolsista()}`)