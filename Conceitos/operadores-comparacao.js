/**
 *  > - maior que
 *  < - menor que
 *  >= - maior ou igual que
 *  <= - menor ou igual que
 *  == - igualdade somente de valores
 *  === - igualdade de valores e tipos de dados
 *  != - diferença somente entre valores
 */

console.log(10 > 5) //ira retornar true
console.log(`10 > 5 = ${ 10 > 5 }`) //ira retornar true

console.log(10 < 20) // ira retornar verdadeiro

// menor ou igual
console.log(10 <= 10) // true
console.log(10 <= 9) // false

// igualdade somente de valores
console.log(1 == '1') 
console.log(true == '1') // true
console.log(false == '1') // false

// igualdade de tipos de valores e tipos de dados
console.log(1 == '1') 
console.log(true == '1') // false
console.log(false == '1') // false


console.log(null == undefined) // true
console.log('' == 0) // verdadeiro

// diferença de valores
console.log(1 != '2') // true
console.log(1 !== '2') // true

