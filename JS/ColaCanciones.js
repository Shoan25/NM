/**
 * Clase ColaCanciones que representa una cola de canciones.
 * Utiliza la clase Nodo para gestionar los elementos de la cola.
 */
class ColaCanciones {
    /**
     * Crea una nueva cola de canciones vacía.
     */
    constructor() {
        this.inicio = null; // Nodo al inicio de la cola
        this.fin = null; // Nodo al final de la cola
        this.longitud = 0; // Longitud actual de la cola
    }

    /**
     * Agrega una canción al final de la cola.
     * @param {Cancion} cancion - La canción a agregar.
     */
    encolar(cancion) {
        const nuevoNodo = new Nodo(cancion); // Crear un nuevo nodo con la canción
        if (!this.inicio) {
            this.inicio = nuevoNodo; // Si la cola está vacía, el nuevo nodo es tanto el inicio como el fin
            this.fin = nuevoNodo;
        } else {
            this.fin.establecerSiguiente(nuevoNodo); // Establecer el siguiente del nodo final como el nuevo nodo
            nuevoNodo.establecerAnterior(this.fin); // Establecer el anterior del nuevo nodo como el nodo final actual
            this.fin = nuevoNodo; // Actualizar el nodo final de la cola
        }
        this.longitud++; // Incrementar la longitud de la cola
    }

    /**
     * Elimina y devuelve la canción al principio de la cola.
     * @returns {Cancion|null} La canción eliminada o null si la cola está vacía.
     */
    desencolar() {
        if (!this.inicio) {
            return null; // La cola está vacía, no hay nada que eliminar
        }
        const cancionEliminada = this.inicio.obtenerValor(); // Obtener la canción del nodo al inicio
        this.inicio = this.inicio.obtenerSiguiente(); // Establecer el siguiente nodo como el nuevo inicio
        if (this.inicio) {
            this.inicio.establecerAnterior(null); // Si hay un nuevo inicio, su nodo anterior es null
        } else {
            this.fin = null; // Si no hay más elementos, el fin también es null
        }
        this.longitud--; // Decrementar la longitud de la cola
        return cancionEliminada; // Devolver la canción eliminada
    }

    /**
     * Obtiene la longitud actual de la cola.
     * @returns {number} Longitud de la cola.
     */
    obtenerLongitud() {
        return this.longitud;
    }

    /**
     * Verifica si la cola está vacía.
     * @returns {boolean} true si la cola está vacía, false de lo contrario.
     */
    estaVacia() {
        return this.longitud === 0;
    }

    /**
     * Representa la cola de canciones como una cadena de texto.
     * @returns {string} La representación de la cola como texto.
     */
    toString() {
        let resultado = 'Cola de Canciones:';
        let nodoActual = this.inicio;
        while (nodoActual) {
            resultado += `\n${nodoActual.obtenerValor().getNombre()}`;
            nodoActual = nodoActual.obtenerSiguiente();
        }
        return resultado;
    }
}

// Exporta la clase como un módulo
export default ColaCanciones;