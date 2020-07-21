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
        <div>
            <h3>This is the friends list</h3>
            {
                friends.map(friend =>{
                    return <h2 key={friend.id}>{friend.name}</h2>
                })
            }
        </div>
    )
}

export default FriendsList;