function contarVogais(texto) {
    const vogais = 'aeiou'; // Definindo as vogais
    let contador = 0; // Inicializando o contador

    // Iterando sobre cada caractere da string
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) { // Verifica se o caractere é uma vogal
            contador++; // Incrementando o contador
        }
    }

    return contador; // Retorna o número de vogais
}

const textoVogais = 'Kata';
const numeroDeVogais = contarVogais(textoVogais);
console.log(numeroDeVogais);