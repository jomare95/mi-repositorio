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
function enviarFormulario(event) {
    // Evita el comportamiento predeterminado del formulario
    event.preventDefault();

    // Obtén los datos del formulario
    const formData = new FormData(document.getElementById('miFormulario'));

    // Realiza una solicitud AJAX usando fetch
    fetch('https://formspree.io/f/mknllebz', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Muestra una ventana de confirmación personalizada
        alert("¡Formulario enviado con éxito!");

        // Puedes agregar más lógica aquí según la respuesta de la solicitud
        console.log(data);
    })
    .catch(error => {
        // Maneja errores de la solicitud
        console.error('Error:', error);
    });
}

// Obtiene el formulario y agrega un event listener para el evento submit
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', enviarFormulario);
