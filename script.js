function mostrarFecha() {
    let fecha = new Date();

    document.getElementById("fecha").innerHTML =
        "Fecha actual: " + fecha.toLocaleDateString();
}

function datoCurioso() {
    alert("La inteligencia artificial puede reconocer patrones en textos, imágenes y sonidos.");
}

function mostrarInfoHardware(componente) {
    let info = "";

    if (componente === "cpu") {
        info = "La CPU es el cerebro de la computadora. Ejecuta instrucciones y procesa datos.";
    } else if (componente === "ram") {
        info = "La memoria RAM guarda datos temporales mientras los programas están en uso.";
    } else if (componente === "ssd") {
        info = "El SSD almacena archivos y programas de forma rápida y permanente.";
    } else if (componente === "gpu") {
        info = "La GPU procesa gráficos, videos y tareas relacionadas con inteligencia artificial.";
    } else if (componente === "motherboard") {
        info = "La tarjeta madre conecta todos los componentes de la computadora.";
    }

    document.getElementById("infoHardware").innerHTML = info;
}

function crearTarjeta(nombre, descripcion) {
    return `
        <div class="card">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}

function cargarTecnologias() {
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

                contenido += crearTarjeta(nombre, descripcion);
            }

            document.getElementById("contenidoXML").innerHTML = contenido;
        });
}

function filtrarTecnologias() {
    let textoFiltro = document.getElementById("filtro").value.toLowerCase();

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

                if (nombre.toLowerCase().includes(textoFiltro)) {
                    contenido += crearTarjeta(nombre, descripcion);
                }
            }

            if (contenido === "") {
                contenido = "<p>No se encontraron resultados.</p>";
            }

            document.getElementById("contenidoXML").innerHTML = contenido;
        });
}

function validarUsuario() {
    let usuarioIngresado = document.getElementById("usuario").value;
    let passwordIngresado = document.getElementById("password").value;

    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let usuarios = xml.getElementsByTagName("usuario");
            let valido = false;

            for (let i = 0; i < usuarios.length; i++) {
                let nombre = usuarios[i].getElementsByTagName("nombre")[0].textContent;
                let clave = usuarios[i].getElementsByTagName("clave")[0].textContent;

                if (usuarioIngresado === nombre && passwordIngresado === clave) {
                    valido = true;
                }
            }

            if (valido) {
                document.getElementById("mensajeLogin").innerHTML = "Usuario válido.";
            } else {
                document.getElementById("mensajeLogin").innerHTML = "Usuario o contraseña incorrectos.";
            }
        });
}

function crearTarjetaAplicacion(area, descripcion) {
    return `
        <div class="card">
            <h3>${area}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}

function cargarAplicaciones() {
    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let aplicaciones = xml.getElementsByTagName("aplicacion");
            let contenido = "";

            for (let i = 0; i < aplicaciones.length; i++) {
                let area = aplicaciones[i].getElementsByTagName("area")[0].textContent;
                let descripcion = aplicaciones[i].getElementsByTagName("descripcion")[0].textContent;

                contenido += crearTarjetaAplicacion(area, descripcion);
            }

            document.getElementById("contenidoAplicaciones").innerHTML = contenido;
        });
}

function filtrarAplicaciones() {
    let textoFiltro = document.getElementById("filtroAplicaciones").value.toLowerCase();

    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let aplicaciones = xml.getElementsByTagName("aplicacion");
            let contenido = "";

            for (let i = 0; i < aplicaciones.length; i++) {
                let area = aplicaciones[i].getElementsByTagName("area")[0].textContent;
                let descripcion = aplicaciones[i].getElementsByTagName("descripcion")[0].textContent;

                if (area.toLowerCase().includes(textoFiltro)) {
                    contenido += crearTarjetaAplicacion(area, descripcion);
                }
            }

            if (contenido === "") {
                contenido = "<p>No se encontraron aplicaciones.</p>";
            }

            document.getElementById("contenidoAplicaciones").innerHTML = contenido;
        });
}

function votar() {
    let opcion = document.getElementById("opcion").value;

    document.getElementById("resultadoEncuesta").innerHTML =
        "Elegiste: " + opcion + ". Gracias por participar.";
}

function crearTarjetaAmenaza(nombre, descripcion) {
    return `
        <div class="card">
            <h3>${nombre}</h3>
            <p>${descripcion}</p>
        </div>
    `;
}

function cargarAmenazas() {
    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let amenazas = xml.getElementsByTagName("amenaza");
            let contenido = "";

            for (let i = 0; i < amenazas.length; i++) {
                let nombre = amenazas[i].getElementsByTagName("nombre")[0].textContent;
                let descripcion = amenazas[i].getElementsByTagName("descripcion")[0].textContent;

                contenido += crearTarjetaAmenaza(nombre, descripcion);
            }

            document.getElementById("contenidoAmenazas").innerHTML = contenido;
        });
}

function filtrarAmenazas() {
    let textoFiltro = document.getElementById("filtroAmenazas").value.toLowerCase();

    fetch("datos.xml")
        .then(respuesta => respuesta.text())
        .then(datos => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(datos, "text/xml");

            let amenazas = xml.getElementsByTagName("amenaza");
            let contenido = "";

            for (let i = 0; i < amenazas.length; i++) {
                let nombre = amenazas[i].getElementsByTagName("nombre")[0].textContent;
                let descripcion = amenazas[i].getElementsByTagName("descripcion")[0].textContent;

                if (nombre.toLowerCase().includes(textoFiltro)) {
                    contenido += crearTarjetaAmenaza(nombre, descripcion);
                }
            }

            if (contenido === "") {
                contenido = "<p>No se encontraron amenazas.</p>";
            }

            document.getElementById("contenidoAmenazas").innerHTML = contenido;
        });
}