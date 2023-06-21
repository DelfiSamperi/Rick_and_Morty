
export default function validation(input) {
    
    let errors = {};
    
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //const regexPass = /^(?=\w*\d)(?=\d)(?=\w*A-Z)(?=\w*[a-z])\S{6,10}$/;
    const regexPass = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) errors.email = "Debe ser un correo electrónico";
    if(!input.email) errors.email = 'El nombre de usuario no puede estar vacío';
    if(input.email.length > 35) errors.email = 'El nombre de usuario tiene demasiados caracteres';
    if(!regexPass.test(input.password)) errors.password = 'La contraseña debe tener al menos un numero';
    if(input.password.length < 6 || input.password.length > 10) {errors.password = "La contraseña debe tener entre 6 y 10 caracteres"};

    return errors;
}
