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

const $form = document.querySelector('$form');

form.addEventListener('submit', handlesubmit);

 async function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.acction, {
        method: this.method,
        body: form,
        headers:{
            'accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()

        alert('gracias por contactarme, te voy a responder pronto :)')
    } 
}    

