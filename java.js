document.querySelector(".formulario").addEventListener("submit", function(event){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre === "" || email === ""){
        alert("PORFAVOR COMPLETA TODOS LOS CAMPOS");
        event.preventDefault();
    }
    alert("El formulario se envio correctamente ✅")
});

function volver(){
    document.getElementById("inicio").scrollIntoView({behavior:"smooth"});
}

function fecha() {

    function actualizarFechayHora() {
        const hoy = new Date();

        const opciones = {
            weekday: 'long',
            year: 'numeric',
            day: 'numeric',
            month: 'long'
        };

        const fechaDeHoy = hoy.toLocaleDateString('es-ES', opciones);

        // OPCIÓN 1: manual con padStart
        let horas = hoy.getHours().toString().padStart(2, '0');
        let min = hoy.getMinutes().toString().padStart(2, '0');
        let seg = hoy.getSeconds().toString().padStart(2, '0');
        const horaManual = `${horas}:${min}:${seg}`;

        // OPCIÓN 2: automática con toLocaleTimeString
        const horaActual = hoy.toLocaleTimeString('es-ES', { hour12: false });

        const dia_actual = document.getElementById('fecha-actual');
        
        // Podés elegir cuál mostrar
        dia_actual.textContent = `${fechaDeHoy} - ${horaActual}`;
        // o: dia_actual.textContent = `${fechaDeHoy} - ${horaManual}`;
    }

    // Actualiza apenas se carga
    actualizarFechayHora();

    // Y se actualiza cada segundo
    setInterval(actualizarFechayHora, 1000);
}
