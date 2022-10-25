const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {

    punto[i].addEventListener('click',()=>{


        let posicion  = i

        let operacion = posicion * -50


        grande.style.transform = `translateX(${ operacion }%)`


        punto.forEach( ( cadaPunto , i )=>{

            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })
})

function valida_envia(){
    
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
 
    
    if (document.fvalida.telefono.value.length==0){
        alert("Tiene que escribir su numero de telefono")
        document.fvalida.telefono.focus()
        return 0;


 }

 
    if (document.fvalida.email.value.length==0){
        alert("Tiene que escribir su direccion de correo")
        document.fvalida.email.focus()
        return 0;
}

    if (document.fvalida.interes.selectedIndex==0){
           alert("Debe seleccionar el motivo de su contacto.")
           document.fvalida.interes.focus()
           return 0;
    }
 
  
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}