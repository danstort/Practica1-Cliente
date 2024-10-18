window.onload = function(){



console.table(proyectos);

/*
const a = proyectos.slice('tutor');

const proyectosOrdenados = proyectos.slice().sort((a, b) => {
    if (a.tutor < b.tutor) return 1;
    if (a.tutor > b.tutor) return -1;
    return 0;
  });

  console.table(proyectosOrdenados);

*/
  function ordenarTutor(c1, c2)  {	

    if (c1.tutor>c2.tutor) return -1;
    else if (c1.tutor<c2.tutor) return 1;
    else return 0;    
    
}   

console.table(proyectos.toSorted(ordenarTutor));

}