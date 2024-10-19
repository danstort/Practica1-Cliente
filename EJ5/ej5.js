window.onload = function(){

    function incluye (valor){

        return valor.tutor.includes("Víctor");


    }


    console.log("Proyectos del tutor Víctor")
    console.table(proyectos.filter(incluye).length);

}