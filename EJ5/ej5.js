window.onload = function(){

    let tutor = "Víctor";


    //La función incluye verifica si el nombre del alumno se encuentra en valor.
    //El contenido de la variable valor lo proporcionará la función filter.
    

    function incluye (valor){

        return valor.tutor.includes(tutor);


    }


    console.log("Proyectos del tutor "+tutor)
    console.table(proyectos.filter(incluye).length);

    //Se filtran los proyectos con las condiciones indicadas en la función incluye
    //Mediante length, podemos obtener el nº de proyectos en los que participa ese tutor

}