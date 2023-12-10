import axios from 'axios'
import { useState, useEffect } from 'react'

export const useFetch = (options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const axiosOptions = options ?? {
          method: 'GET',
          url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '8e3a2ea565mshb96ad63c65e3e27p15dfe9jsn1aee0e044589',
            'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
          },
        }

        const response = await axios.request(axiosOptions)

        setIsPending(false)
        setData(response.data)
        // setError(null)
      } catch (error) {
        setError(`ERROR: ${error}`)
        setIsPending(false)
      }
    }
    fetchData()
  }, [options])

  return { data, isPending, error }
}
