import Nodo from './Nodo.js';
import Cancion from './Cancion.js';

class ListaCanciones {
    constructor() {
        this.cabeza = null;
    }

    /**
     * Inserta una canción al final de la lista.
     * @param {Cancion} cancion - La canción a insertar.
     */
    insertar(cancion) {
        const nuevoNodo = new Nodo(cancion);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let nodoActual = this.cabeza;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
        }
    }

    /**
     * Edita una canción en la lista.
     * @param {Cancion} nuevaCancion - La nueva canción.
     * @param {Cancion} antiguaCancion - La canción antigua a editar.
     */
    editar(nuevaCancion, antiguaCancion) {
        let nodoActual = this.cabeza;
        while (nodoActual) {
            if (nodoActual.valor === antiguaCancion) {
                nodoActual.valor = nuevaCancion;
                return true;
            }
            nodoActual = nodoActual.siguiente;
        }
        return false; // No se encontró la cancion 
    }

    /**
     * Elimina una canción de la lista.
     * @param {Cancion} cancion - La canción a eliminar.
     */
    eliminar(cancion) {
        if (!this.cabeza) {
            return;
        }
        if (this.cabeza.valor === cancion) {
            this.cabeza = this.cabeza.siguiente;
            return;
        }
        let nodoActual = this.cabeza;
        while (nodoActual.siguiente) {
            if (nodoActual.siguiente.valor === cancion) {
                nodoActual.siguiente = nodoActual.siguiente.siguiente;
                return;
            }
            nodoActual = nodoActual.siguiente;
        }
    }
}

// Exporta la clase como un módulo
export default ListaCanciones;
