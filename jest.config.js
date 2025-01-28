// jest.config.js
module.exports = {
    // Usado para rodar os testes em um ambiente que simula o navegador
    testEnvironment: 'node', // Ideal para testar código backend (não usa o ambiente do navegador)
  
    // Caminho para os arquivos de teste
    testMatch: [
      '**/tests/**/*.test.js',  // Qualquer arquivo .test.js dentro da pasta tests
      '**/?(*.)+(spec|test).js', // Também vai pegar arquivos com nome contendo .spec ou .test
    ],
  
    // Usado para transformar arquivos JavaScript com Babel
    transform: {
      '^.+\\.js$': 'babel-jest', // Transforma arquivos .js utilizando o Babel
    },
  
    // Configurações do test coverage
    collectCoverage: true, // Habilita a coleta de cobertura de código
    collectCoverageFrom: [
      'src/**/*.{js,jsx}', // Inclui arquivos dentro da pasta src
      '!src/**/*.test.js',  // Exclui arquivos de teste da cobertura
    ],
    coverageDirectory: 'coverage', // Pasta onde os relatórios de cobertura serão salvos
    coverageReporters: ['text', 'lcov'], // Formatos de saída para cobertura de testes
  
    // Permite a configuração de opções de teste assíncronas
    testTimeout: 10000, // Configura o tempo máximo de execução de um teste em milissegundos
  
    // Opções adicionais para teste de módulos
    moduleFileExtensions: ['js', 'json', 'node'], // Extensões de arquivos suportadas
  };