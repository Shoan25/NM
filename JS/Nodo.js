/**
 * Clase Nodo para almacenar un valor genérico y referencias al nodo siguiente y anterior.
 */
class Nodo {
    /**
     * Crea un nuevo nodo con el valor especificado.
     * @param {*} valor - El valor que se almacenará en el nodo.
     */
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }

    /**
     * Obtiene el nodo siguiente.
     * @returns {Nodo|null} El nodo siguiente o null si no hay siguiente.
     */
    obtenerSiguiente() {
        return this.siguiente;
    }

    /**
     * Obtiene el nodo anterior.
     * @returns {Nodo|null} El nodo anterior o null si no hay anterior.
     */
    obtenerAnterior() {
        return this.anterior;
    }

    /**
     * Obtiene el valor almacenado en el nodo.
     * @returns {*} El valor almacenado en el nodo.
     */
    obtenerValor() {
        return this.valor;
    }

    /**
     * Establece el nodo siguiente.
     * @param {Nodo|null} nodo - El nodo que se establecerá como siguiente.
     */
    establecerSiguiente(nodo) {
        this.siguiente = nodo;
    }

    /**
     * Establece el nodo anterior.
     * @param {Nodo|null} nodo - El nodo que se establecerá como anterior.
     */
    establecerAnterior(nodo) {
        this.anterior = nodo;
    }

    /**
     * Representa el nodo como una cadena de texto.
     * @returns {string} La representación del nodo como texto.
     */
    toString() {
        return `Valor: ${this.valor}`;
    }
}

// Exportar la clase Nodo para ser utilizada en otras clases
export default Nodo;
