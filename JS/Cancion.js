/**
 * Clase que representa una canción.
 */
class Cancion {
  /**
   * Constructor de la clase Cancion.
   * @param {string} id - ID de la canción.
   * @param {string} nombre - Nombre de la canción.
   * @param {number} duracion - Duración de la canción en segundos.
   * @param {string} ruta - Ruta de reproducción de la canción.
   * @param {string} caratulaChica - URL de la carátula pequeña de la canción.
   * @param {string} caratulaGrande - URL de la carátula grande de la canción.
   * @param {string} idArtista - ID del artista de la canción.
   * @param {string} idAlbum - ID del álbum de la canción.
   * @param {string} nombreArtista - Nombre del artista de la canción.
   * @param {string} nombreAlbum - Nombre del álbum de la canción.
   * @param {number} numeroVisualizaciones - Número de visualizaciones de la canción.
   * @param {string} genero - Género de la canción.
   */
  constructor(
      id = '',
      nombre = '',
      duracion = 0,
      ruta = '',
      caratulaChica = '',
      caratulaGrande = '',
      idArtista = '',
      idAlbum = '',
      nombreArtista = '',
      nombreAlbum = '',
      numeroVisualizaciones = 0,
      genero = ''
  ) {
      this.id = id;
      this.nombre = nombre;
      this.duracion = duracion;
      this.ruta = ruta;
      this.caratulaChica = caratulaChica;
      this.caratulaGrande = caratulaGrande;
      this.idArtista = idArtista;
      this.idAlbum = idAlbum;
      this.nombreArtista = nombreArtista;
      this.nombreAlbum = nombreAlbum;
      this.numeroVisualizaciones = numeroVisualizaciones;
      this.genero = genero;
  }

  // Getters

  /**
   * Obtiene el ID de la canción.
   * @returns {string} ID de la canción.
   */
  getId() {
      return this.id;
  }

  /**
   * Obtiene el nombre de la canción.
   * @returns {string} Nombre de la canción.
   */
  getNombre() {
      return this.nombre;
  }

  /**
   * Obtiene la duración de la canción.
   * @returns {number} Duración de la canción en segundos.
   */
  getDuracion() {
      return this.duracion;
  }

  /**
   * Obtiene la ruta de reproducción de la canción.
   * @returns {string} Ruta de reproducción de la canción.
   */
  getRuta() {
      return this.ruta;
  }

  /**
   * Obtiene la URL de la carátula pequeña de la canción.
   * @returns {string} URL de la carátula pequeña de la canción.
   */
  getCaratulaChica() {
      return this.caratulaChica;
  }

  /**
   * Obtiene la URL de la carátula grande de la canción.
   * @returns {string} URL de la carátula grande de la canción.
   */
  getCaratulaGrande() {
      return this.caratulaGrande;
  }

  /**
   * Obtiene el ID del artista de la canción.
   * @returns {string} ID del artista de la canción.
   */
  getIdArtista() {
      return this.idArtista;
  }

  /**
   * Obtiene el ID del álbum de la canción.
   * @returns {string} ID del álbum de la canción.
   */
  getIdAlbum() {
      return this.idAlbum;
  }

  /**
   * Obtiene el nombre del artista de la canción.
   * @returns {string} Nombre del artista de la canción.
   */
  getNombreArtista() {
      return this.nombreArtista;
  }

  /**
   * Obtiene el nombre del álbum de la canción.
   * @returns {string} Nombre del álbum de la canción.
   */
  getNombreAlbum() {
      return this.nombreAlbum;
  }

  /**
   * Obtiene el número de visualizaciones de la canción.
   * @returns {number} Número de visualizaciones de la canción.
   */
  getNumeroVisualizaciones() {
      return this.numeroVisualizaciones;
  }

  /**
   * Obtiene el género de la canción.
   * @returns {string} Género de la canción.
   */
  getGenero() {
      return this.genero;
  }

  // Setters

  /**
   * Establece el ID de la canción.
   * @param {string} id - Nuevo ID de la canción.
   */
  setId(id) {
      this.id = id;
  }

  /**
   * Establece el nombre de la canción.
   * @param {string} nombre - Nuevo nombre de la canción.
   */
  setNombre(nombre) {
      this.nombre = nombre;
  }

  /**
   * Establece la duración de la canción.
   * @param {number} duracion - Nueva duración de la canción en segundos.
   */
  setDuracion(duracion) {
      this.duracion = duracion;
  }

  /**
   * Establece la ruta de reproducción de la canción.
   * @param {string} ruta - Nueva ruta de reproducción de la canción.
   */
  setRuta(ruta) {
      this.ruta = ruta;
  }

  /**
   * Establece la URL de la carátula pequeña de la canción.
   * @param {string} caratulaChica - Nueva URL de la carátula pequeña de la canción.
   */
  setCaratulaChica(caratulaChica) {
      this.caratulaChica = caratulaChica;
  }

  /**
   * Establece la URL de la carátula grande de la canción.
   * @param {string} caratulaGrande - Nueva URL de la carátula grande de la canción.
   */
  setCaratulaGrande(caratulaGrande) {
      this.caratulaGrande = caratulaGrande;
  }

  /**
   * Establece el ID del artista de la canción.
   * @param {string} idArtista - Nuevo ID del artista de la canción.
   */
  setIdArtista(idArtista) {
      this.idArtista = idArtista;
  }

  /**
   * Establece el ID del álbum de la canción.
   * @param {string} idAlbum - Nuevo ID del álbum de la canción.
   */
  setIdAlbum(idAlbum) {
      this.idAlbum = idAlbum;
  }

  /**
   * Establece el nombre del artista de la canción.
   * @param {string} nombreArtista - Nuevo nombre del artista de la canción.
   */
  setNombreArtista(nombreArtista) {
      this.nombreArtista = nombreArtista;
  }

  /**
   * Establece el nombre del álbum de la canción.
   * @param {string} nombreAlbum - Nuevo nombre del álbum de la canción.
   */
  setNombreAlbum(nombreAlbum) {
      this.nombreAlbum = nombreAlbum;
  }

  /**
   * Establece el número de visualizaciones de la canción.
   * @param {number} numeroVisualizaciones - Nuevo número de visualizaciones de la canción.
   */
  setNumeroVisualizaciones(numeroVisualizaciones) {
      this.numeroVisualizaciones = numeroVisualizaciones;
  }

  /**
   * Establece el género de la canción.
   * @param {string} genero - Nuevo género de la canción.
   */
  setGenero(genero) {
      this.genero = genero;
  }
}

// Exporta la clase como un módulo
export default Cancion;
