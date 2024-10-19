window.onload = function(){


    function incluye (valor){

        return valor.participantes.includes("Andrea Guardia");

    }

    let final = proyectos.filter(incluye);

    console.table(final);


}