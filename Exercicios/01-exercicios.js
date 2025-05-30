const nome = "bidu", raca = "vira-lata"
let idade = 1, peso = `1,2kg`, adotado = false

let nomeUpperCase = nome.toUpperCase()
let racaFirstLetter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()
//let racaFirstLetter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase() - pode ser usado dessa forma tb

const animal = [{
    nome: nomeUpperCase,
    peso: peso,
    raca: racaFirstLetter
}]

console.log(animal)