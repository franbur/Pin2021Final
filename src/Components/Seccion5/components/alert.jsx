
function Alert(props){
    if (props.type == 0) {
        return (
            <></>
        )
    }else if (props.type == 1){
        return (
            <div class="alert alert-warning" role="alert">
                <b>Por favor completa todos los campos</b><br />
                <p>Todos los campos deben ser válidamente comletados para enviar el formulario.</p>
            </div>
        )
    } else if (props.type == 201){
        return (
            <div class="alert alert-success" role="alert">
                <b>Tu mensaje ha sido recibido! </b><br />
                <p>Reisa tu correo electrónico para la verificación.</p>
            </div>
        )
    } else if (props.type == 200){
        return (
            <div class="alert alert-warning" role="alert">
                <b>Lo sentimos, hubo un problema</b><br />
                <p>Los datos no son válidos, por favor fuelve a intentarlo.</p>
            </div>
        )
    }
}

export default Alert;