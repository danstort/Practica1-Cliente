window.onload = function(){



  function ordenarTutor(c1, c2)  {	

    if (c1.tutor>c2.tutor) return -1;
    else if (c1.tutor<c2.tutor) return 1;
    else return 0;    
    
}   

//La función toSorted ordena el array en función de los parámetros indicados 
//en la función ordenarTutor, 
//en este caso ordenado alfabéticamente de manera descendente

console.table(proyectos.toSorted(ordenarTutor));

}