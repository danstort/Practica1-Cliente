window.onload = function(){

    let nombre = "Andrea Guardia";

    //La función incluye verifica si el nombre del alumno se encuentra en valor.
    //El contenido de la variable valor lo proporcionará la función filter.
    
    function incluye (valor){

        return valor.participantes.includes(nombre);

    }

    //La función filter devuelve un nuevo array con los elementos
    //que cumplen con los criterios indicados en la función incluye.

    let final = proyectos.filter(incluye);

    console.log("Proyectos del alumno: Andrea Guardia")
    console.table(final);


}