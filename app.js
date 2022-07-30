
//function suma(num1, num2)

//{var n;
//n= num1 + num2;
 //return n;

//}

//var resultado;

//function pedirNombre() {
//let nombre = prompt ('ingresar nombre')

//alert('Bienvenido' + nombre + 'Disfrute'   )

//}
//for(let i = 0; i < 3; i++) {
    //pedirNombre() 
//}

//function saludar(usuario) {
    //console.log("Bienvenidos" + usuario)

//}
//saludar("Remitente")




function datosPersonales (nombre, apellido, edad, dni ,altura) {
    console.log('Nombre:'+ nombre)
    console.log('Apellido:' + apellido)
    console.log('Edad:' + edad)
    console.log('Dni:' + dni)
    console.log('Altura:'+ altura)
}

  
let NombreUsuario = prompt ('Ingrese su nombre')
let ApellidoUsuario = prompt ('Ingrese su apeliido')
let EdadUsuario = prompt('Ingrese su edad')
let DniUsuario = prompt('Ingrese su dni')
let AlturaUsuario = prompt ('Ingrese su altura')

 datosPersonales (NombreUsuario , ApellidoUsuario , EdadUsuario ,
    DniUsuario , AlturaUsuario)

   let array = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
    array.forEach((dia) => {
        console.log("dia -> ", dia);
    });






 //28/7
    const numeros =[0]

    const agenda =['Levantarse,Hacer la cama, Lavarse los dientes, cambiarse, desayunar,salir,cerrar las puertas,viajar,volver,cenar,dormir']


    console.log(agenda[0])
    

   // let array = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]

//array.forEach((dia) => {
   // console.log("dia -> ", dia);
//});




    //const buscaragenda = (tarea) =>
    //{
        //for(let i=0; i <agenda.length; i++){
           // if(tarea === agenda[i]){
             //   alert('tarea completa')
             // return
                
           // }
            
               // alert('tarea no completa')
            
       // }
   // }
   // buscartarea('viajar')