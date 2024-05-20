import Nodo from './Nodo';
import Usuario from './Usuario';

/**
 * Clase que representa un árbol AVL de usuarios.
 */
class ArbolAVLUsuarios {
    constructor() {
        this.raiz = null;
    }

    /**
     * Inserta un usuario en el árbol AVL.
     * @param {Usuario} usuario - La canción a insertar.
     */
    insertar(usuario) {
        this.raiz = this._insertar(this.raiz, usuario);
    }

    /**
     * Inserta un nodo en el árbol AVL y balancea el árbol si es necesario.
     * @param {Nodo} nodo - El nodo actual.
     * @param {Usuario} usuario - EL usuario a insertar.
     * @returns {Nodo} El nodo raíz del subárbol balanceado.
     */
    _insertar(nodo, usuario) {
        if (nodo === null) {
            return new Nodo(usuario);
        }

        if (usuario.correo.localeCompare(nodo.valor.correo) < 0) {
            nodo.establecerSiguiente(this._insertar(nodo.obtenerSiguiente(), usuario));
        } else if (usuario.correo.localeCompare(nodo.valor.correo) > 0) {
            nodo.establecerAnterior(this._insertar(nodo.obtenerAnterior(), usuario));
        } else {
            // Los usuarios con el mismo correo no se permiten en el árbol AVL.
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
     * Busca un usuario por su correo en el árbol AVL.
     * @param {string} correo - El correo del usuario a buscar.
     * @returns {Usuario|null} El usuario encontrado o null si no se encuentra.
     */
    buscar(correo) {
        return this._buscar(this.raiz, correo);
    }

    /**
     * Busca un usuario en el árbol AVL.
     * @param {Nodo} nodo - El nodo actual.
     * @param {string} correo - El correo del usuario a buscar.
     * @returns {Usuario|null} El usuario encontrado o null si no se encuentra.
     */
    _buscar(nodo, correo) {
        if (nodo === null) {
            return null;
        }

        if (correo.localeCompare(nodo.valor.correo) === 0) {
            return nodo.valor;
        }

        if (correo.localeCompare(nodo.valor.correo) < 0) {
            return this._buscar(nodo.obtenerSiguiente(), correo);
        }

        return this._buscar(nodo.obtenerAnterior(), correo);
    }

    /**
     * Edita un usuario en el árbol AVL.
     * @param {Usuario} nuevoUsuario - El nuevo usuario con los valores actualizados.
     * @param {Usuario} antiguoUsuario - El usuario existente antes de la actualización.
     */
    editar(nuevoUsuario, antiguoUsuario) {
        if (nuevoUsuario.correo !== antiguoUsuario.correo) {
            this.eliminar(antiguoUsuario.correo);
            this.insertar(nuevoUsuario);
        } else {
            const nodo = this._buscarNodo(this.raiz, antiguoUsuario.correo);
            if (nodo) {
                nodo.valor = nuevoUsuario;
            }
        }
    }

    /**
     * Elimina un usuario del árbol AVL.
     * @param {string} correo - El correo del usuario a eliminar.
     */
    eliminar(correo) {
        this.raiz = this._eliminar(this.raiz, correo);
    }

    /**
     * Elimina un nodo del árbol AVL y balancea el árbol si es necesario.
     * @param {Nodo} nodo - El nodo actual.
     * @param {string} correo - El correo del usuario a eliminar.
     * @returns {Nodo|null} El nodo raíz del subárbol balanceado o null si el árbol está vacío.
     */
    _eliminar(nodo, correo) {
        if (nodo === null) {
            return null;
        }

        if (correo.localeCompare(nodo.valor.correo) < 0) {
            nodo.establecerSiguiente(this._eliminar(nodo.obtenerSiguiente(), correo));
        } else if (correo.localeCompare(nodo.valor.correo) > 0) {
            nodo.establecerAnterior(this._eliminar(nodo.obtenerAnterior(), correo));
        } else {
            if (nodo.obtenerSiguiente() === null || nodo.obtenerAnterior() === null) {
                nodo = nodo.obtenerSiguiente() || nodo.obtenerAnterior();
            } else {
                const nodoMenor = this._obtenerNodoMinimo(nodo.obtenerSiguiente());
                nodo.valor = nodoMenor.valor;
                nodo.establecerSiguiente(this._eliminar(nodo.obtenerSiguiente(), nodoMenor.valor.correo));
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
     * Busca un nodo por el correo del usuario.
     * @param {Nodo} nodo - El nodo actual.
     * @param {string} correo - El correo del usuario a buscar.
     * @returns {Nodo|null} El nodo encontrado o null si no se encuentra.
     */
    _buscarNodo(nodo, correo) {
        if (nodo === null) {
            return null;
        }

        if (correo.localeCompare(nodo.valor.correo) === 0) {
            return nodo;
        }

        if (correo.localeCompare(nodo.valor.correo) < 0) {
            return this._buscarNodo(nodo.obtenerSiguiente(), correo);
        }

        return this._buscarNodo(nodo.obtenerAnterior(), correo);
    }
}

// Exporta la clase como un módulo
export default ArbolAVLUsuarios;
