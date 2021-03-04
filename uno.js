
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
	let unidadesDet;
	let contDesinf = 0;
	let contBact = 0;
	let contDet = 0;
	let acumDesinf = 0;
	let acumBact = 0;
	let acumDet = 0;
	let cantidadCat;
	let UnidadesDet;
	let fabricanteCaro;
	let categoriaCaro;
	let flagFabricante = 0;
	let flagCategoria = 0;
	
  
  
	for ( let i = 0; i < 5 ; i++ ){
  
		producto = prompt("Ingrese produto: iac, alcohol o quat.");
		while(producto != "ALCOHOL" & producto != "IAC" && producto != "QUAT"){
			producto = prompt("Error. Ingrese producto: ")
		}
  
		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"))
		while (precio < 100 || precio > 300 || isNaN(precio) ){				
			precio = prompt("Error. Ingrese precio entre $100 y $300");
		}
		cantidad = parseInt(prompt("Ingrese cantidad"))
		while(   !(cantidad > 0 && cantidad <= 1000)  ){
			cantidad = prompt("Error. Ingrese cantidad max 1000")
		}
		categoria = prompt("Ingrese tipo: desinfectante, bactericida o detergente.");
		while(categoria != ("desinfectante") & categoria != ("bactericida") && categoria != ("detergente")){
			categoria = prompt("Error. Ingrese categoria: ")
		}
		fabricante = prompt("ingrese fabricante");
		
		
		switch(producto){
			case "ALCOHOL":
			acumAl += cantidad
			contAl++;
			break;
			case "IAC":
			acumIa += cantidad
			contIa++
			break;
			case "QUAT":
			acumQu += cantidad;
			contQu++

			break;

		}
	
	  
	}

	if(contAl != 0 ){
		promedioAl = acumAl / contAl; 
	}
	if(contIa != 0){
		promedioIa = acumIa / contIa;;
	}
	if(contQu != 0){
		promedioQu = acumQu / contQu;
	}

	
	
	switch(categoria){
		case "DETERGENTE":
		acumDet += cantidadCat
		contDet++;
		break;
		case "desinfectante":
		acumDesinf += cantidadCat
		contDesinf++
		break;
		case "bactericida":
		acumQu += cantidadCat;
		contBact++

		break;

	}
	if(acumDet > acumDesinf && acumDet > acumBact ){
		//acumalcohol sea mayor
			catMayor = "alcohol"
		
		
		}
		else if( acumIa > acumAl  &&  acumIa >= acumQu ){
		
			catMayor = "IAC"
			
		}
		
		else{
		
			catMayor = "QUAT"
		
	}
	

	if(precio <= 200 && categoria == "detergente"){
		unidadesDet = contDet
	}

	



	console.log("Promedio de alcohol" + promedioAl + " \nPromedio IAC " + promedioIa + " \nPromedio QUAT " + promedioQu )
	console.log("a categoria con mas cantidad de unidades en total de la compra "+ catMayor)
	console.log("unidades de detergente con precios menos a 200" + unidadesDet)
	

}
/*a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos 
*/