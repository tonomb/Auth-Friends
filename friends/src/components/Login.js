import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'
import axios from 'axios';


const initialFormValues={
    username:'Lambda School',
    password:'i<3Lambd4'
}

function Login (){
    const history = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleLogin = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', formValues)
            .then(res =>{
                //sets auth token to local storage
                window.localStorage.setItem('token', JSON.stringify(res.data.payload))
                console.log('Logged in, set token to localstorage');
                history.push('/')
            })
            .catch(err =>{
                console.log(err.response);
                console.log(`${err.response.data.error} status ${err.response.status}`);
            })
        

        setFormValues(initialFormValues)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <label>Username
                    <input 
                        type='text'
                        onChange={handleChange}
                        name='username'
                        value={formValues.username}
                     />
                </label>
                <label>Password
                    <input 
                        type='password'
                        onChange={handleChange}
                        name='password'
                        value={formValues.password}

                         />
                </label>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;