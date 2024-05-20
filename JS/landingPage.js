import ListaCanciones from "./ListaCanciones.js";
import Artista from './Artista.js';
import Album from "./Album.js";
import Cancion from './Cancion.js';
import ArbolAVLCanciones from './ArbolCanciones.js';
import ArbolAVLArtistas from './ArbolArtistas.js';
import ListaAlbumes from "./ListaAlbumes.js";
import Nodo from "./Nodo.js";

/*alista el documento, para despues implementar metodos
  y listeners que ayudaran a una interaccion mas amena
  respecto a la navegabilidad de la interfaz de usuario */

 // Referencias al reproductor de audio y a la fuente de audio
let audioPlayer,audioSource;
  



document.addEventListener('DOMContentLoaded', function () {


/* seccion pruebas de html*/

document.getElementById('contenido-cantante').style.display="none";
document.getElementById('contenedor-contenido-musica-artistas').style.display="none";
document.getElementById('contenedor-pagina-album').style.display="block";
document.getElementById('contenedor-pagina-lista').style.display="none";
document.getElementById('contenedor-pagina-cancion').style.display="none"; 

//document.getElementById('contenedor-encabezado').style.backgroundColor="#101010f2";

    cargarElementosLanding();

   // Referencias al reproductor de audio y a la fuente de audio
    audioPlayer = document.getElementById('audioPlayer');
    audioSource = document.getElementById('audioSource');
 
    /*listener que enfoca el input de busqueda del header, 
      una vez se de click al boton de buscar en el menu */
    document.getElementById('boton-buscar-menu').addEventListener('click', function () {
        focus('input-busqueda-header');
    });

    /*listener que enfoca el input de busqueda del header, 
      una vez se de click al contenedor del input*/
    document.getElementById('contenedor-input-header').addEventListener('click', function () {
        focus('input-busqueda-header');
    });

    /* metodo que recibe por parametro el item al que se 
    desea hacer focus en la pagina, ej: input-busqueda */
    function focus(elemento) {
        document.getElementById(elemento).focus();
    }
    let canciones_ocultas = document.getElementById('contenedor-canciones-ocultas');
    //metodo para alternar entre esconder y mostar las canciones ocultas de un artista
    document.getElementById('btn-mostrar-mas-menos').addEventListener('click', function() {
      if (this.textContent === 'Mostrar más') {
        this.textContent = 'Mostrar menos';
        canciones_ocultas.style.display="block";
      } else {
        this.textContent = 'Mostrar más';
        canciones_ocultas.style.display="none";
      }
    });

    
   // Evento que se dispara cuando la canción actual termina
   audioPlayer.addEventListener('ended', () => {
    nextTrack();
   });

   testAgregarArtistasArbol();

});


let arbolArtistas = new ArbolAVLArtistas();
let arbolCanciones = new ArbolAVLCanciones();
let listaAlbumes = new ListaAlbumes();

function testAgregarArtistasArbol(){
  //testBajarArboles()
  let artista_temp = new Artista(1,"Feid",new ListaAlbumes(), new ListaCanciones(), "reguetón,pop latino,jazz,R&B,trap latino", true,"feidbackground.jpeg");
  arbolArtistas.insertar(artista_temp);
  testAgregarAlbumesLista();
}

function testAgregarAlbumesLista(){
    let album_temp = new Album(1,"FERXXOCALIPSIS", "2023", new ListaCanciones(), 1, "Feid", "pop latino");
    listaAlbumes.agregarAlbumFinal(album_temp);
    arbolArtistas.buscar("Feid").getListaAlbumes().agregarAlbumFinal(album_temp);
    testAgregarCancionesArbol();
}

function testAgregarCancionesArbol(){
  let cancion_temp = new Cancion(1,"LUNA","3:17","../MUSIC/LUNA.mp3","../IMG/lunaimg.jpeg","../IMG/lunacaratula.jpeg",1,1,"Feid","FERXXOCALIPSIS","534.024.681", "pop latino");
  arbolCanciones.insertar(cancion_temp);
  
 arbolArtistas.buscar("Feid").getListaAlbumes().buscarAlbumPorId(1).getListaCanciones().insertar(cancion_temp);
 arbolArtistas.buscar("Feid").getListaCanciones().insertar(cancion_temp);
 console.log(arbolArtistas.buscar("Feid"));
 console.log(arbolArtistas);

 //testSubirArboles()
 //testBajarArboles()
 //console.log(arbolArtistas.buscar("Feid"));
 //console.log(arbolArtistas);

}

function testSubirArboles(){
  guardarArbolEnLocalStorage(arbolArtistas, 'arbolArtistas');
  guardarArbolEnLocalStorage(arbolCanciones, 'arbolCanciones');
}

function testBajarArboles(){
   arbolArtistas=cargarArbolArtistasDesdeLocalStorage('arbolArtistas');
   arbolCanciones=cargarArbolCancionesDesdeLocalStorage('arbolCanciones');
}


