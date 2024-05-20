import ListaAlbumes from "./ListaAlbumes.js";
import ListaCanciones from "./ListaCanciones.js";

/**
 * Clase que representa a un artista musical.
 */
 class Artista {
    /**
     * Constructor de la clase Artista.
     * @param {number} id - El ID del artista.
     * @param {string} nombre - El nombre del artista.
     * @param {ListaAlbumes} listaAlbumes - La lista de álbumes del artista.
     * @param {ListaCanciones} listaCanciones - La lista de canciones del artista.
     * @param {string} genero - El género musical del artista.
     * @param {boolean} verificado - Indica si el artista está verificado.
     * @param {string} background - indica la direccion de la imagen para el backgroumd del artista
     */
    constructor(id, nombre, listaAlbumes, listaCanciones, genero, verificado, background) {
        this.id = id;
        this.nombre = nombre;
        this.listaAlbumes = listaAlbumes || new ListaAlbumes();
        this.listaCanciones = listaCanciones || new ListaCanciones();
        this.genero = genero;
        this.verificado = verificado;
        this.background = background;

    }

    /**
     * Obtiene el ID del artista.
     * @returns {number} El ID del artista.
     */
    getId() {
        return this.id;
    }

    /**
     * Establece el ID del artista.
     * @param {number} id - El nuevo ID del artista.
     */
    setId(id) {
        this.id = id;
    }

    /**
     * Obtiene el nombre del artista.
     * @returns {string} El nombre del artista.
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Establece el nombre del artista.
     * @param {string} nombre - El nuevo nombre del artista.
     */
    setNombre(nombre) {
        this.nombre = nombre;
    }

    /**
     * Obtiene la lista de álbumes del artista.
     * @returns {ListaAlbumes} La lista de álbumes del artista.
     */
    getListaAlbumes() {
        return this.listaAlbumes;
    }

    /**
     * Establece la lista de álbumes del artista.
     * @param {ListaAlbumes} listaAlbumes - La nueva lista de álbumes del artista.
     */
    setListaAlbumes(listaAlbumes) {
        this.listaAlbumes = listaAlbumes;
    }

    /**
     * Obtiene la lista de canciones del artista.
     * @returns {ListaCanciones} La lista de canciones del artista.
     */
    getListaCanciones() {
        return this.listaCanciones;
    }

    /**
     * Establece la lista de canciones del artista.
     * @param {ListaCanciones} listaCanciones - La nueva lista de canciones del artista.
     */
    setListaCanciones(listaCanciones) {
        this.listaCanciones = listaCanciones;
    }

    /**
     * Obtiene el género musical del artista.
     * @returns {string} El género musical del artista.
     */
    getGenero() {
        return this.genero;
    }

    /**
     * Establece el género musical del artista.
     * @param {string} genero - El nuevo género musical del artista.
     */
    setGenero(genero) {
        this.genero = genero;
    }

    /**
     * Verifica el estado del artista.
     * @returns {boolean} true si el artista está verificado, false si no lo está.
     */
    estaVerificado() {
        return this.verificado;
    }

    /**
     * Establece el estado de verificación del artista.
     * @param {boolean} verificado - true si el artista está verificado, false si no lo está.
     */
    setVerificado(verificado) {
        this.verificado = verificado;
    }

    
}

// Exporta la clase como un módulo
export default Artista;