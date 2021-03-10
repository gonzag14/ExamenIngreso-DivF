
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	
	
	let promedioAl;
	let promedioIa;
	let promedioQu;
	let acumAl = 0;
	let acumIa = 0;
	let acumQu = 0;
	let contAl= 0;
	let contIa = 0;
	let contQu = 0;
	let catMayor;

	let acumDetMenos200 = 0;
	
	let acumDesinf = 0;
	let acumBact = 0;
	let acumDet = 0;
	


	let mayorFabricante;
	let mayorCategoria;
	let mayorPrecio;
	let flag = 1;
	
  
  
	for ( let i = 0; i < 5 ; i++ ){
  
		producto = prompt("Ingrese produto: iac, alcohol o quat.");
		while(producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT"){
			producto = prompt("Error. Ingrese producto: ");
		}
  
		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"));
		while (isNaN(precio) || precio < 100  || precio > 300){				
			precio = prompt("Error. Ingrese precio entre $100 y $300");
		}
		cantidad = parseInt(prompt("Ingrese cantidad"))
		while(   !(cantidad > 0 && cantidad <= 1000)  ){	//while (isNan(cantidad) || cantidad <=0 || cantidad > 1000)
			cantidad = prompt("Error. Ingrese cantidad max 1000");
		}
		categoria = prompt("Ingrese tipo: desinfectante, bactericida o detergente.");
		while(categoria != ("desinfectante") & categoria != ("bactericida") && categoria != ("detergente")){
			categoria = prompt("Error. Ingrese categoria: ");
		}
	
		fabricante = prompt("ingrese fabricante");
		
									// A  tendria q hacer if else if if
		switch(producto){
			case "ALCOHOL":
			acumAl += cantidad
			contAl++;
			break;
			case "IAC":
			acumIa += cantidad
			contIa++;
			break;
			case "QUAT":
			acumQu += cantidad;
			contQu++;

			break;
		}

	
	
	  // PUNTO B conviene usar if else if
	
	  switch(categoria){
		case "detergente":
		if (precio <= 200){					//punto C
		 acumDetMenos200 = cantidad;
		}
		acumDet += cantidad;
		
		break;
		case "desinfectante":
		acumDesinf += cantidad;
	
		break;
		case "bactericida":
		acumQu += cantidad;
		break;
	  }
	  
	  //PUNTO D
	  if ( flag || precio > mayorPrecio){
		  mayorPrecio = precio;	
		  mayorCategoria = categoria;
		  mayorFabricante = fabricante;

		  flag = 0;
	  }



	} //TERMINA EL FOR
							
	
	// A ) PROMEDIOS
	if(contAl != 0 ){
		promedioAl = acumAl / contAl; 
	}
	if(contIa != 0){
		promedioIa = acumIa / contIa;
	}
	if(contQu != 0){
		promedioQu = acumQu / contQu;
	}

	
	
// punto B
	
	if(acumDet > acumDesinf && acumDet > acumBact ){
		//acumdet sea mayor
			catMayor = "detergente"
		
		
		}					//== !!!!!!!!!
		else if( acumDesinf >= acumDet &&  acumDesinf >= acumBact ){
		
			catMayor = "desinfectante"
			
		}
		
		else{
		
			catMayor = "bactericida"
		
	}
	

	
	


//A
	
console.log("Promedio de alcohol" + promedioAl + " \nPromedio IAC " + promedioIa + " \nPromedio QUAT " + promedioQu )
//B
console.log("La categoria con mas cantidad de unidades en total de la compra "+ catMayor)
//C	
console.log("unidades de detergente con precios menos a 200" + acumDetMenos200)
//D
console.log("El producto mas caro vale" + mayorPrecio + " el fabricante mas caro es " + mayorFabricante +  " y la categoria del producto mas caro es " + mayorCategoria)
	

}
/*a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos 
*/