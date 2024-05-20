import Nodo from "./Nodo.js";
import Album from "./Album.js";

/**
 * Clase que representa una lista de álbumes.
 */
class ListaAlbumes {
    /**
     * Constructor de la clase ListaAlbumes.
     * @param {Nodo} cabeza - El primer nodo de la lista de álbumes.
     */
    constructor(cabeza = null) {
        this.cabeza = cabeza;
    }

    /**
     * Agrega un álbum al inicio de la lista.
     * @param {Album} album - El álbum a agregar.
     */
    agregarAlbumInicio(album) {
        const nuevoNodo = new Nodo(album);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
    }

    /**
     * Agrega un álbum al final de la lista.
     * @param {Album} album - El álbum a agregar.
     */
    agregarAlbumFinal(album) {
        const nuevoNodo = new Nodo(album);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    /**
     * Elimina un álbum de la lista por su ID.
     * @param {number} idAlbum - El ID del álbum a eliminar.
     * @returns {boolean} true si se elimina correctamente, false si no se encuentra el álbum.
     */
    eliminarAlbumPorId(idAlbum) {
        let actual = this.cabeza;
        let anterior = null;

        while (actual !== null) {
            if (actual.valor.getId() === idAlbum) {
                if (anterior === null) {
                    this.cabeza = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                }
                return true;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return false; // No se encontró el álbum con el ID dado
    }

    /**
     * Elimina un álbum de la lista por su nombre.
     * @param {string} nombreAlbum - El nombre del álbum a eliminar.
     * @returns {boolean} true si se elimina correctamente, false si no se encuentra el álbum.
     */
    eliminarAlbumPorNombre(nombreAlbum) {
        let actual = this.cabeza;
        let anterior = null;

        while (actual !== null) {
            if (actual.valor.getNombre() === nombreAlbum) {
                if (anterior === null) {
                    this.cabeza = actual.siguiente;
                } else {
                    anterior.siguiente = actual.siguiente;
                }
                return true;
            }
            anterior = actual;
            actual = actual.siguiente;
        }
        return false; // No se encontró el álbum con el nombre dado
    }

    /**
     * Edita un álbum en la lista por su ID.
     * @param {number} idAlbum - El ID del álbum a editar.
     * @param {Album} nuevoAlbum - El nuevo álbum con los cambios.
     * @returns {boolean} true si se edita correctamente, false si no se encuentra el álbum.
     */
    editarAlbum(antiguoAlbum, nuevoAlbum) {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.valor === antiguoAlbum) {
                actual.valor = nuevoAlbum;
                return true;
            }
            actual = actual.siguiente;
        }
        return false; // No se encontró el álbum 
    }

    /**
     * Busca un álbum en la lista por su ID.
     * @param {number} idAlbum - El ID del álbum a buscar.
     * @returns {Album|null} El álbum si se encuentra, o null si no se encuentra.
     */
    buscarAlbum(idAlbum) {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.valor.getId() === idAlbum) {
                return actual.valor;
            }
            actual = actual.siguiente;
        }
        return null; // No se encontró el álbum con el ID dado
    }

    /**
     * Obtiene la cantidad de álbumes en la lista.
     * @returns {number} La cantidad de álbumes en la lista.
     */
    obtenerCantidadAlbumes() {
        let contador = 0;
        let actual = this.cabeza;

        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }
        return contador;
    }

    /**
     * Obtiene todos los álbumes en la lista como un arreglo.
     * @returns {Album[]} Un arreglo con todos los álbumes en la lista.
     */
    obtenerTodosAlbumes() {
        const albumes = [];
        let actual = this.cabeza;

        while (actual !== null) {
            albumes.push(actual.valor);
            actual = actual.siguiente;
        }
        return albumes;
    }

       /**
     * Busca un álbum en la lista por su ID.
     * @param {number} idAlbum - El ID del álbum a buscar.
     * @returns {Album|null} El álbum si se encuentra, o null si no se encuentra.
     */
       buscarAlbumPorId(idAlbum) {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.valor.getId() === idAlbum) {
                return actual.valor;
            }
            actual = actual.siguiente;
        }
        return null; // No se encontró el álbum con el ID dado
    }

    /**
     * Busca un álbum en la lista por su nombre.
     * @param {string} nombreAlbum - El nombre del álbum a buscar.
     * @returns {Album|null} El álbum si se encuentra, o null si no se encuentra.
     */
    buscarAlbumPorNombre(nombreAlbum) {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.valor.getNombre() === nombreAlbum) {
                return actual.valor;
            }
            actual = actual.siguiente;
        }
        return null; // No se encontró el álbum con el nombre dado
    }
}

// Exporta la clase como un módulo
export default ListaAlbumes;
