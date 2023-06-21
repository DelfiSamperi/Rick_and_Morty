import './Form.css';
import { useState } from 'react';
import validation from './validation';
/*
const validation = (userData) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass = /^(?=\w*\d)(?=\d)(?=\w*A-Z)(?=\w*[a-z])\S{6,10}$/;

    if (!regexEmail.test(userData.email)) errors.email = "Debe ser un correo electrónico";
    if (!userData.email) errors.email = 'El nombre de usuario no puede estar vacío';
    if (userData.email.length > 35) errors.email = 'El nombre de usuario tiene demasiados caracteres';
    if (!regexPass.test(userData.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un numero';
    return errors;
} */

export default function Form({login}) {
    
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input
                    className={errors.email && 'warning'}
                    value={userData.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Insert email...'
                />
                <p className='danger'>{errors.email ? errors.email : null}</p>

                <label>Contraseña</label>
                <input
                    className={errors.password ? 'warning' : 'success'}
                    value={userData.password}
                    name='password'
                    onChange={handleChange}
                    placeholder='Insert password...'
                />
                <p className='danger'> {errors.password ? errors.password : null} </p>

                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}
