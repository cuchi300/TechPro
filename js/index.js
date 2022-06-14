document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})

function iniciarApp() {
    mostrarImagenes();
    scrollElementos();
    leerTexto();
}

function mostrarImagenes() {
    // imagen header animacion
    const headerImg = document.querySelector('.header img');
    headerImg.classList.add('mostrar-img');
    headerImg.style.transform = 'translateX(0)';
    headerImg.style.visibility = 'visible';
    headerImg.style.opacity = '1';
    headerImg.style.transition = 'transform 2s, visibility 2s, opacity 2s';
    
    // titulo animacion
    const tituloHeader = document.querySelector('.nombre-producto');
    tituloHeader.classList.add('mostrarTitulo');
    setTimeout(() => {
        tituloHeader.style.opacity = '1';
        tituloHeader.style.transition = 'opacity 2s';
    }, 1000);
}

function scrollElementos() {
    document.addEventListener('scroll', () => {
        const iconos = document.querySelector('.contenedor-iconos');
        const textoTech = document.querySelector('.texto-sobre-tech');
        const tituloNew = document.querySelector('.texto-newsletter h2');
        const parrafoNew = document.querySelector('.texto-newsletter p');

        if(iconos.getBoundingClientRect().top <= 300) {
            iconos.classList.add('mostrar-iconos');
            iconos.style.transform = 'translateY(0)';
            iconos.style.opacity = '1';
            iconos.style.transition = 'transform 1s, opacity 1s';
        } 
        if(textoTech.getBoundingClientRect().top < 400) {
            textoTech.classList.add('mostrar-texto');
            textoTech.style.transform = 'translateX(0)';
            textoTech.style.opacity = '1';
            textoTech.style.transition = 'transform 2s, opacity 2s';
        }
        if(tituloNew.getBoundingClientRect().top < 500) {
            tituloNew.classList.add('mostrar-titulo-new');
            tituloNew.style.opacity = '1';
            tituloNew.style.transition = 'opacity 1s';
        }
        if(parrafoNew.getBoundingClientRect().top < 600) {
            parrafoNew.classList.add('mostrar-parrafo');
            parrafoNew.style.transform = 'translateX(0)';
            parrafoNew.style.opacity = '1';
            parrafoNew.style.transition = 'transform 1s, opacity 1s';
        }
    })
}

const datos = {
    email: ''
}

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const {email} = datos;
    if(email === '') {
        mostrarError('El campo esta vacio');
        return;
    }

    mostrarMensaje('Se envio correctamente');
})

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.classList.add('mensaje-error');
    error.textContent = mensaje;
    error.style.opacity = '1';
    error.style.backgroundColor = 'red';
    error.style.padding = '1rem';
    error.style.width = '100%';
    error.style.color = '#fff';
    
    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
}

function mostrarMensaje(mensaje) {
    const correcto = document.createElement('P');
    correcto.classList.add('correcto');
    correcto.textContent = mensaje;
    correcto.style.opacity = '1';
    correcto.style.backgroundColor = 'green';
    correcto.style.padding = '1rem';
    correcto.style.width = '100%';
    correcto.style.color = '#fff';


    formulario.appendChild(correcto);

    setTimeout(() => {
        correcto.remove();
    }, 2000);
}

const email = document.querySelector('#email');
email.addEventListener('input', leerTexto)

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}