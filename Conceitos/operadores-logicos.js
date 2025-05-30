/**
 * 
 * && - E ou AND
 * || - OU ou OR
 *  ! - NAO ou NOT
 */

// &&
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").lengh === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10 

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // false

// ||
const dog = {
    adotado: false,
    peso: 5.3
}
console.log(!dog.adotado || dog.peso < 10) // true

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// ! - NAO ou NOT
console.log(true) // true
console.log(!true) // false
