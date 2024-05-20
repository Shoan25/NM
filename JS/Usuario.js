export class Usuario {
    constructor(id, nombre, apellido, correo, contrasena) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.biblioteca = new Set();
    }

    // Getter para obtener la biblioteca del usuario
    getBiblioteca() {
        return this.biblioteca;
    }

    // Setter para agregar un elemento a la biblioteca del usuario
    agregarElemento(elemento) {
        this.biblioteca.add(elemento);
    }

    // Método para editar un elemento de la biblioteca del usuario
    editarElemento(elementoAntiguo, elementoNuevo) {
        if (this.biblioteca.has(elementoAntiguo)) {
            this.biblioteca.delete(elementoAntiguo);
            this.biblioteca.add(elementoNuevo);
        } else {
            console.log("El elemento antiguo no existe en la biblioteca.");
        }
    }

    // Método para eliminar un elemento de la biblioteca del usuario
    eliminarElemento(elemento) {
        if (this.biblioteca.has(elemento)) {
            this.biblioteca.delete(elemento);
        } else {
            console.log("El elemento no existe en la biblioteca.");
        }
    }

    // Otros métodos getters y setters según sea necesario
    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getCorreo() {
        return this.correo;
    }

    getContrasena() {
        return this.contrasena;
    }

    setId(id) {
        this.id = id;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setCorreo(correo) {
        this.correo = correo;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }
}