document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); //evitamos el envío del formulario sin validar

        const nombre = form.elements["nombre"].value.trim(); //si se ingresaron espacios en blanco al principio o final de lo que ingreso el usuario se eliminan, así si solo se pusieron espacios, saltara la alerta de que esta vacio
        const email = form.elements["email"].value.trim();
        const mensaje = form.elements["mensaje"].value.trim();

        // Expresión regular para validar el formato del correo electrónico
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Verifica que no haya campos vacíos
        if (nombre === "") {
            alert("Por favor, ingrese su nombre");
            return;
        }
        if (email === "") {
            alert("Por favor, ingrese su dirección de correo electrónico");
            return;
        }
        if (!emailReg.test(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida");
            return;
        }
        if (mensaje === "") {
            alert("Por favor, escriba el mensaje que desea enviar");
            return;
        }
        // Si todo es válido, envía el formulario
        form.submit();
    });
});