const bodyMensajes = document.getElementById('mensajes-body');
var claseActual = bodyMensajes.classList;
const formularioAumentar = document.getElementById('formulario-aumentar');
const formularioRestar = document.getElementById('formulario-restar');

function aumentar(event) {
    if (bodyMensajes.classList == 'font-12')
    {
        bodyMensajes.classList.remove('font-12');
        bodyMensajes.classList.add('font-14');
        claseActual = 'font-14';
        return;
    } if (bodyMensajes.classList == 'font-14')
    {
        bodyMensajes.classList.remove('font-14');
        bodyMensajes.classList.add('font-16');
        claseActual = 'font-16';
        return;
    } if (bodyMensajes.classList == 'font-16')
    {
        bodyMensajes.classList.remove('font-16');
        bodyMensajes.classList.add('font-18');
        claseActual = 'font-18';
        return;
    } if (bodyMensajes.classList == 'font-18') {
        bodyMensajes.classList.remove('font-18');
        bodyMensajes.classList.add('font-20');
        claseActual = 'font-20';
        return;
    } if (bodyMensajes.classList == 'font-20') {
        bodyMensajes.classList.remove('font-20');
        bodyMensajes.classList.add('font-22');
        claseActual = 'font-22';
        return;
    }
}

function restar(event) {
    if (bodyMensajes.classList == 'font-22')
    {
        bodyMensajes.classList.remove('font-22');
        bodyMensajes.classList.add('font-20');
        claseActual = 'font-20';
        return;
    } if (bodyMensajes.classList == 'font-20')
    {
        bodyMensajes.classList.remove('font-20');
        bodyMensajes.classList.add('font-18');
        claseActual = 'font-18';
        return;
    } if (bodyMensajes.classList == 'font-18')
    {
        bodyMensajes.classList.remove('font-18');
        bodyMensajes.classList.add('font-16');
        claseActual = 'font-16';
        return;
    } if (bodyMensajes.classList == 'font-16')
    {
        bodyMensajes.classList.remove('font-16');
        bodyMensajes.classList.add('font-14');
        claseActual = 'font-14';
        return;
    } if (bodyMensajes.classList == 'font-14')
    {
        bodyMensajes.classList.remove('font-14');
        bodyMensajes.classList.add('font-12');
        claseActual = 'font-12';
        return;
    }
}