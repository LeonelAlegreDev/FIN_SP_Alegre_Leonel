import  Vehiculo  from "./Vehiculo.js";

class Auto extends Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, cantidadPuertas, asientos)
    {
        super(id, modelo, anoFabricacion, velMax);
        this.cantidadPuertas = cantidadPuertas;
        this.asientos = asientos;
    }

    getToString() {
        return `${super.getToString()} - ${this.cantidadPuertas} - ${this.asientos}`;
    }
}

export default Auto;
