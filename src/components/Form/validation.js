const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=\w*\d)(?=\d)(?=\w*A-Z)(?=\w*[a-z])\S{6,10}$/;

const validation = (userData) => {
    if(!regexEmail.test(userData.email)) errors.email = "Debe ser un correo electrónico";
    if(!userData.email) errors.email = 'El nombre de usuario no puede estar vacío';
    if(userData.email.length > 35) errors.email = 'El nombre de ususario tiene demasiados caracteres';
    if(!regexPass.test(userData.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un numero';
}
