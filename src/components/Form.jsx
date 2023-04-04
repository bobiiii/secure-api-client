import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from "react-spinners"
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import { bake_cookie } from "sfcookies"

function Form() {
    const { auth, setAuth, error, setError, phone, setPhone, password, setPassword } = useAuth()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post("https://secur-api.cyclic.app//auth/login", {
                phone, password
            })
            const token = res.data.msg
            bake_cookie("token", token)
            setLoading(false)
            setAuth(true)
            navigate("/")

        } catch (error) {
            if (error.response.status === 404) {
                setError(error.response.data)
            }
            if (error.response.status === 403) {
                setError(error.response.data)
            }
            if (error.response.status === 409) {
                setError(error.response.data)
            }
            setLoading(false)
        }

    }
    return (<>
        {auth ?
            <div className='text-center mt-4'>
                <h3>
                    "You are already logged in"
                </h3>
                <button className='btn btn-outline-primary my-2' onClick={() => { setAuth(false) }}>Logout</button>

            </div>
            :
            <form onSubmit={handleSubmit}>
                <div className='container text-center mt-4 '>
                    <h3 >{loading ? <div className='d-flex justify-content-center '> <FadeLoader color='blue' width={5} height={5} /></div> : "Login Form"}</h3>
                    <div className='text-danger '>{error}</div>
                    <div className="  mb-3">
                        <label htmlFor="exampleInputEmail1" className=" Form-label">Email address</label>
                        <br />
                        <input onChange={(e) => { setPhone(e.target.value) }} value={phone} type="number" className=" w-50   Form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="Form-text">We'll never share your Phone with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="Form-label">Password</label>
                        <br />
                        <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className=" w-50 Form-control" id="exampleInputPassword1" required />
                    </div>

                    <button type="submit" className="w-50 btn btn-primary"> Submit</button>

                </div>
                <div className=' text-center my-3'>
                    <span>(Credentials) Phone : 123 , Password : 123</span>
                </div>
            </form>

        }

    </>)
}

export default Form