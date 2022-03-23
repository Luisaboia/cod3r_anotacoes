const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios(url).then(response => {
    const funcionarios = response.data
    const funcionario = funcionarios.filter(funcionario => funcionario.genero == 'F' && funcionario.pais == 'China')
    const menorSalario = funcionario.reduce((menor, funcionario) => {
        return funcionario.salario < menor.salario ? funcionario : menor
    })
    console.log(menorSalario)
})