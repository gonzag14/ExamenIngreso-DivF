function mostrar()
{
 let nombre
 let situacionLaboral; 
 let edad;
 let cantidadMat;
 let sexo
 let seguir;
 let promedio;
 let NombreMejorP;
 let mejorNota;
 let flagNota = 0;
 let nombreMV;
 let edadMasViejo;
 let flagMV = 0;
 let promedio
 let promedioBuscando;
 let promedioTrabajando;
 let promedioSoloE;
 let acumBuscando = 0;
 let acumTrabajando = 0;
 let acumEstudiante = 0;
let contBuscando = 0;
let contTrabajando = 0;
let contEstudiante = 0;
let edadMenosMat;
let menosMat;
let nombreMenosMat
let flagMaterias = 0;
 do{
  nombre = prompt("Ingrese el nombre: ");
  situacionLaboral = prompt("Ingrese situacion laboral: ");
    while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
    situacionLaboral = prompt("Error. Ingrese situacion laboral: ");
   }
    sexo = prompt("Ingrese el sexo: ");
    while(sexo != "m" || sexo != "f" || sexo != "no binario"){
    sexo = prompt("Error. Ingrese el sexo: ");
   }
    cantidadMaterias = parseInt(prompt("Ingrese la cantidad de  materias: "));
    while(cantidadMaterias < 1 && cantidadMaterias > 8) {
    cantidadMaterias = parseInt(prompt("Error. Ingrese la cantidad de  materias: "));
   }
   promedio = parseInt(prompt("Ingrese nota promedio: "));
   while(promedio < 0 && promedio > 10){
   promedio = parseInt(prompt("Error. Ingrese nota promedio: "));
   }
   edad = parseInt(prompt("Ingrese edad: "));

  if(flagNota == 0 || mejorNota < promedio && situacionLaboral == "buscando" && situacionLaboral == "trabajando"){
    mejorNota = promedio
    flagNota = 1;
  }
 
 
 
  if(flagMV == 0 || edad > nombreMV && situacionLaboral == "estudiante")
  edadMasViejo = edad
  nombreMV = nombre
  }

  if(situacionLaboral == "buscando"){
    acumBuscando += mejorNota
    contBuscando++
    }
  else if(situacionLaboral == "trabajando"){
    acumBuscando += mejorNota
    contBuscando++
    }
   else{
   acumEstudiante += mejorNota
   contEstudiante++
  }
  
  if(flagMaterias == 0 || menosMat < cantidadMat && situacionLaboral == "trabajando"){
    menosMat =cantidadMat;
    edadMenosMat = edad
    nombreMenosMat = nombre
  }
  
  
  
  seguir = prompt("Quiere ingresar mas alumnos?")
  }
while(seguir == "s");

promedioTrabajando = acumTrabajando / contTrabajando;
promedioSoloE = acumEstudiante / contEstudiante;
promedioBuscando = acumEstudiante / contEstudiante;


console.log("" + promedio)
console.log( nombreMV)
console.log("Mejor promedio estudiante " + promedioSoloE + " mejor promedio trabajando " + promedioTrabajando + " mejor promedio buscando " + promedioBuscando)
console.log("La edad del que menos cursa es de " edadMenosMat + " y su nombre es " + nombreMenosMat)

