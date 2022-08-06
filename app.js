
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

/////////////////////////////////////////
let fecha = new Date(6),
  hora = fecha.getHours(6);

let saludo = (hr) => {
  if (hr <= 5) {
    return 'a mimir!!!';
  } else if(hr >= 6 && hr <= 11) {
    return 'Buenos días!!!';
  } else if(hr >= 12 && hr <= 18) {
    return 'Buenas tardes!!!';
  } else {
    return 'Buenas noches!!!';
  }
};

console.log( saludo(hora) )


    //////////////////////////////////////////


    console.log(document.getElementById("titulo"))
    console.log(document.getElementById('texto'))


    const nombre =prompt ('ingrese su nombre')
    titulo.innerText="Bienvenido:" +  nombre + "!!"

    const div =document.createElement('div')
    div.className = "datos /2"
    div.innerHTML = "<p> Introduccion</p>"

    document.body.append(div)


    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

    const listadias = document.getElementById('dias')

    for(const dia of dias ) {
        const li = document.createElement('li')

        li.clasName="dias"

        li.innerText = dias

        listadias.append(li)
    }
    //////////

    const btn1 =document.querySelector('#btn1')

    btn1.addEventListener('click',() =>{
      console.log("Aceptado")
    })

    btn1.addEventListener('mouseover', ()=>
    {btn1.classList.toggle('btn-danger')})


    btn2.addEventListener('click',()=>{
    btn2.innerText= '=('
    btn2.disabled =true })


    btn3.onclick =() => {
      console.log('click boton 3')
    }

    btn3.onmouseover =() => {
      console.log("mouse over 3")
    }


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