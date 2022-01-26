

class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está calculado
    estaCaducado() {
        if()
        
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido() {
        if(this.numero == /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i ){
            return true;
        }else{
            return false;
        }

    }

    // Dado un número de DNI, nos calcula la letra. Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {
        return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23);
  
    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());

