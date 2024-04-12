document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()


    // Validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === '' ){ //trim(recortar)borra los espacios vacios de los lados para tomnar solo la cadena de caracteres.
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        // errorNombre.classList.remove('error-message')
    }

    // Validar corre electronico
    
    let emailEntrada = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // patron de validacion

    if(!emailPattern.test(emailEntrada.value)){  // El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
        errorEmail.textContent = 'Por favor, introducí un mail válido'
        errorEmail.classList.add('error-mesage')
    } else{
        errorEmail.textContent=''
        // errorEmail.classList.remove('error-message')
    }

    // Validar contraseña

    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    if(contrasenaEntrada.value.length < 8){
        contrasenaError.textContent = " La contraseña debe tener al menos 8 caracteres"
        contrasenaError.classList('error-message')
    } else{
        contrasenaError.textContent= ''
        // contrasenaError.classList.remove('error-message')
    }

    // Si todos los campos son validos


            // si las variables estan vacias es false, entonces hay que negarlas para que sean true
    if(!errorNombre.textContent && !errorEmail.textContent && !contrasenaError.textContent){

       
        //Aca va el backend que recibe la información
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset();
    }

})
 