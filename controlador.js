
let nombrebd = "Santiago"
let emailbd = "correo@hotmail.com"
let telefonobd = 12345
let asuntobd = "Hola"
let mensajebd = "Mensaje"

let botonFormulario=document.getElementById("enviar")
let cajaFormularioNombre = document.getElementById("nombre");
let cajaFormularioEmail = document.getElementById("email");
let cajaFormularioTelefono = document.getElementById("telefono");
let cajaFormularioAsunto = document.getElementById("asunto");
let cajaFormularioMensaje = document.getElementById("mensaje");
console.log(botonFormulario)

botonFormulario.addEventListener("click",function(evento){

evento.preventDefault()

let nombreUsuario=cajaFormularioNombre.value
let email = cajaFormularioEmail.value
let telefono = cajaFormularioTelefono.value
let asunto = cajaFormularioAsunto.value
let mensaje = cajaFormularioMensaje.value

if(nombreUsuario==nombrebd && email==emailbd && telefono==telefonobd && asunto==asuntobd && mensaje==mensajebd){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: " Tus credenciales son correctas",
            icon: "success"
        })
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops... "+nombreUsuario+" Tienes un problema",
            text: "Verifica tus credenciales",
            
          });

        }
})


/* document.getElementById("enviar").addEventListener("click", function(evento) {


    evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email = cajaEmail.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    let mensaje = cajaMensaje.value

    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Mensaje:', mensaje)

   
}); */
