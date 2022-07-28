
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
   // console.log("Bienvenidos" + usuario)

//}
//saludar("Remitente")




function datosPersonales (nombre, apellido, edad, peso,altura) {
    console.log('Nombre'+ nombre)
    console.log('Apellido' + apellido)
    console.log('Edad' + edad)
    console.log('Peso' + peso)
    console.log('Altura'+ altura)
}

  
let NombreUsuario = prompt ('Ingrese su nombre')
let ApellidoUsuario = prompt ('Ingrese su apeliido')
let EdadUsuario = prompt('Ingrese su edad')
let PesoUsuario = prompt('Ingrese su peso')
let AlturaUsuario = prompt ('Ingrese su altura')

 datosPersonales (NombreUsuario , ApellidoUsuario , EdadUsuario ,
    PesoUsuario , AlturaUsuario)


    //28/7
    const numeros =[0,1,2,3,4,5,6,7]

    const agenda =['Levantarse','Hacer la cama', 'Lavarse los dientes', 'cambiarse', 'desayunar',
    'salir','cerrar las puertas','viajar']

    console.log(agenda[0])
    console.log(agenda[1])
    console.log(agenda[2])
    console.log(agenda[3])
    console.log(agenda[4])
    console.log(agenda[5])
    console.log(agenda[6])
    console.log(agenda[7])

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