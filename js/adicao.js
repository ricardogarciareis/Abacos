limpar();

function gerarParcela1() {
    const minParcela1 = Math.ceil(document.getElementById("minParcela1").value);
    const maxParcela1 = Math.floor(document.getElementById("maxParcela1").value);
    var parcela1 = Math.floor(Math.random() * (maxParcela1 - minParcela1 + 1) + minParcela1);
    document.getElementById("parcela1").value = parcela1;
    var dezenasParcela1 = Math.floor(parcela1 / 10);
    var unidadesParcela1 = parcela1 - 10 * dezenasParcela1;
    if (dezenasParcela1 == 0)
        document.getElementById("dezenasParcela1").innerText = ""
    else
        document.getElementById("dezenasParcela1").innerText = dezenasParcela1;
    document.getElementById("unidadesParcela1").innerText = unidadesParcela1;
    limparResultado();
}

function gerarParcela2() {
    const minParcela2 = Math.ceil(document.getElementById("minParcela2").value);
    const maxParcela2 = Math.floor(document.getElementById("maxParcela2").value);
    var parcela2 = Math.floor(Math.random() * (maxParcela2 - minParcela2 + 1) + minParcela2);
    document.getElementById("parcela2").value = parcela2;
    var dezenasParcela2 = Math.floor(parcela2 / 10);
    var unidadesParcela2 = parcela2 - 10 * dezenasParcela2;
    if (dezenasParcela2 == 0) {
        document.getElementById("dezenasParcela2").innerText = "+";
        document.getElementById("vazioParcela2").innerText = "";
    } else {
        document.getElementById("dezenasParcela2").innerText = dezenasParcela2;
        document.getElementById("vazioParcela2").innerText = "+";
    } 
    document.getElementById("unidadesParcela2").innerText = unidadesParcela2;
    limparResultado();
}

function calcular() {
    const parcela1_ = document.getElementById("parcela1").value;
    var dezenasParcela1 = Math.floor(parcela1_ / 10);
    var unidadesParcela1 = parcela1_ - 10 * dezenasParcela1;
    if (dezenasParcela1 == 0)
        document.getElementById("dezenasParcela1").innerText = "";
    else
        document.getElementById("dezenasParcela1").innerText = dezenasParcela1;
    document.getElementById("unidadesParcela1").innerText = unidadesParcela1;

    const parcela2_ = document.getElementById("parcela2").value;
    var dezenasParcela2 = Math.floor(parcela2_ / 10);
    var unidadesParcela2 = parcela2_ - 10 * dezenasParcela2;
    if (dezenasParcela2 == 0) {
        document.getElementById("dezenasParcela2").innerText = "+";
        document.getElementById("vazioParcela2").innerText = "";
    } else {
        document.getElementById("dezenasParcela2").innerText = dezenasParcela2;
        document.getElementById("vazioParcela2").innerText = "+";
    } 
    document.getElementById("unidadesParcela2").innerText = unidadesParcela2;

    const parcela1 = Math.ceil(document.getElementById("parcela1").value);
    const parcela2 = Math.ceil(document.getElementById("parcela2").value);
    var resultado = parcela1 + parcela2;
    var centenasResultado = Math.floor(resultado / 100);
    if (centenasResultado > 0)
        var dezenasResultado = Math.floor((resultado - centenasResultado*100) / 10);
    else
        var dezenasResultado = Math.floor(resultado / 10);
    var unidadesResultado = resultado - centenasResultado * 100 - dezenasResultado * 10;
    
    if (centenasResultado > 0)
        document.getElementById("centenasResultado").innerText = centenasResultado;
    else
        document.getElementById("centenasResultado").innerText = "";
    
    if (dezenasResultado > 0)
        document.getElementById("dezenasResultado").innerText = dezenasResultado;
    else
    document.getElementById("dezenasResultado").innerText = "";

    document.getElementById("unidadesResultado").innerText = unidadesResultado;
}

function limparResultado() {
    document.getElementById("centenasResultado").innerText = "";
    document.getElementById("dezenasResultado").innerText = "";
    document.getElementById("unidadesResultado").innerText = "";
}

function preencherParcela1() {
    limparResultado();
    const parcela1_ = document.getElementById("parcela1").value;
    var dezenasParcela1 = Math.floor(parcela1_ / 10);
    var unidadesParcela1 = parcela1_ - 10 * dezenasParcela1;
    if (dezenasParcela1 == 0)
        document.getElementById("dezenasParcela1").innerText = "";
    else
        document.getElementById("dezenasParcela1").innerText = dezenasParcela1;
    document.getElementById("unidadesParcela1").innerText = unidadesParcela1;
}

function preencherParcela2() {
    limparResultado();
    const parcela2_ = document.getElementById("parcela2").value;
    var dezenasParcela2 = Math.floor(parcela2_ / 10);
    var unidadesParcela2 = parcela2_ - 10 * dezenasParcela2;
    if (dezenasParcela2 == 0) {
        document.getElementById("dezenasParcela2").innerText = "+";
        document.getElementById("vazioParcela2").innerText = "";
    } else {
        document.getElementById("dezenasParcela2").innerText = dezenasParcela2;
        document.getElementById("vazioParcela2").innerText = "+";
    }
    document.getElementById("unidadesParcela2").innerText = unidadesParcela2;
}

function avaliarLimites() {
    const minParcela1 = Math.ceil(document.getElementById("minParcela1").value);
    const maxParcela1 = Math.floor(document.getElementById("maxParcela1").value);
    if (minParcela1 < 0)
        document.getElementById("minParcela1").value = 0;
    else if (minParcela1 > maxParcela1)
        document.getElementById("minParcela1").value = maxParcela1;
    if (maxParcela1 > 99)
        document.getElementById("maxParcela1").value = 99;

    const parcela1 = document.getElementById("parcela1").value;
    if (parcela1 < 0)
        document.getElementById("parcela1").value = 0;
    else if (parcela1 > 99)
        document.getElementById("parcela1").value = 99;

    const minParcela2 = Math.ceil(document.getElementById("minParcela2").value);
    const maxParcela2 = Math.floor(document.getElementById("maxParcela2").value);
    if (minParcela2 < 0)
        document.getElementById("minParcela2").value = 0;
    else if (minParcela2 > maxParcela2)
        document.getElementById("minParcela2").value = maxParcela2;
    if (maxParcela2 > 99)
        document.getElementById("maxParcela2").value = 99;

    const parcela2 = document.getElementById("parcela2").value;
    if (parcela2 < 0)
        document.getElementById("parcela2").value = 0;
    else if (parcela2 > 99)
        document.getElementById("parcela2").value = 99;
}

function limpar() {
    document.getElementById("minParcela1").value = 0;
    document.getElementById("maxParcela1").value = 99;
    document.getElementById("parcela1").value = 0;
    document.getElementById("minParcela2").value = 0;
    document.getElementById("maxParcela2").value = 99;
    document.getElementById("parcela2").value = 0;
    document.getElementById("unidadesParcela1").innerText = 0;
    document.getElementById("unidadesParcela2").innerText = 0;
    document.getElementById("dezenasParcela2").innerText = "+";
}