import './Form.css';

export default function Form() {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            [event.target.email] = event.target.value,
            [event.target.password] = event.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={}>
                
                <label>Email</label>
                <input value={userData.email} name='email' placeholder='Insert email...' />
                <p className='danger'>El email es incorrecto</p>
                
                <label>Contraseña</label>
                <input value={userData.password} name='password' placeholder='Insert password...' />
                <p className='danger'>La contraseña es incorrecta</p>
                
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}
