function mostrarFecha() {
    let fecha = new Date();

    document.getElementById("fecha").innerHTML =
        "Fecha actual: " + fecha.toLocaleDateString();
}

function datoCurioso() {
    alert("La inteligencia artificial puede reconocer patrones en imágenes, textos y sonidos.");
}

function cargarXML() {
    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let tecnologias = xml.getElementsByTagName("tecnologia");
            let contenido = "";

            for (let i = 0; i < tecnologias.length; i++) {
                let nombre = tecnologias[i].getElementsByTagName("nombre")[0].textContent;
                let descripcion = tecnologias[i].getElementsByTagName("descripcion")[0].textContent;

                contenido += "<div class='card'>";
                contenido += "<h3>" + nombre + "</h3>";
                contenido += "<p>" + descripcion + "</p>";
                contenido += "</div>";
            }

            document.getElementById("contenidoXML").innerHTML = contenido;
        });
}