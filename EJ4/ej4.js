window.onload = function(){

//console.table(proyectos)

//let alumno = proyectos.toSorted();
console.table(proyectos[0])
console.table(proyectos[2])


   
//Array que imprimiremos
let final=[];


alumno.forEach(element => {
    final.push({nombre: element.nombre, total: element.alumnos.length})
    //El método push añade elementos al array
    
}
);




}