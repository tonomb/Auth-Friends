import React from 'react'
import { Link, useRouteMatch  } from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <h1>This is a navbar</h1>
            <Link to='/add-friend' >add new friend</Link>
        </div>
    )
}

export default Navbar;