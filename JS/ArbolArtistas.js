import Nodo from './Nodo.js';
import Artista from './Artista.js';

/**
 * Clase que representa un árbol AVL de artistas.
 */
class ArbolAVLArtistas {
    constructor() {
        this.raiz = null;
    }

    /**
     * Inserta un artista en el árbol AVL.
     * @param {Artista} artista - El artista a insertar.
     */
    insertar(artista) {
        this.raiz = this._insertar(this.raiz, artista);
    }

    /**
     * Inserta un nodo en el árbol AVL y balancea el árbol si es necesario.
     * @param {Nodo} nodo - El nodo actual.
     * @param {Artista} artista - El artista a insertar.
     * @returns {Nodo} El nodo raíz del subárbol balanceado.
     */
    _insertar(nodo, artista) {
        if (nodo === null) {
            return new Nodo(artista);
        }

        if (artista.nombre.localeCompare(nodo.valor.nombre) < 0) {
            nodo.establecerSiguiente(this._insertar(nodo.obtenerSiguiente(), artista));
        } else if (artista.nombre.localeCompare(nodo.valor.nombre) > 0) {
            nodo.establecerAnterior(this._insertar(nodo.obtenerAnterior(), artista));
        } else {
            // Los artistas con el mismo nombre no se permiten en el árbol AVL.
            return nodo;
        }

        return this._balancear(nodo);
    }

    /**
     * Balancea el árbol AVL.
     * @param {Nodo} nodo - El nodo actual.
     * @returns {Nodo} El nodo raíz del subárbol balanceado.
     */
    _balancear(nodo) {
        const balance = this._obtenerBalance(nodo);

        // Rotaciones necesarias para balancear el árbol
        if (balance > 1) {
            if (this._obtenerBalance(nodo.obtenerSiguiente()) < 0) {
                nodo.establecerSiguiente(this._rotacionDerecha(nodo.obtenerSiguiente()));
            }
            return this._rotacionIzquierda(nodo);
        }

        if (balance < -1) {
            if (this._obtenerBalance(nodo.obtenerAnterior()) > 0) {
                nodo.establecerAnterior(this._rotacionIzquierda(nodo.obtenerAnterior()));
            }
            return this._rotacionDerecha(nodo);
        }

        return nodo;
    }

    /**
     * Realiza una rotación a la derecha.
     * @param {Nodo} nodo - El nodo actual.
     * @returns {Nodo} El nuevo nodo raíz después de la rotación.
     */
    _rotacionDerecha(nodo) {
        const nodoIzquierda = nodo.obtenerAnterior();
        nodo.establecerAnterior(nodoIzquierda.obtenerSiguiente());
        nodoIzquierda.establecerSiguiente(nodo);
        return nodoIzquierda;
    }

    /**
     * Realiza una rotación a la izquierda.
     * @param {Nodo} nodo - El nodo actual.
     * @returns {Nodo} El nuevo nodo raíz después de la rotación.
     */
    _rotacionIzquierda(nodo) {
        const nodoDerecha = nodo.obtenerSiguiente();
        nodo.establecerSiguiente(nodoDerecha.obtenerAnterior());
        nodoDerecha.establecerAnterior(nodo);
        return nodoDerecha;
    }

    /**
     * Obtiene el balance del nodo.
     * @param {Nodo} nodo - El nodo actual.
     * @returns {number} El balance del nodo.
     */
    _obtenerBalance(nodo) {
        if (nodo === null) {
            return 0;
        }
        return this._altura(nodo.obtenerSiguiente()) - this._altura(nodo.obtenerAnterior());
    }

    /**
     * Obtiene la altura del nodo.
     * @param {Nodo} nodo - El nodo actual.
     * @returns {number} La altura del nodo.
     */
    _altura(nodo) {
        if (nodo === null) {
            return 0;
        }
        return 1 + Math.max(this._altura(nodo.obtenerSiguiente()), this._altura(nodo.obtenerAnterior()));
    }

    /**
     * Busca un artista por su nombre en el árbol AVL.
     * @param {string} nombre - El nombre del artista a buscar.
     * @returns {Artista|null} El artista encontrado o null si no se encuentra.
     */
    buscar(nombre) {
        return this._buscar(this.raiz, nombre);
    }

