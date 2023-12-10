import { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, Image } from 'react-native'
import { Link } from 'expo-router'
import { useFetch } from '../../hooks/index'
import mockData from '../../data/mockProducts.json'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../assets/colors/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Card({ image, text }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          width: 380,
          flexDirection: 'row',
          backgroundColor: COLORS.gray,
          borderRadius: 20,
          margin: 5,
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: 'center',
        }}
      >
        <View style={{ width: 50 }}>
          <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Text numberOfLines={1} style={{ fontSize: 20, textAlign: 'center' }}>
            {text}
          </Text>
        </View>
        <View style={{ width: 50 }}>
          <Icons name="chevron-right" size={50} color={COLORS.primary} />
        </View>
      </View>
    </View>
  )
}

export default function ProductsSmall() {
  const [productsData, setProductsData] = useState(null)
  const [refetch, setRefetch] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const deleteData = async () => {
      await AsyncStorage.clear()
    }
    const getData = async (key) => {
      try {
        const currentTime = Number(new Date())
        console.log(currentTime)
        const value = await AsyncStorage.getItem(key)
        if (!value) {
          console.log('No data found')
          setRefetch(true)
        } else {
          const data = JSON.parse(value)
          console.log('from-get: ', data)
          if (currentTime >= data.expires) {
            console.log('Time is expired')
            setProductsData(data)
            setRefetch(true)
          } else {
            console.log('Data exists and is not expired')
            setProductsData(data)
          }
        }
      } catch (error) {
        setError(error)
      }
    }
    const fetchAndStore = async (key) => {
      try {
        // Wait for API to be ready
        // const axiosOptions = {
        //   method: 'GET',
        //   url: 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'X-RapidAPI-Key': '8e3a2ea565mshb96ad63c65e3e27p15dfe9jsn1aee0e044589',
        //     'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
        //   },
        // }
        // const response = await axios.request(axiosOptions)
        // console.log('from-post: ', response.data)
        const response = mockData
        const date = new Date()
        const dataToStore = {
          expires: Number(date) + 900000,
          // expires: Number(date) + 10000,
          data: response,
        }
        setProductsData(dataToStore)
        await AsyncStorage.setItem(key, JSON.stringify(dataToStore))
      } catch (error) {
        setError(error)
      }
    }
    if (refetch === true) {
      console.log('fetching and storing data')
      fetchAndStore('doyed-products-all')
    } else {
      getData('doyed-products-all')
    }
  }, [refetch])

  const RenderItem = ({ item }) => {
    return (
      <Link href={{ pathname: 'home/services/[id]', params: { id: item.id } }}>
        <Card image={item.imageShort} text={item.name} />
      </Link>
    )
  }

  return (
    <View style={{ alignItems: 'center' }}>
      {/* <FlatList data={mockData} renderItem={renderItem} keyExtractor={(item) => item.id} /> */}
      {productsData?.data?.map((item) => {
        return <RenderItem item={item} key={item.id} />
      })}
      {/* <Text>productsData</Text> */}
    </View>
  )
}
