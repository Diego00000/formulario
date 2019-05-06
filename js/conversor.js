function calcular() {
    var peso = (document.Convertidor.pesos.value)*1;
    if (peso ===0) {
        alert ("por favor ingrese el valor a convertir");
        return false;
    }
    else{

    
    var total = peso*3200;
    total = total.toFixed(2);
    document.Convertidor.dolar.value = total;
}
    
}