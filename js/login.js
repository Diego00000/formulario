function validar() {
    var nombre, clave;
    nombre = document.getElementById("name").value;
    clave = document.getElementById("passw").value;

    expresionNombre = /^[a-zA-Z]+$/;
    expresionPass= /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})/;
    
    if (nombre ==="" || clave==="") {
        alert("todos los campos son obligatorios")
        return false;
    }
    else if (!expresionNombre.set(nombre)) {
        alert ("El Nombre es incorrecto, verifique que no este ingresando numeros o caracteres ilegales o que no incluya Mayusculas");
        return false;
    }
}