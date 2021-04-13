
// let array=[];
// array[0]="Andrés Gelvez Suárez";
// array[1]=37;
// array[2]=1.60;
// array[3]=true;
// array[4]=["Programar","Cocinar"];
// 
// array[5]=function (){return `Hola soy la funcion del array`;
// };
// console.log(array);

// function verificar(){
    // letopc='';
    // do{opc=prompt(`Que tipo de usuario eres\n\n1. profesor\n2.estudainte `);
        // switch (opc) {
            // case '1':
                // opc=true;
                // break;
            // case'2':
            // opc=false;
            // break;
            // default:
                // opc=null;
                // alert("la opcion seleccionada no existe")
                // break;
        // }
// 
// 
    // break;
// }while(true);
// return}
// 
// let litaspersonal=[];
// listapersonal[0]=prompt("ingrese su nombre");
// listapersonal[1]=parseint(prompt("ingrese su nombre"));
// listapersonal[2]=verificar();
// console.log(listapersonal);

// let listado =[zapatos, camisa];
// 
// console.log(listado);
// 
// let borrar=listado.shift();
// 
// console.log(listado);
// 

//Crear una lista (Array) y pedir los datos del usuario x maximo 10
//datos, usando el metodo unshift, eliminar los datos que deseas con
//el metodo shift  mostrar el resultado en consola o en alert
//Cuanto datos elimino en otro array y mostrarlos
//-----------------------------------------------------------------------------------------------
let cantidadDeDatos = 0;
let datospersonales=[];

cantidadDeDatos = parseInt(prompt("Cuantos datos deseas guardar"));

   
for (let i = 0; i < cantidadDeDatos; i++) {
    datospersonales.unshift(prompt(`ingrese el datos ${i}`));
         
    alert (datospersonales); 
     
   }

for (let x = 1; x <= 3; x++); 
alert (datospersonales);
eliminar = datospersonales.shift();
alert(datospersonales);
        
// -----------------------------------------------------------------------------------------------
//alert (datospersonales);



// expected output: 5

//console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


