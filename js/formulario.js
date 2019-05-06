function validar() {
    var nombre, clave,telefono,email, fechaNacimiento,expresionNombre, expresionCorreo, expresionPass, dia, mes, anio,  opciones;
    nombre = document.getElementById("Usuario").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;
    fechaNacimiento = document.getElementById("fechaNa").value;
    email = document.getElementById("correo").value;
    
    expresionCorreo =/\w+@\w+\.+[a-z]/;
    expresionNombre = /^[a-zA-Z]+$/;
    expresionPass= /^(?=(?:.*\d){2})(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})/;
    
    if (nombre ==="" || clave ==="" || email ==="" ||Arte==="" ) {
        alert ("todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length<8) {
        alert (" usuario minimo 8 caracteres");
        return false;
    }
    else if (!expresionNombre.test(nombre)) {
        alert ("El Nombre es incorrecto, verifique que no este ingresando numeros o caracteres ilegales o que no incluya Mayusculas");
        return false;
    }
    else if (clave.length<6) {
        alert (" contraseña minimo 6 caracteres");
        return false;
    }
    else if (expresionPass.test(clave)) {
        alert (" Verifique que la contraseña cumpla con las siguientes condiciones como:\n tener como minimo 8 caracteres\n ademas debe incluir numeros y letras mayusculas y minusculas");
        return false;
    }
    else if (!expresionCorreo.test(email)) {
        alert (" correo no valido");
        return false;
    }

    else if (isNaN(telefono)) {
        alert ("telefono: solo valores numericos");
        return false;
    }    
    else if (telefono.length<10) {
        alert ("telefono minimo 10 caracteres numericos");
        return false;
        }
    }
    

    

