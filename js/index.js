/* 

Escriba un programa que calcule el peso de las frutas seleccionadas por un usuario a través de un menu con opciones,
el cual tendra la posibilidad de elegir varias hasta que escriba la opcion de finalizar compra, que al escogerla,
nos mostrara el peso total de las frutas elegidas.


*/


let lista = (`Escriba la fruta a pesar:
                                        Naranja
                                        Manzana
                                        Banana
                                        Frutilla
                                        Mandarina
                                        Finalizar`);

let naranja1 = 0, manzana1 = 0, banana1 = 0, frutilla1 = 0, mandarina1 = 0;
let total= 0;
;
while(lista !=="Finalizar"){
    let lista = prompt(`Escriba la fruta a pesar:
                                                  Naranja
                                                  Manzana
                                                  Banana
                                                  Frutilla
                                                  Mandarina
                                                  Finalizar`);
    
                        
    
    if(lista !== "Naranja" && 
       lista !== "Manzana" && 
       lista !== "Banana" && 
       lista !== "Frutilla" && 
       lista !== "Mandarina" && 
       lista !== "Finalizar")
       {
           alert("Ha ingresado una opción invalida");
         
        }

    else if( lista == "Naranja"){
        let cantidad = Number(prompt("Ingrese kg a llevar"));
        for(i = 0; i < cantidad; i++)
        {
            naranja1++;
        }        
    }

    else if( lista == "Manzana"){
        let cantidad = Number(prompt("Ingrese kg a llevar"));
        for(i = 0; i < cantidad; i++)
        {
            banana1++
        }        
    }

    else if( lista == "Banana"){
        let cantidad = Number(prompt("Ingrese kg a llevar"));
        for(i = 0; i < cantidad; i++)
        {
            banana1++
        }        
    }
    
    else if( lista == "Frutilla"){
        let cantidad = Number(prompt("Ingrese kg a llevar"));
        for(i = 0; i < cantidad; i++)
        {
            frutilla1++
        }        
    }

    else if( lista == "Mandarina"){
        let cantidad = Number(prompt("Ingrese kg a llevar"));
        for(i = 0; i < cantidad; i++)
        {
            mandarina1++
        }        
    }


    if (lista == "Finalizar"){  

        let resultado = mandarina1+manzana1+frutilla1+banana1+naranja1
        alert ("El peso total de sus productos es de: " + resultado + "kg.")}

         
}



