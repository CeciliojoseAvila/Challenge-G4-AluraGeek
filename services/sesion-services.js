document.addEventListener('DOMContentLoaded', () => {

    sesionActiva();
})

const btnLogin = document.querySelector('#btn-login');
const btnAgregarProducto = document.querySelector('#agregar-producto');

function sesionActiva() {

    const sesionIniciada = localStorage.getItem('autenticado');

    if (sesionIniciada) {

        btnLogin.textContent = 'Cerrar sesión';
        btnLogin.href = '';

        if (btnAgregarProducto) {
            btnAgregarProducto.textContent = 'Agregar Producto';
            btnAgregarProducto.href = './registrar-producto.html';
            btnAgregarProducto.href = "./registroExitoso.html";
            btnAgregarProducto.href = "./productos.html";
            btnAgregarProducto.classList.add('btn-azul');
        }

    } else {

        btnLogin.textContent = 'Login';
        btnLogin.href = './login.html';
         btnLogin.href = "./productos.html";

        if(btnAgregarProducto) {
            btnAgregarProducto.classList.remove('btn-azul');
        }
    }

    if (btnLogin.textContent === 'Cerrar sesión') {

        btnLogin.onclick = () => {
            localStorage.clear();
        }
    }
}