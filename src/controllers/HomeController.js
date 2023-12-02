import Terrestre from "../models/Terrestre.js";
import Loader from "../components/Loader.js";
import Aereo from "../models/Aereo.js";
import Auto from "../models/Auto.js";
import Camion from "../models/Camion.js";

class HomeController
{
    static async GetVehiculosXML(callback){
        var xhttp = new XMLHttpRequest(); //Instancio el objeto
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                //Acción a ejecutar cuando el estado es 200 ok y el readyState=4 (respuesta lista)
                const res = xhttp.response;
                callback(res);            
            }
        }; //Configúro manejador para cambio de estado
        xhttp.open("GET", "http://localhost/Lab3SPF/VehiculoAutoCamion.php", true); //Inicializo la solicitud
        xhttp.send(); //Envio la solicitud
    }

    static async AltaVehiculoFetch(vehiculo){
        const response = await fetch('http://localhost/Lab3SPF/VehiculoAutoCamion.php', {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(vehiculo)
        });
        let res;
        if(response.status == 200){
            let json = await response.json();
            res = {
                status: response.status,
                message: "Vehiculo creado exito",
                id: json.id
            };
        }
        else{
            res = {
                status: response.status,
                message: "No se pudo cargar vehiculo",
                error: response.statusText
            };
        }
        return res;
    }

    static UpdateFetch(vehiculo){
        return new Promise((resolve, reject) => {
            fetch('http://localhost/Lab3SPF/VehiculoAutoCamion.php', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(vehiculo)
            }).then((response) => {
                    resolve(response);
            })
              
        });
    }

    static async DeleteVehiculoFetch(vehiculo){
        const response = await fetch('http://localhost/Lab3-RSP/vehiculoAereoTerrestre.php', {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(vehiculo)
        });
        return await response;
    }

    // Parsea un array json a Vehiculos
    static ParsearDatos(datos)
    {
        const vehiculos = datos.map((vehiculo) => {
            const esAuto = vehiculo.id && vehiculo.modelo && vehiculo.anoFabricacion && vehiculo.velMax && vehiculo.cantidadPuertas && vehiculo.asientos;
            const esCamion = vehiculo.id && vehiculo.modelo && vehiculo.anoFabricacion && vehiculo.velMax && vehiculo.carga >= 0 && vehiculo.autonomia;

            // Comprueba el tipo de Vehiculo
            if (esAuto) {
                return new Auto(
                    vehiculo.id,
                    vehiculo.modelo,
                    vehiculo.anoFabricacion,
                    vehiculo.velMax,
                    vehiculo.cantidadPuertas,
                    vehiculo.asientos
                );
            }
            else if(esCamion){
                return new Camion(
                    vehiculo.id,
                    vehiculo.modelo,
                    vehiculo.anoFabricacion,
                    vehiculo.velMax,
                    vehiculo.carga,
                    vehiculo.autonomia
                );
            }
        });
        return vehiculos;
    }
}

export default HomeController;