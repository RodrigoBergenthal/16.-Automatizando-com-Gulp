function somar(a, b) {
    return a + b;
}

function diminuir(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error('div v');
    }
}

module.exports = {
    somar,
    diminuir,
    multiplicar,
    dividir
};