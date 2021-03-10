/*
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer  de PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()		//MINUTO 2.40.51 clase de repaso
{
let nombre;
let obraSocial;
let edad;
let temperatura;
let sexo;
let precioPasajero = 600;
let contOsdeViejo = 0;


let flagMujerPamiJoven = 1;
let edadMujerPamiJoven;
let nombreMujerPamiJoven;

let precioTotal = 0;

let contPasajeros = 0;
let contPAMI = 0;
let porcentajePami;
let precioDescuento;
let descuento;






do{

    nombre = prompt("Ingrese nombre")
    obraSocial = prompt("Ingrese obra social: PAMI, OSDE u OTRAS.");
	while(obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "otras"){
		obraSocial = prompt("Error. Ingrese obra social: ");
	}
    edad = parseInt(prompt("Ingrese edad: ")); 
	while (isNaN(edad) || edad < 17){
		edad = parseInt(prompt("Error. Ingrese la edad: "))

	}   
    temperatura = parseInt(prompt("Ingrese temperatura: ")); 
	while (isNaN(temperatura) || temperatura <= 0){
		temperatura = parseInt(prompt("Error. Ingrese la temperatura: "))

	}   
    sexo = prompt("Ingrese el sexo: ");
		while(sexo != "m" && sexo != "f" ){
		sexo = prompt("Error. Ingrese el sexo: ");
        }

        //A
        if(obraSocial == "OSDE" && edad >= 60){
            contOsdeViejo++
        }

        //B
        if(obraSocial == "PAMI" && sexo == "f"){
            if(flagMujerPamiJoven == 1 || edadMujerPamiJoven < edad){
                edadMujerPamiJoven = edad;
                nombreMujerPamiJoven = nombre;
                flagMujerPamiJoven = 0;
            }
        }

        //C
        precioTotal += precioPasajero;

        //D

        contPasajeros++;
		if(obraSocial == "PAMI"){
			contPAMI++;
		}




    seguir = prompt("Quiere seguir ingresando personas? s/n")
}
while(seguir == "s")
	






// RESPUESTA A
if(contOsdeViejo > 0){
    console.log("La cantidad de persones con OSDE con mas de 60 años es de " + contOsdeViejo);
}
else{
    console.log(" No se ingresaron personas con OSDE con mas de 60 años")
}

// RESPUESTA B
if(flagMujerPamiJoven == 1){
    console.log("No se ingresaron datos de una mujer con PAMI")
}
else{
console.log("La mujer con pami mas joven tiene " + edadMujerPamiJoven + " años y su nombre es " + nombreMujerPamiJoven)
}


//Respuesta C
console.log("El precio total es de $" + precioTotal);


// RESPUESTA D

porcentajePami = contPAMI * 100 / contPasajeros;
precioDescuento = precioTotal;

if(porcentajePami > 50 ){
    descuento = precioTotal * 25/100;
    precioDescuento -= descuento;
    console.log(" Al haber mas del 50% de pasajero que perteneces a PAMI el precio es de $" + precioDescuento);
}else{
    console.log("No hay suficientes pasajero que pertenezcan a PAMI")
}

}
/*
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer  de PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/