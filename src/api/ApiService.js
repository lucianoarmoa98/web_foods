import axios from "axios";

const URL_TEST = false; //false para desarrollo, true para produccion

//Url base produccion
const URL = (URL_TEST) ? "http://192.168.100.11:8080" : "http://192.168.100.32:8080";

//------------------------------------------------------------------------------servicio de login
export const postLogin = (body) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/iniciar-sesion/',
            method: 'Post',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};

//------------------------------------------------------------------------------Obtener productos
export const getProductos = (page, size) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/listar-publicacion/' + page + '/' + size,
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};

//------------------------------------------------------------------------------Obtener busqueda por categoria
export const postProductosCategoria = (body, page, size) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/buscar-por-categoria/' + page + '/' + size,
            method: 'Post',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};

//------------------------------------------------------------------------------Obtener busqueda por nombre
export const postProductosNombre = (body, page, size) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/buscar-por-nombre/' + page + '/' + size,
            method: 'Post',
            data: body,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};

//------------------------------------------------------------------------------detalle de producto
export const postDetalleProducto = (id) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/obtener-publicacion/' + id,
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};


//------------------------------------------------------------------------------detalle de producto
export const getAumentarVista = (id) => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/aumentar-visualizacion/' + id,
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};

//------------------------------------------------------------------------------detalle de producto
export const getBanners = () => {

    return new Promise((resolve, reject) => {
        axios({
            url: URL + '/api/auth/publicaciones/listar-banner/',
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data);
            })

    });
};