// Función para convertir el árbol a una estructura JSON
function arbolAVLToJSON(nodo) {
  if (nodo === null) {
      return null;
  }

  return {
      valor: nodo.valor,
      anterior: arbolAVLToJSON(nodo.obtenerAnterior()),
      siguiente: arbolAVLToJSON(nodo.obtenerSiguiente())
  };
}

// Función para convertir JSON a un nodo del árbol AVL
function jsonToArbolAVL(json) {
    if (json === null) {
        return null;
    }

    const nodo = new Nodo(new Artista(json.valor.id, json.valor.nombre));
    nodo.establecerAnterior(jsonToArbolAVL(json.anterior));
    nodo.establecerSiguiente(jsonToArbolAVL(json.siguiente));
    return nodo;
}

// Guardar el árbol en Local Storage
function guardarArbolEnLocalStorage(arbol, key) {
    const arbolJSON = arbolAVLToJSON(arbol.raiz);
    localStorage.setItem(key, JSON.stringify(arbolJSON));
}

// Cargar el árbol Artistas desde Local Storage
function cargarArbolArtistasDesdeLocalStorage(key) {
    const arbolJSON = localStorage.getItem(key);
    if (arbolJSON) {
        const arbol = new ArbolAVLArtistas();
        arbol.raiz = jsonToArbolAVL(JSON.parse(arbolJSON));
        return arbol;
    }
    return null;
}

// Cargar el árbol Canciones desde Local Storage
function cargarArbolCancionesDesdeLocalStorage(key) {
  const arbolJSON = localStorage.getItem(key);
  if (arbolJSON) {
      const arbol = new ArbolAVLCanciones();
      arbol.raiz = jsonToArbolAVL(JSON.parse(arbolJSON));
      return arbol;
  }
  return null;
}


function cargarElementosLanding(){

}

//metodo que dirige al home
window.goHome=function(){
  document.getElementById('contenedor-contenido-musica-artistas').style.display="block";
//document.getElementById('contenedor-encabezado').style.backgroundColor="#101010f2";
  
  document.getElementById('contenedor-pagina-album').style.display="none";
  document.getElementById('contenedor-pagina-lista').style.display="none";
  document.getElementById('contenedor-pagina-cancion').style.display="none";
  document.getElementById('contenido-cantante').style.display="none";

  //
  var contenedorDerecho = document.querySelector('.contenedor-derecho');
  contenedorDerecho.style.backgroundImage = "none";
  contenedorDerecho.style.backgroundColor = "#4b444400";

}

//metodo que dirige a la pagina de un artista
window.setArtistaPage=function(nombre){
  setBackgroundArtista(arbolArtistas.buscar(nombre).background);
  document.getElementById('contenido-cantante').style.display="block";
  document.getElementById('contenedor-encabezado').style.backgroundColor="#101010f2";

  document.getElementById('contenedor-contenido-musica-artistas').style.display="none";
  document.getElementById('contenedor-pagina-album').style.display="none";
  document.getElementById('contenedor-pagina-lista').style.display="none";
  document.getElementById('contenedor-pagina-cancion').style.display="none";
}

//metodo que dirige a la pagina de un album o lista
window.setListaAlbumPage=function(lista_album){
  
}

  //metodo que setea el background al artista
function setBackgroundArtista(nombreImagen_Extension){

  var contenedorDerecho = document.querySelector('.contenedor-derecho');
  contenedorDerecho.style.backgroundImage = "url('/IMG/"+nombreImagen_Extension+"')";

}

//metodos para controlar el reproductos de musica


  // Lista de archivos de audio para reproducir
  let tracks = [];

//metodo para setear la cancion
window.setSong=function(song){
  tracks = [
  song,
    song,
     song,
  ];

  playTrack();
}
  
  
  
  
  // Índice de la canción actual
  let currentTrack = 0;

  // Función para reproducir la siguiente canción
  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length; // Avanza al siguiente índice, y si llega al final, vuelve al inicio
    playTrack(); // Reproduce la canción
  }

  // Función para reproducir la canción anterior
  window.previousTrack=function() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length; // Retrocede al índice anterior, y si llega al inicio, vuelve al final
    playTrack(); // Reproduce la canción
  }

  // Función para actualizar la fuente de audio y reproducir la canción
  window.playTrack=function() {
    audioSource.src = tracks[currentTrack]; // Actualiza la ruta del archivo de audio
    audioPlayer.load(); // Carga el nuevo archivo de audio
    audioPlayer.play(); // Inicia la reproducción
  }

  // Función para adelantar 10 segundos en la canción actual
  window.skipForward=function() {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 10); // Avanza 10 segundos sin superar la duración total
  }

  // Función para retroceder 10 segundos en la canción actual
  window.skipBackward=function() {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10); // Retrocede 10 segundos sin ir por debajo de 0
  }