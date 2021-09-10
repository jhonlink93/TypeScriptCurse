class Persona {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static MetodoStatic(){
        return 5;
    }
}
let persona = new Persona("Jhonatan");
console.log(persona.getNombre());
console.log(Persona.MetodoStatic());