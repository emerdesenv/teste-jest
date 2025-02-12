function soma(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Os parâmetros devem ser números");
    }

    return a + b;
}

function imposto(valor) {
    if(valor > 100) {
        return valor * 0.10;
    } else {
        return valor * 0.05;
    }
}

module.exports = { soma, imposto };