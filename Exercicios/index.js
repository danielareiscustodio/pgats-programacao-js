/**
 * Console API
 */

console.log("Aula 1")
console.error("Erro na execucao")
console.warn("Atencao")
console.table([{
    nome: 'Dani',
    turma: '1',
    disciplina: 'Prog JS'
},
{
    nome: 'Teste',
    turma: '10',
    disciplina: 'Prog JSS'
}])

/**
 * Constantes e variaveis
 */

// const - para informacoes que nunca mudam
// var ou let - para informacoes que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'SDR / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informaoces que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let cadastrado = false
let tamanho = 'M'

/**
 * Tipos de dados: cadeia, inteiro, real, logico, vetor, matriz
 * cadeia = string
 * inteiro/real = number
 * logico = boolean
 * vetor/matriz = array
 * 
 * undefined - valor que ainda nao foi definido
 * null - valor definido e é definido como nulo
 * 
 * BigInt - igual int para numeros muito grande (casas de milhao por ex)
 * symbol - identificador unico
 */

/**
 * é possivel declarar entre aspas simples ou simple quote (), aspas duplas ou double quote (), template strings entre crase.
 */

/**
 *Concatenaçao de strings: 
 * const turma = "2"
 * console.log("Aula 3 da turma " + turma)
 * 
 * para conseguir interpolar precisa ser usada a crase:
 * const turma = "2"
 * console.log(`Aula 3 da turma ${ turma }`)
 * 
 */

/**
 * Para contar quantidade de caracteres rodar:
 * console.log(data.lenght) (o data é a variavel que quiser ser usada)
 */

//separar string:
const nomesDeAlunos= "Daniela Rodolpho Theo Giovanna" 
const nomeDeAlunosSplit = nomesDeAlunos.split(" ")
console.log(nomeDeAlunosSplit)

//toLowerCase(minusculo) e UpperCase (maiusculo)
console.log(nomesDeAlunos.toLowerCase())
console.log(nomesDeAlunos.toUpperCase())

//includes, verifica se uma determinada string tem outra ou parte dela
console.log(nomesDeAlunos.includes("Daniela"))

//replace ou replace all - trocar uma letra por outra
console.log(nomesDeAlunos.replaceAll('a', 'i'))

//trim - tirar espaços desnecessario do final e do inicio de uma string
const conceitosLogica= "             inteiro real cadeia de caracteres...           "
console.log(conceitosLogica.trim())

//slice - recorte em uma string
let dataParaCortar = "05 de abril"
console.log(dataParaCortar.slice(0,4))

//charAt serve para pegar a letra da posiçao que é solicitada por ex: charAt(4), letra na posiçao 4 

