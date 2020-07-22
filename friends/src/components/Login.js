import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'
import axios from 'axios';


const initialFormValues={
    username:'Lambda School',
    password:'i<3Lambd4'
}

// const initialFormValues={
//     username:'',
//     password:''
// }

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
        <div className='flex items-center justify-center h-screen w-screen'>
            <form className='flex flex-col bg-blue-500 p-10 rounded' onSubmit={handleLogin}>
                <label className='text-2xl text-gray-800' >
                    <input 
                        className='p-2 my-3 rounded'
                        type='text'
                        onChange={handleChange}
                        name='username'
                        value={formValues.username}
                        placeholder='username'
                     />
                </label>
                <label className='text-2xl text-gray-800 w-auto'>
                    <input 
                        className='p-2 my-3 rounded'
                        type='password'
                        onChange={handleChange}
                        name='password'
                        value={formValues.password}
                        placeholder='password'

                         />
                </label>
                <button className='bg-blue-800 text-white rounded w-3/6 self-end p-2' >Log In</button>
            </form>
        </div>
    )
}

export default Login;