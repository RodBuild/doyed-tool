import { useLocalSearchParams } from 'expo-router'
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native'
import { Header, PressableButton, Spacer } from '../../../../../components/index'
import { useFetch } from '../../../../../hooks'
import { COLORS } from '../../../../../assets/colors/colors'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import { useState } from 'react'

import mockData from '../../../../../data/mockProducts.json'
import { ScrollView } from 'react-native-gesture-handler'

export default function Page() {
  const { id, contents } = useLocalSearchParams()

  // const fetch = useFetch() // To fetch data from API
  // const [data, setData] = useState(null)
  const mockItem = mockData.filter((item) => item.id === id)[0]
  console.log(mockItem.imageLarge)

  function AddServiceButton() {
    return (
      <PressableButton
        style={{
          backgroundColor: COLORS.primary,
          flexDirection: 'row',
          minWidth: 120,
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 50,
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 15, color: COLORS.white, textAlign: 'center' }}>REQUEST</Text>
      </PressableButton>
    )
  }

  function BackButton() {}

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Header />
        <BackButton />
        <View style={{ borderWidth: 2, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <View>
            <Text>Blog post: {id}</Text>
            <Image
              source={{
                uri: mockItem.imageLarge,
              }}
              style={{ height: 250, width: 350 }}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text numberOfLines={2} style={styles.headerText}>
              Moving Out Cleaning for Cool dudes and dudettes
            </Text>
            <Spacer vertical size={5} />
            <View style={styles.headerButton}>
              <AddServiceButton />
            </View>
          </View>
          <View>
            <View style={styles.contentContainers}>
              <Text style={styles.contentHeaders}>Description</Text>
              <Text>{mockItem.descriptionLarge}</Text>
              <View></View>
            </View>
            <View style={styles.contentContainers}>
              <Text style={styles.contentHeaders}>Description</Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Hourly Rate:</Text> {mockItem.hourRateDollars}
              </Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Frequencty:</Text> {mockItem.recommendations.frequency}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    margin: 15,
    maxWidth: 800,
    textAlign: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainers: {
    // minHeight: 200,
    borderWidth: 2,
    // maxWidth: 350,
  },
  contentHeaders: {
    borderWidth: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    fontWeight: '500',
    fontSize: 25,
  },
})
