class Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax) {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velMax = velMax;
    }

    getToString() {
        return `${this.id} - ${this.modelo} ${this.anoFabricacion} ${this.velMax}`;
    }
}

export default Vehiculo;