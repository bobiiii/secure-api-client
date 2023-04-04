import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { read_cookie } from "sfcookies"
function Data() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function dataFromServer() {
            const token = read_cookie("token")
            try {
                const res = await axios.get("https://secur-api.cyclic.app/auth/data", { headers: { "x-access-token": token } })
                if (res.status === 200) {
                    setData(res.data)
                    setLoading(false)
                }
            }
            catch (err) {
                if (err.response.status == 498 || err.response.status == 404) {
                    setData(err.response.data)
                    setLoading(false)
                }
            }
        }
        dataFromServer()
    }, [])
    return (
        <div className='text-center'><h1>Server Response</h1>
            <br />
            {loading ? "Please wait  " : data


            }
            <br />
            <Link className='display-6 text-center ' to='/login'>Back to Login Page  </Link>
        </div>
    )
}

export default Data