    /**
     * Busca un artista en el árbol AVL.
     * @param {Nodo} nodo - El nodo actual.
     * @param {string} nombre - El nombre del artista a buscar.
     * @returns {Artista|null} El artista encontrado o null si no se encuentra.
     */
    _buscar(nodo, nombre) {
        if (nodo === null) {
            return null;
        }

        if (nombre.localeCompare(nodo.valor.nombre) === 0) {
            return nodo.valor;
        }

        if (nombre.localeCompare(nodo.valor.nombre) < 0) {
            return this._buscar(nodo.obtenerSiguiente(), nombre);
        }

        return this._buscar(nodo.obtenerAnterior(), nombre);
    }

    /**
     * Edita un artista en el árbol AVL.
     * @param {Artista} nuevoArtista - El nuevo artista con los valores actualizados.
     * @param {Artista} antiguoArtista - El artista existente antes de la actualización.
     */
    editar(nuevoArtista, antiguoArtista) {
        if (nuevoArtista.nombre !== antiguoArtista.nombre) {
            this.eliminar(antiguoArtista.nombre);
            this.insertar(nuevoArtista);
        } else {
            const nodo = this._buscarNodo(this.raiz, antiguoArtista.nombre);
            if (nodo) {
                nodo.valor = nuevoArtista;
            }
        }
    }

    /**
     * Elimina un artista del árbol AVL.
     * @param {string} nombre - El nombre del artista a eliminar.
     */
    eliminar(nombre) {
        this.raiz = this._eliminar(this.raiz, nombre);
    }

    /**
     * Elimina un nodo del árbol AVL y balancea el árbol si es necesario.
     * @param {Nodo} nodo - El nodo actual.
    * @param {string} nombre - El nombre del Artista a eliminar.
     * @returns {Nodo|null} El nodo raíz del subárbol balanceado o null si el árbol está vacío.
     */
    _eliminar(nodo, nombre) {
        if (nodo === null) {
            return null;
        }

        if (nombre.localeCompare(nodo.valor.nombre) < 0) {
            nodo.establecerSiguiente(this._eliminar(nodo.obtenerSiguiente(), nombre));
        } else if (nombre.localeCompare(nodo.valor.nombre) > 0) {
            nodo.establecerAnterior(this._eliminar(nodo.obtenerAnterior(), nombre));
        } else {
            if (nodo.obtenerSiguiente() === null || nodo.obtenerAnterior() === null) {
                nodo = nodo.obtenerSiguiente() || nodo.obtenerAnterior();
            } else {
                const nodoMenor = this._obtenerNodoMinimo(nodo.obtenerSiguiente());
                nodo.valor = nodoMenor.valor;
                nodo.establecerSiguiente(this._eliminar(nodo.obtenerSiguiente(), nodoMenor.valor.nombre));
            }
        }

        if (nodo === null) {
            return null;
        }

        return this._balancear(nodo);
    }

    /**
     * Obtiene el nodo con el valor mínimo en el subárbol dado.
     * @param {Nodo} nodo - El nodo raíz del subárbol.
     * @returns {Nodo} El nodo con el valor mínimo.
     */
    _obtenerNodoMinimo(nodo) {
        while (nodo.obtenerAnterior() !== null) {
            nodo = nodo.obtenerAnterior();
        }
        return nodo;
    }

    /**
     * Busca un nodo por el nombre de la canción.
     * @param {Nodo} nodo - El nodo actual.
     * @param {string} nombre - El nombre de la canción a buscar.
     * @returns {Nodo|null} El nodo encontrado o null si no se encuentra.
     */
    _buscarNodo(nodo, nombre) {
        if (nodo === null) {
            return null;
        }

        if (nombre.localeCompare(nodo.valor.nombre) === 0) {
            return nodo;
        }

        if (nombre.localeCompare(nodo.valor.nombre) < 0) {
            return this._buscarNodo(nodo.obtenerSiguiente(), nombre);
        }

        return this._buscarNodo(nodo.obtenerAnterior(), nombre);
    }
}

// Exporta la clase como un módulo
export default ArbolAVLArtistas;

