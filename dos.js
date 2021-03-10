/* 
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/

function mostrar()		//ESTE ES EL 2!
{

	let nombre;
	let situacionLaboral;
	let cantidadMaterias;
	let sexo;
	let notaPromedio;
	let seguir;
	let edad;
	
	// A
	let mejorPromedioSoloEstudiante;
	let nombreNotaSoloEstudiante;
	let flagMejorSoloEstudiante = 1;
	
	//B
	let flagEstudiante = 1;
	let nombreEstudianteMayor;
	let edadEstudianteMayor;

	//C
	let acumNotaTrabajando = 0;
	let acumNotaSoloEstudiante = 0;
	let acumNotaBuscando = 0;
	let contTrabajando = 0;
	let contBuscando = 0;
	let contSoloEstudiante = 0;
	let promedioTrabajando = 0;
	let promedioBuscando = 0;
	let promedioSoloEstudiante = 0;
	
	//D
	let flagBuscando = 1;
	let menorCantidadBuscando;
	let nombreMenorBuscando;
	let edadMenorBuscando;
	

	

do{
	nombre = prompt("Ingrese nombre")
	situacionLaboral = prompt("Ingrese situacion laboral: buscando, trabajando o solo estudiante.");
	while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
		situacionLaboral = prompt("Error. Ingrese situacion laboral: ");
	}
	cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias: "));
		while ( cantidadMaterias <= 0  && cantidadMaterias > 7){				
			cantidadMaterias = prompt("Error. Ingrese cantidad de materias menor a 8.");
		}
	sexo = prompt("Ingrese el sexo: ");
		while(sexo != "m" && sexo != "f" && sexo != "no binario"){
		sexo = prompt("Error. Ingrese el sexo: ");
	   }
	notaPromedio = parseInt(prompt("Ingrese nota promedio: "));
	   while (isNaN(notaPromedio) ||notaPromedio < 0  && notaPromedio > 10){				
		   notaPromedio = prompt("Error. Ingrese nota promedio entre 0 y 10.");
	   }	
	edad = parseInt(prompt("Ingrese edad: ")); 
	while (isNaN(edad) || edad <= 0){
		edad = parseInt(prompt("Error. Ingrese la edad: "))

	}   

	//punto A  El nombre del mejor promedio que no de los que tarbajan o estan buscando
	if (situacionLaboral == "solo estudiante" && ( flagMejorSoloEstudiante  || notaPromedio > nombreNotaSoloEstudiante) ){
		mejorPromedioSoloEstudiante = notaPromedio;
		nombreNotaSoloEstudiante = nombre;

		flagMejorSoloEstudiante = 0;
	}



//B 
	if(situacionLaboral == "solo estudiante"){
		if(flagEstudiante || edad > edadEstudianteMayor){
			edadEstudianteMayor = edad;
			nombreEstudianteMayor = nombre;
			
			flagEstudiante = 0;
		}
	}
	
//C

	switch (situacionLaboral){
		case "buscando":
		acumNotaBuscando = notaPromedio;
		contBuscando++

		break;
		case "solo estudiante":
		acumNotaSoloEstudiante = notaPromedio;
		contSoloEstudiante++

		break;
		case "trabajando":
		acumNotaTrabajando = notaPromedio;
		contTrabajando++

		break;

	}

	//D
	if(situacionLaboral == "buscando"){

		if(flagBuscando || cantidadMaterias < menorCantidadBuscando){
			nombreMenorBuscando = nombre;
			edadMenorBuscando = edad;

			flagBuscando = 0;
		}
	}

	


		seguir = prompt("Quiere ingresar otro alumno?")
}
while(seguir == "s")



// respuesta A 
if (flagMejorSoloEstudiante == 1){
	console.log("a) Se ingresaron solo los que trabajan y los que estan buscando")
}
else{
	console.log("a) El nombre del mejor promedio de los que solo estudian es " + nombreNotaSoloEstudiante + "con un promedio de " + mejorPromedioSoloEstudiante )
}



// Respuesta B
if(flagEstudiante == 1){
	console.log("b) No se ingresaron alumnos solo estudiantes")
}
else{
	console.log("El nombre del  solo estudiante mas viejo es " + nombreEstudianteMayor + "con una edad de " + edadEstudianteMayor)
}


// Respuesta C
	if ( contSoloEstudiante != 0 ){
		promedioSoloEstudiante = acumNotaSoloEstudiante / contSoloEstudiante;

	}

	if(contTrabajando != 0){
		promedioTrabajando = acumNotaTrabajando / contTrabajando;

	}

	if( contBuscando != 0){
		promedioBuscando = acumNotaBuscando / contBuscando;

	}

	console.log("El promedio de los que solo trabajan es " + promedioTrabajando + ", el promedio de los que solo estudian es " + promedioSoloEstudiante + " y el promedio de los que buscan trabajo es " + promedioBuscando)

//Respuesta D

	if(flagBuscando){
		console.log("d) No se ingresaron alumnos que estes buscando trabajo")
	}
	else{
		console.log("d) La edad del alumno que menos materias cursa es " + edadMenorBuscando + " años y el nombre es " + nombreMenorBuscando  )
	}
}
