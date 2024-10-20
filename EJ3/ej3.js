window.onload = function () {


    function ordenarFecha(a, b) {

        const fechaA = new Date(a.fechaConsecucion.split('/').reverse().join('-'));
        const fechaB = new Date(b.fechaConsecucion.split('/').reverse().join('-'));

        
        return fechaA - fechaB;


    }

    //Creamos un nuevo array ordenado por fecha de Consecución;
    let reconocimientosOrdenados = alumnosReconocidos.toSorted(ordenarFecha);

   
    //Array que imprimiremos
    let final=[];


    reconocimientosOrdenados.forEach(element => {
        final.push({nombre: element.nombre, total: element.alumnos.length})
        //El método push añade elementos al array
        
    }
    );

    console.log("Datos ordenados por FECHA CONSECUCIÓN DESCENDENTE")
    console.table(final)



}