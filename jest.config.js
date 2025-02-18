module.exports = {
    reporters: [
    'default',
        [
            'jest-html-reporter',
            {
                pageTitle: 'Relatório de Testes',
                outputPath: './relatorio.html',
                includeFailureMsg: true
            },
        ],
    ],
};