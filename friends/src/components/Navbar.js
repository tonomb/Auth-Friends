import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className='flex justify-end'>
            <Link className='bg-teal-200 rounded p-2 m-10 ' to='/add-friend' >add new friend</Link>
        </div>
    )
}

export default Navbar;