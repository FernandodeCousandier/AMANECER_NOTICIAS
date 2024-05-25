document.addEventListener('DOMContentLoaded', () => {         //hago que js se inicie una vez cargado el HTML
    const form = document.getElementById('all');                //creo const form. 
    const warnings = document.getElementById('warnings');          //creo la const warnings

    form.addEventListener('submit', (evento) => {                        //creo un evento a partir del boton submit
        let texto = '';                                             //creo la variable txt
        let mensaje = false;                                    //   creo variable mensj y la inicializo en false (como un while)
        const nombre = document.getElementById('fname').value;            //creo las const de cada input
        const apellido = document.getElementById('lname').value;             //  ""      ""
        const telefono = document.getElementById('tel').value;                
        const email = document.getElementById('mail').value;                 //      ""
        const pass = document.getElementById('pass').value;                       
        const datos = document.getElementById('dato').value;                  //    ""

        if (nombre ===' ') {                                            //si nombre es igual a nada
            texto += 'El campo nombre debe estar COMPLETO.<br>';            // tonces la variable texto imprime
            mensaje = true;                                                 // mensaje es verdadero
        }
        if (apellido ===' ') {                                              // IDEM ARRIBA                                              
            texto += 'El campo apellido debe estar COMPLETO.<br>';
            mensaje = true;
        }
        if (!telefono.match(/^\+54 9 \d{10}$/)) {                           //cambio el estado la var mensj y le digo que a partir de ^ y los caracteres marcados, cuente diez digitos mas
            texto += 'El campo teléfono debe estar COMPLETO.<br>';                // si estan los diez no nostrar    
            mensaje = true;                                                 //porque esto es verdadero
        }
        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {                  // similar al telefono, pero con caracteres. en cada [le digo que habra una cadena de carac] en el medio concateno el @ [vuelvo a sumar caract] y luego del .solo sumo 2 letras como minimo
            texto += 'El email no es válido.<br>';                          // mismo pero invertido ya que es verdadero
            mensaje = true;
        }
        if (pass.length < 6) {                                              // Aca le solicito que el pass sea mayor a 6 caracteres
            texto += 'La contraseña debe tener al menos 7 caracteres.<br>';
            mensaje = true;
        }
        if (!datos) {                                                           // toy cansado, como los de arriba
            texto += 'La fecha de nacimiento no puede estar vacía.<br>';
            mensaje = true;
        }

        if (mensaje) {
            warnings.innerHTML = texto;
            evento.preventDefault();
        } else {
            warnings.innerHTML =' ';
        }
    });
});
