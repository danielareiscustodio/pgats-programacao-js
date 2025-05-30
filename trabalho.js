// src/trabalho.js

// Função para gerar tags de identificação
export const geradorDeTagsDeIdentificacao = (nome) => {
    return nome.toUpperCase();
  };
  
  // Função para verificar se pode ser adotado
  export const verificarSePodeSerAdotado = (idade, porte) => {
    return idade >= 1 && (porte === 'M' || porte === 'G'); // Permite adoção para porte M e G
  };
  
  // Função para calcular o consumo de ração
  export const calcularConsumoDeRacao = (nome, idade, peso) => {
    // Exemplo de cálculo: 300 gramas para cada 10 kg
    return Math.round((peso / 10) * 3000);
  };
  
  // Função para decidir tipo de atividade por porte
  export const decidirTipoDeAtividadePorPorte = (porte) => {
    switch (porte) {
      case 'pequeno':
        return 'brincar dentro de casa';
      case 'médio':
        return 'caminhar no parque';
      case 'grande':
        return 'corrida ao ar livre';
      default:
        return 'atividade não definida';
    }
  };
  
  // Função para buscar dado de forma assíncrona
  export const buscarDadoAsync = async () => {
    // Simulando um fetch em um banco de dados ou API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Pipoca'); // Retorna 'Pipoca' após 1 segundo
      }, 1000);
    });
  };