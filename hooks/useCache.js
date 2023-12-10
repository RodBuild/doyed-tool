import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Hook to retrieve existing data from the user's device.
 * @param {string} key
 * @param {bool} force force the data to be stored
 */
export const useCache = (key) => {
  const [isPending, setIsPending] = useState(true)
  const [refetch, setRefetch] = useState(false)
  const [storedData, setStoredData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const [cacheData, setCacheData] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const getData = async () => {
      try {
        const currentTime = Number(new Date())
        const value = await AsyncStorage.getItem(key)
        if (!value) {
          console.log('No data found')
          setRefetch(true)
        } else if (value && value?.expires <= currentTime) {
          console.log('Time is expired')
          setCacheData(JSON.parse(value))
          setRefetch(true)
        } else {
          setCacheData(JSON.parse(value))
        }
      } catch (error) {
        setError(error)
      }
    }
    getData()
    // if 
  }, [key])

  return { storedData, error, refetch, isPending }
}
