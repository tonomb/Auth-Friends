import React, {useState, useEffect} from 'react'
import {axiosWithAuth}from '../utils/axiosWithAuth'
import axios from 'axios'

import AddFriend from './AddFriend'

function FriendsList(){
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res =>{
                setFriends(res.data)
            })
            .catch(err =>{
                console.log('axios with auth not working');
                console.log(err);
            })
    },[])

    return(
        <div className='text-center'>
            <h3 className='text-4xl text-teal-900'>Friends</h3>
            {
                friends.map(friend =>{
                    return <h2 className='text-2xl p-3 bg-teal-100 my-5 w-3/6 mx-auto' key={friend.id}>{friend.name}</h2>
                })
            }
        </div>
    )
}

export default FriendsList;