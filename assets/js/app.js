document.addEventListener('DOMContentLoaded', ()=>{
    let radiologia = [];
    let traumatologia = [];
    let dental = [];

    const tabla = document.querySelector('#lista tbody');

    const llenarArreglo = (especialidad, hora, especialista, paciente, rut, prevision) =>{
        especialidad.push({hora, especialista, paciente, rut, prevision});
    }

    const crearTabla = (arreglo, especialidad) =>{
        arreglo.forEach(paciente => {
            const linea = document.createElement('TR');
            crearCampo(paciente.hora, linea);
            crearCampo(paciente.especialista, linea);
            crearCampo(paciente.paciente, linea);
            crearCampo(paciente.rut, linea);
            crearCampo(paciente.prevision, linea);
            crearCampo(especialidad, linea)
        });
    }
    const crearCampo = (argumento, linea) =>{
        const campo = document.createElement('TD');
        campo.textContent = `${argumento}`
        linea.appendChild(campo)
        tabla.appendChild(linea)
    }


    llenarArreglo(radiologia, '11:00', 'IGNACIO SCHULZ', 'FRANCISCA ROJAS', '9878782-1', 'FONASA',);
    llenarArreglo(radiologia, '11:30', 'FEDERICO SUBERCASEAUX', 'PAMELA ESTRADA', '15345241-3', 'ISAPRE');
    llenarArreglo(radiologia, '15:00', 'FERNANDO WURTHZ', 'ARMANDO LUNA', '16445345-9', 'ISAPRE');
    llenarArreglo(radiologia, '15:30', 'ANA MARIA GODOY', 'MANUEL GODOY', '17666419-0', 'FONASA');
    llenarArreglo(radiologia, '16:00', 'PATRICIA SUAZO', 'RAMON ULLOA', '14989389-K', 'FONASA');

    llenarArreglo(traumatologia, '8:00', 'MARIA PAZ ALTUZARRA', 'PAULA SANCHEZ', '15554774-5', 'FONASA');
    llenarArreglo(traumatologia, '10:00', 'RAUL ARAYA', 'ANGÉLICA NAVAS', '15444147-9', 'ISAPRE');
    llenarArreglo(traumatologia, '10:30', 'MARIA ARRIAGADA', 'ANA KLAPP', '17879423-9', 'ISAPRE');
    llenarArreglo(traumatologia, '11:00', 'ALEJANDRO BADILLA', 'FELIPE MARDONES', '1547423-6', 'ISAPRE');
    llenarArreglo(traumatologia, '11:30', 'CECILIA BUDNIK', 'DIEGO MARRE', '16554741-K', 'FONASA');
    llenarArreglo(traumatologia, '12:00', 'ARTURO CAVAGNARO', 'CECILIA MENDEZ', '9747535-8', 'ISAPRE');
    llenarArreglo(traumatologia, '12:30', 'ANDRES KANACRI', 'MARCIAL SUAZO', '11254785-5', 'ISAPRE');

    llenarArreglo(dental, '8:30', 'ANDREA ZUÑIGA', 'MARCELA RETAMAL', '11123425-6', 'ISAPRE');
    llenarArreglo(dental, '11:00', 'MARIA PIA ZAÑARTU', 'ANGEL MUÑOZ', '9878789-2', 'ISAPRE');
    llenarArreglo(dental, '11:30', 'SCARLETT WITTING', 'MARIO KAST', '7998789-5', 'FONASA');
    llenarArreglo(dental, '13:00', 'FRANCISCO VON TEUBER', 'KARIN FERNANDEZ', '18887662-K', 'FONASA');
    llenarArreglo(dental, '13:30', 'EDUARDO VIÑUELA', 'HUGO SANCHEZ', '17665461-4', 'FONASA');
    llenarArreglo(dental, '14:00', 'RAQUEL VILLASECA', 'ANA SEPULVEDA', '14441281-0', 'ISAPRE');

    
    crearTabla(radiologia, 'RADIOLOGIA');
    crearTabla(traumatologia, 'TRAUMATOLOGIA');
    crearTabla(dental, 'DENTAL');


    const obtenerPrimeraAtencion = (arreglo) => {
        return `${arreglo[0].paciente} - ${arreglo[0].prevision}`;
    }
    const obtenerUltimaAtencion = (arreglo) => {
        const ultimaAtencion = arreglo[arreglo.length - 1];
        return `${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}`;
    }

    const mostrarAtenciones = (arreglo) => {
        const primeraAtencion = obtenerPrimeraAtencion(arreglo);
        const ultimaAtencion = obtenerUltimaAtencion(arreglo);
        const tablaAtencion = document.querySelector('#atencion');

        const fila = document.createElement('tr');
        const celdaPrimeraAtencion = document.createElement('td');
        const celdaUltimaAtencion = document.createElement('td');

        celdaPrimeraAtencion.textContent = primeraAtencion;
        celdaUltimaAtencion.textContent = ultimaAtencion;

        fila.appendChild(celdaPrimeraAtencion);
        fila.appendChild(celdaUltimaAtencion);
        tablaAtencion.appendChild(fila);
    }

    mostrarAtenciones(radiologia);
    mostrarAtenciones(traumatologia);
    mostrarAtenciones(dental);

})