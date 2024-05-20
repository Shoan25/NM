import ListaCanciones from "./ListaCanciones.js";

/**
 * Clase que representa un álbum.
 */
class Album {
    /**
     * Constructor de la clase Album.
     * @param {number} id - El ID del álbum.
     * @param {string} nombre - El nombre del álbum.
     * @param {string} fechaLanzamiento - La fecha de lanzamiento del álbum.
     * @param {ListaCanciones} listaCanciones - La lista de canciones del álbum.
     * @param {number} id_artista - El ID del artista.
     * @param {string} nombre_artista - El nombre del artista.
     * @param {string} genero - El género del álbum.
     */
    constructor(id, nombre, fechaLanzamiento, listaCanciones, id_artista, nombre_artista, genero) {
        this.id = id;
        this.nombre = nombre;
        this.fechaLanzamiento = fechaLanzamiento;
        this.listaCanciones = listaCanciones || new ListaCanciones();
        this.id_artista = id_artista;
        this.nombre_artista = nombre_artista;
        this.genero = genero;
    }

    /**
     * Obtiene el ID del álbum.
     * @returns {number} El ID del álbum.
     */
    getId() {
        return this.id;
    }

    /**
     * Establece el ID del álbum.
     * @param {number} id - El nuevo ID del álbum.
     */
    setId(id) {
        this.id = id;
    }

    /**
     * Obtiene el nombre del álbum.
     * @returns {string} El nombre del álbum.
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Establece el nombre del álbum.
     * @param {string} nombre - El nuevo nombre del álbum.
     */
    setNombre(nombre) {
        this.nombre = nombre;
    }

    /**
     * Obtiene la fecha de lanzamiento del álbum.
     * @returns {string} La fecha de lanzamiento del álbum.
     */
    getFechaLanzamiento() {
        return this.fechaLanzamiento;
    }

    /**
     * Establece la fecha de lanzamiento del álbum.
     * @param {string} fechaLanzamiento - La nueva fecha de lanzamiento del álbum.
     */
    setFechaLanzamiento(fechaLanzamiento) {
        this.fechaLanzamiento = fechaLanzamiento;
    }

    /**
     * Obtiene la lista de canciones del álbum.
     * @returns {ListaCanciones} La lista de canciones del álbum.
     */
    getListaCanciones() {
        return this.listaCanciones;
    }

    /**
     * Establece la lista de canciones del álbum.
     * @param {ListaCanciones} listaCanciones - La nueva lista de canciones del álbum.
     */
    setListaCanciones(listaCanciones) {
        this.listaCanciones = listaCanciones;
    }

    /**
     * Obtiene el ID del artista.
     * @returns {number} El ID del artista.
     */
    getIdArtista() {
        return this.id_artista;
    }

    /**
     * Establece el ID del artista.
     * @param {number} id_artista - El nuevo ID del artista.
     */
    setIdArtista(id_artista) {
        this.id_artista = id_artista;
    }

    /**
     * Obtiene el nombre del artista.
     * @returns {string} El nombre del artista.
     */
    getNombreArtista() {
        return this.nombre_artista;
    }

    /**
     * Establece el nombre del artista.
     * @param {string} nombre_artista - El nuevo nombre del artista.
     */
    setNombreArtista(nombre_artista) {
        this.nombre_artista = nombre_artista;
    }

    /**
     * Obtiene el género del álbum.
     * @returns {string} El género del álbum.
     */
    getGenero() {
        return this.genero;
    }

    /**
     * Establece el género del álbum.
     * @param {string} genero - El nuevo género del álbum.
     */
    setGenero(genero) {
        this.genero = genero;
    }
}

// Exporta la clase como un módulo
export default Album;
