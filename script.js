let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        
        habilidades[2].classList.add("comunicacion");
        habilidades[3].classList.add("trabajo");
        habilidades[4].classList.add("creatividad");
        habilidades[5].classList.add("dedicacion");
        
    }
}
function resaltarCuadros() {
    // Obtén todos los elementos con la clase "item"
    var cuadros = document.querySelectorAll('.item');

    // Itera sobre cada cuadro y agrega la clase "resaltado"
    cuadros.forEach(function(cuadro) {
        cuadro.classList.add('resaltado');
    });
}

// Llama a la función cuando la página se carga
window.onload = resaltarCuadros;
function resaltarYAgrandarCuadros() {
    // Obtén todos los elementos con la clase "item"
    var cuadros = document.querySelectorAll('.item');

    // Itera sobre cada cuadro
    cuadros.forEach(function(cuadro) {
        // Agrega la clase "resaltado" al pasar el cursor por encima
        cuadro.addEventListener('mouseenter', function() {
            cuadro.classList.add('resaltado');
        });

        // Remueve la clase "resaltado" al salir del cuadro con el cursor
        cuadro.addEventListener('mouseleave', function() {
            cuadro.classList.remove('resaltado');
        });

        // Agrandar el cuadro al pasar el cursor por encima
        cuadro.addEventListener('mouseenter', function() {
            cuadro.classList.add('agrandado');
        });

        // Restaurar el tamaño original al salir del cuadro con el cursor
        cuadro.addEventListener('mouseleave', function() {
            cuadro.classList.remove('agrandado');
        });
    });
}

// Llama a la función cuando la página se carga
window.onload = resaltarYAgrandarCuadros;


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
function guardarConsulta() {
    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        console.error("Todos los campos deben ser completados");
        return;
    }

    // Crear objeto JSON con la consulta
    var consulta = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    // Convertir a JSON
    try {
        var consultaJSON = JSON.stringify(consulta);
        console.log("Consulta JSON:", consultaJSON);
    } catch (error) {
        console.error("Error al convertir la consulta a JSON:", error);
        return;
    }

    // Aquí puedes realizar la lógica para enviar o guardar el JSON según tus necesidades
    console.log("Consulta JSON:", consultaJSON);

    // Puedes agregar lógica adicional, como enviar el JSON a un servidor, almacenarlo en localStorage, etc.
    var serverURL = "https://tu-servidor.com/guardar-consulta";

    // Realizar solicitud POST al servidor
    fetch(serverURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: consultaJSON,
    })
    .then(response => response.json())
    .then(data => console.log("Respuesta del servidor:", data))
    .catch(error => console.error("Error al enviar la consulta al servidor:", error));

    // Puedes agregar más lógica aquí, como almacenar el JSON localmente, etc.
}



