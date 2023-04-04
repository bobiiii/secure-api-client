import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from './useAuth'
function Home() {
    const { auth, phone } = useAuth()

    return (<>{auth ?
        <div className='display-5 text-center mt-4'><h1>You are logged in as {phone}</h1>

            <Link className='display-6 text-center ' to='/data'>Goto Data Page </Link>
            <br /> <Link className='display-6 text-center ' to='/login'>Back to Login Page </Link>
        </div> :

        <div className='text-center fs-2 mt-4'><h1>You dont have permission to view this page</h1>

            <Link className='display-6 text-center ' to='/data'>Goto Data Page </Link>
            <br /> <Link className='display-6 text-center ' to='/login'> Back to Login Page  </Link>
        </div>}
    </>)
}

export default Home