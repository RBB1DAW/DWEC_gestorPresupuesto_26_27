

import * as gp from "./gestionPresupuesto.js";
import * as gpw from "./gestionPresupuestoWeb.js";

//Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gp.actualizarPresupuesto(1500);

//Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
gpw.mostrarDatoEnId("presupuesto", gp.mostrarPresupuesto())

//Crear los siguientes gastos (función crearGasto)
gp.anyadirGasto(gp.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida"));
gp.anyadirGasto(gp.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"));
gp.anyadirGasto(gp.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte"));
gp.anyadirGasto(gp.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"));
gp.anyadirGasto(gp.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"));
gp.anyadirGasto(gp.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros"));

// Gastos totales
gpw.mostrarDatoEnId(
    "gastos-totales",
    gp.calcularTotalGastos()
);

// Balance total
gpw.mostrarDatoEnId(
    "balance-total",
    gp.calcularBalance()
);

// Listado completo
for (const gasto of gp.listarGastos()) {
    gpw.mostrarGastoWeb("listado-gastos-completo", gasto);
}

// Filtrado 1: septiembre 2021
for (const gasto of gp.filtrarGastos({
    fechaDesde: "2021-09-01",
    fechaHasta: "2021-09-30"
})) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}

// Filtrado 2: más de 50 €
for (const gasto of gp.filtrarGastos({
    valorMinimo: 50
})) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

// Filtrado 3: más de 200 € con etiqueta seguros
for (const gasto of gp.filtrarGastos({
    valorMinimo: 200,
    etiquetasTiene: ["seguros"]
})) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}

// Filtrado 4: comida o transporte, menos de 50 €
for (const gasto of gp.filtrarGastos({
    etiquetasTiene: ["comida", "transporte"],
    valorMaximo: 50
})) {
    gpw.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

// Agrupaciones
gpw.mostrarGastosAgrupadosWeb(
    "agrupacion-dia",
    gp.agruparGastos("dia"),
    "dia"
);

gpw.mostrarGastosAgrupadosWeb(
    "agrupacion-mes",
    gp.agruparGastos("mes"),
    "mes"
);

gpw.mostrarGastosAgrupadosWeb(
    "agrupacion-anyo",
    gp.agruparGastos("anyo"),
    "anyo"
);