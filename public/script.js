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





