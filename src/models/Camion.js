import  Vehiculo  from "./Vehiculo.js";

class Camion extends Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, carga, autonomia)
    {
        super(id, modelo, anoFabricacion, velMax);
        this.carga = carga;
        this.autonomia = autonomia;
    }

    getToString() {
        return `${super.getToString()} - ${this.carga} - ${this.autonomia}`;
    }
}

export default Camion;
