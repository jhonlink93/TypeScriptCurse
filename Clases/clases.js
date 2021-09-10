"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.MetodoStatic = function () {
        return 5;
    };
    return Persona;
}());
var persona = new Persona("Jhonatan");
console.log(persona.getNombre());
console.log(Persona.MetodoStatic());
