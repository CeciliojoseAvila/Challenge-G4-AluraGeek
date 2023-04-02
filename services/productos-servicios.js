const url = "https://6420737f25cb65721049b71a.mockapi.io/api/alura-geek/productos";
//GET

async function listaProductos() {

    return await fetch(url)
        .then(respuesta => respuesta.json());
}

async function crearProducto(nombre, precio, imagen, categoria, link) {

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            imagen,
            categoria,
            link
        })
    })
}

async function eliminarProducto(nombre, precio, imagen, categoria, link) {
    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            imagen,
            categoria,
            link
        })
    })
}
 
async function actualizarProducto (nombre, precio, imagen, categoria, link) {
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, imagen, categoria, link}),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};


export const productosServicios = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    actualizarProducto

}