function filtrarInteiros(lista) {
    //método para criar uma nova lista
    return lista.filter(function(item) {
        return typeof item === 'number'; // Verifica se é um número
    });
}

const listaOriginal = [1, 'dani', 2, 'theo', 3];
const listaFiltrada = filtrarInteiros(listaOriginal);
console.log(listaFiltrada);