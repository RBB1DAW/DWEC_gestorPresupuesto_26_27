function mostrarDatoEnId(idElemento, valor){
    document.getElementById(idElemento).textContent = valor
}

function mostrarGastoWeb(idElemento, gasto){
    let divGasto = document.createElement("div");
    divGasto.className = "gasto";
    document.getElementById(idElemento).append(divGasto);

    let divGastoDescripcion = document.createElement('div');
    divGastoDescripcion.className = "gasto-descripcion"
    divGastoDescripcion.textContent = gasto.descripcion
    divGasto.append(divGastoDescripcion)

    let divGastoFecha = document.createElement("div");
    divGastoFecha.className = "gasto-fecha";
    divGastoFecha.textContent = gasto.divGastoFecha
    divGasto.append(divGastoFecha)

    let divGastoValor = document.createElement("div");
    divGastoValor.className = "gasto-valor";
    divGastoValor.textContent = gasto.valor;
    divGasto.append(divGastoValor)

    let divGastoEtiquetas = document.createElement("div")
    divGastoEtiquetas.className = "gasto-etiquetas";
    divGasto.append(divGastoEtiquetas);

    array.forEach(gasto => {
        let spanEtiquetas = document.createElement("span");
        spanEtiquetas.className = "gasto-etiquetas-etiqueta";
        spanEtiquetas.textcontent = gasto.etiqueta
        divGastoEtiquetas.append(spanEtiquetas)
    })

}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
    let contenedor = document.getElementById(idElemento);

    let divAgrupacion = document.createElement("div");
    divAgrupacion.classList.add("agrupacion");

    let h1Titulo = document.createElement("h1");
    h1Titulo.textContent = "Gastos agrupados por PERIODO";
    divAgrupacion.append(h1Titulo)

    for (let [clave, valor] of Object.entries(agrup)) {
        let divDato = document.createElement("div");
        divDato.classList.add("agrupacion-dato");

        let spanClave = document.createElement("span");
        spanClave.classList.add("agrupacion-dato-clave");
        spanClave.textContent = clave
        divDato.append(spanClave);

        let spanValor = document.createElement("span");
        spanValor.classList.add("agrupacion-dato-valor");
        divDato.append(spanValor);
    }

    contenedor.append(divAgrupacion);

}