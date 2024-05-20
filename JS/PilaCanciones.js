/**
 * Clase Pila de Canciones que utiliza la clase Nodo para almacenar canciones.
 */
class PilaCanciones {
    /**
     * Crea una nueva Pila de Canciones.
     */
    constructor() {
        this.cabeza = null;
        this.longitud = 0;
    }

    /**
     * Obtiene la longitud actual de la pila.
     * @returns {number} La longitud de la pila.
     */
    obtenerLongitud() {
        return this.longitud;
    }

    /**
     * Agrega una canción a la pila.
     * @param {Cancion} cancion - La canción a agregar.
     */
    apilar(cancion) {
        const nuevoNodo = new Nodo(cancion);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            nuevoNodo.establecerSiguiente(this.cabeza);
            this.cabeza = nuevoNodo;
        }
        this.longitud++;
    }

    /**
     * Elimina y devuelve la canción en la cima de la pila.
     * @returns {Cancion|null} La canción en la cima de la pila, o null si la pila está vacía.
     */
    desapilar() {
        if (!this.cabeza) {
            return null;
        }
        const cancionDesapilada = this.cabeza.obtenerValor();
        this.cabeza = this.cabeza.obtenerSiguiente();
        this.longitud--;
        return cancionDesapilada;
    }

    /**
     * Devuelve la canción en la cima de la pila sin eliminarla.
     * @returns {Cancion|null} La canción en la cima de la pila, o null si la pila está vacía.
     */
    verCima() {
        return this.cabeza ? this.cabeza.obtenerValor() : null;
    }

    /**
     * Verifica si la pila está vacía.
     * @returns {boolean} true si la pila está vacía, false si tiene elementos.
     */
    estaVacia() {
        return this.longitud === 0;
    }

    /**
     * Vacía la pila, eliminando todos los elementos.
     */
    vaciar() {
        this.cabeza = null;
        this.longitud = 0;
    }

    /**
     * Representa la pila como una cadena de texto.
     * @returns {string} La representación de la pila como texto.
     */
    toString() {
        let resultado = 'Pila de Canciones:\n';
        let actual = this.cabeza;
        while (actual) {
            resultado += `${actual.obtenerValor().getNombre()} -> `;
            actual = actual.obtenerSiguiente();
        }
        resultado += 'null';
        return resultado;
    }
}

// Exportar la clase PilaCanciones para ser utilizada en otros archivos
export default PilaCanciones;
