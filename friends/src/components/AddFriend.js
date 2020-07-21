import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { useHistory} from 'react-router-dom'

const initialFormValues={
    name:'antonio',
    age: 27,
    email: 'test@test.com'
}

function AddFriend(){
    const history = useHistory()
    const [formValues, setFormValues] = useState(initialFormValues);


    const handleSumbit = (e) =>{
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends', formValues)
            .then(res =>{
                console.log('added new friend to friends list');
                console.log(res);
                history.push('/')
            })
            .catch( err=>{
                console.log(err);
            })
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
        <form onSubmit={handleSumbit}>
            <label>name
                <input 
                type='text'
                onChange={handleChange}
                name='name'
                value={formValues.name} />
            </label>
            <label>age
                <input type='number' onChange={handleChange} name='age' value={formValues.age} />
            </label>
            <label>email
                <input type='email' onChange={handleChange} name='email' value={formValues.email}/>
            </label>
            <button>Add Friend</button>
        </form>
    </div>
    )
}

export default AddFriend;