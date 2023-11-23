import { useState } from "react"

const useRegister = () => {
    
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [data,setData] = useState(null)

    const fetchApi = async ({dataUser,URL_API}) => {

        setLoading(true)

        const body = {
            method : 'POST',
            body : JSON.stringify(dataUser),
            headers : { 'Content-Type': 'application/json' }
        }

        try {
            const res = await fetch(URL_API,body)
            const data = await res.json()
            setData(data)
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error)
        }
    }

    return {
        loading,
        error,
        data,
        fetchApi
    }

}

export default useRegister