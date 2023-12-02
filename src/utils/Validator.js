class Validator
{
    static ValidarCamposPorTipo(tipo) {
        // Valida los campos comunes
        let campos_comunes = this.ValidarCamposComunes();

        // Verifica que los campos hayan sido completados segun su tipo
        switch (tipo) {
            case "auto":
                let campos_auto = this.ValidarCamposAuto();

                    if( campos_comunes && campos_auto){
                        return true;
                    }
                    else return false;
                break;

            case "camion":
                let campos_camion = this.ValidarCamposTerrestre();

                if(campos_comunes && campos_camion){
                    return true;
                }
                else return false;
                break;
        }

        return result;
    }

    static ValidarCamposComunes(){
        // Objeto con referencia a los inputs
        const campos_comunes = {
            modelo: document.getElementById('abm_modelo'),
            anoFab: document.getElementById('abm_anoFab'),
            velMax: document.getElementById('abm_velMax'),
        };

        // Objeto con los resultados de las validaciones
        let results_campos_comunes = {
            modelo: false,
            anoFab: false,
            velMax: false
        };

        // Valida los campos y guarda los resultados de las validaciones
        results_campos_comunes.modelo = this.ValidarString(campos_comunes.modelo.value);
        results_campos_comunes.anoFab = this.ValidarAnoFab(campos_comunes.anoFab.value);
        results_campos_comunes.velMax = this.ValidarNumMayorA(campos_comunes.velMax.value, 0);

        // Transforma los Objetos en Arrays para ser iterados
        let keys = Object.keys(results_campos_comunes);
        let valores = Object.values(results_campos_comunes);
        let result = true;

        // Itera los resultados de las validaciones
        for (let i = 0; i < keys.length; i++) 
        {
            // Comprueba el resultado de la validacion
            if(valores[i] == true){
                // Oculta el mensaje de error
                campos_comunes[keys[i]].nextElementSibling.classList.add("hidden");
            }
            else{
                // Muestra el mensaje de error
                campos_comunes[keys[i]].nextElementSibling.classList.remove("hidden");
                result = false;
            }
        }
        return result;
    }

    static ValidarCamposAuto(){
        // Objeto con referencia a los inputs
        const campos_auto = {
            cantPue: document.getElementById('abm_cantPue'),
            asientos: document.getElementById('abm_asientos')
        };
        
        // Objeto con los resultados de las validaciones
        let results_campos_auto = {
            cantPue: false,
            asientos: false
        };

        // Valida los campos y guarda los resultados de las validaciones
        results_campos_auto.cantPue = this.ValidarNumMayorA(campos_auto.cantPue.value, 2);
        results_campos_auto.asientos = this.ValidarNumMayorA(campos_auto.asientos.value, 2);

        // Transforma los Objetos en Arrays para ser iterados
        let keys = Object.keys(results_campos_auto);
        let valores = Object.values(results_campos_auto);
        let result = true;

        // Itera los resultados de las validaciones
        for (let i = 0; i < keys.length; i++) 
        {
            // Comprueba el resultado de la validacion
            if(valores[i] == true){
                // Oculta el mensaje de error
                campos_auto[keys[i]].nextElementSibling.classList.add("hidden");
            }
            else{
                // Muestra el mensaje de error
                campos_auto[keys[i]].nextElementSibling.classList.remove("hidden");
                result = false;
            }
        }
        return result;
    }

    static ValidarCamposTerrestre(){
        // Objeto con referencia a los inputs
        const campos_camion = {
            carga: document.getElementById('abm_carga'),
            autonomia: document.getElementById('abm_autonomia')
        };
        
        // Objeto con los resultados de las validaciones
        let results_campos_camion = {
            carga: false,
            autonomia: false
        };

        // Valida los campos y guarda los resultados de las validaciones
        results_campos_camion.carga = this.ValidarNumMayorA(campos_camion.carga.value, 0);
        results_campos_camion.autonomia = this.ValidarNumMayorA(campos_camion.autonomia.value, 0);

        // Transforma los Objetos en Arrays para ser iterados
        let keys = Object.keys(results_campos_camion);
        let valores = Object.values(results_campos_camion);
        let result = true;

        // Itera los resultados de las validaciones
        for (let i = 0; i < keys.length; i++) 
        {
            // Comprueba el resultado de la validacion
            if(valores[i] == true){
                // Oculta el mensaje de error
                campos_camion[keys[i]].nextElementSibling.classList.add("hidden");
            }
            else{
                // Muestra el mensaje de error
                campos_camion[keys[i]].nextElementSibling.classList.remove("hidden");
                result = false;
            }
        }
        return result;
    }

    static ValidarAnoFab(anoFab){
        if(!isNaN(anoFab) && parseInt(anoFab) > 1885){
            return true;
        }
        return false;
    }

    static ValidarNumMayorA(vel, min){
        if(!isNaN(vel) && parseInt(vel) > min){
            return true;
        }
        return false;
    }

    static ValidarCantPue(cantPue){
        if(!isNaN(cantPue) && parseInt(cantPue) > -1){
            return true;
        }
        return false;
    }

    static ValidarString(string){
        if(string !== null && string !== undefined &&  string.length > 0){
            return true;
        }
        return false;
    }
}
export default Validator;