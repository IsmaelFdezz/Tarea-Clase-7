/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.querySelector("#carta-a-santa")

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form["descripcion-regalo"].value


function validarCiudad(ciudad) {
    if (ciudad === "") {
        return 'El campo ciudad no puede estar vacio'
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El campo descripcion regalo debe tener menos de 100 caracteres"
    }
    
    if (descripcionRegalo === "") {
        return "El campo descripcion regalo no puede estar vacio"
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripcion regalo solo puede contener letras o numeros"
    }

    return ""
}


//pruebas

function probarValidarCiudad() {

    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad falló con un nombre de ciudad válido"
    )

    console.assert(
        validarCiudad("") === 'El campo ciudad no puede estar vacio',
        "validar ciudad no mostro un error cuando la ciudad es vacia" 
    )           
}

function probarValidarDescripcionRegalo() {

    console.assert(
        validarDescripcionRegalo("Regalo") === "",
         "Validar descripcion regalo falló con una descripción válida"
    )

    console.assert(
        validarDescripcionRegalo("dasddassdssadsasdfajknfjksandjfnasjkfnjkasdnfjkasdnfjknasdjkfnjknadsnfjkanfdjkadnsfjknadsjkfnajksdfnjasdsnfjk") === 
        "El campo descripcion regalo debe tener menos de 100 caracteres",
        "Validar ciudad no mostro un error al ingresar mas de 100 caracteres"
    )

    console.assert(
        validarDescripcionRegalo("") === "El campo descripcion regalo no puede estar vacio",
        "Validar descripcion regalo no mostro un error cuando la descripcion es vacia"
    )

    console.assert(
        validarDescripcionRegalo("..,,.,,,.") === "El campo descripcion regalo solo puede contener letras o numeros",
        "Validar descripcion regalo no valido que fueran solo numeross y letras"
    )
}

probarValidarCiudad()
probarValidarDescripcionRegalo()