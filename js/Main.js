var boton = document.getElementById("boton");

function traer() {
    var dni = document.getElementById("dni").value;
    fetch(
        "https://apiperu.dev/api/dni/" +
        dni +
        "?api_token=500c14bbdb27fc4e8a0cdc185a4c6f8449f21a164055c7d8a35369b315ced391"
    )

        .then((res) => res.json())
        .then((data) => {
            document.getElementById("doc").value = data.data.numero;
            document.getElementById("nombre").value = data.data.nombres;
            document.getElementById("apellido").value = 
            data.data.apellido_paterno + " " + data.data.apellido_materno;
            
        });


}    
boton.addEventListener("click", traer);

