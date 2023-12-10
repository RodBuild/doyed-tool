import { View, Text, ScrollView, ImageBackground, Image, Platform, Linking } from 'react-native'
import { useNavigation } from 'expo-router'
import mockData from '../../data/mockFeed.json'
import React from 'react'
import PressableButton from '../PressableButton/PressableButton'

export default function Feed() {
  const feedData = mockData.oct23
  const navigation = useNavigation()

  function TopBanner() {
    const data = feedData.topBanner
    return (
      <View>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 30,
            fontWeight: 600,
            marginVertical: 15,
            textAlign: 'left',
            maxWidth: '75%',
          }}
        >
          {data.header}
        </Text>
        <View
          style={{
            backgroundColor: '#CBD1D7',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 20,
            alignSelf: 'center',
            alignContent: 'center',
            marginHorizontal: 15,
            marginBottom: 15,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              textAlign: 'center',
            }}
          >
            {data.subheader}
          </Text>
        </View>
        <ImageBackground resizeMode="cover" style={{ width: '100%', height: 250 }} source={{ uri: data.image }}>
          <View
            style={{
              height: 40,
              overflow: 'hidden',
              width: '100%',
              position: 'absolute',
              bottom: 0,
            }}
          >
            <ImageBackground
              source={{ uri: data.image }}
              style={{
                width: '100%',
                height: 250,
                position: 'absolute',
                bottom: 0,
                justifyContent: 'flex-end',
              }}
              blurRadius={Platform.OS === 'ios' ? 8 : 4}
            ></ImageBackground>
          </View>
        </ImageBackground>
      </View>
    )
  }

  function MiddleBanner() {
    const data = feedData.middleBanner
    const Card = ({ image, text, onPress }) => {
      return (
        <PressableButton
          style={{ backgroundColor: '#CBD1D7', width: 110, height: 120, marginLeft: 10 }}
          onPress={onPress}
        >
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 65, height: 65 }} source={{ uri: image }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
            <Text numberOfLines={1} style={{ fontSize: 15 }}>
              {text}
            </Text>
          </View>
        </PressableButton>
      )
    }

    return (
      <View style={{ bottom: 40, overflow: 'scroll' }}>
        <ScrollView horizontal>
          {data.contents.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                text={item.text}
                onPress={() => {
                  if (item.url === 'default') {
                    console.log('default')
                    if (item.text.toLowerCase() === 'services') {
                      navigation.navigate('(tabs)/services')
                    } else if (item.text.toLowerCase() === 'quote') {
                    } else if (item.text.toLowerCase() === 'contact us') {
                      navigation.navigate('contactus')
                    } else {
                      navigation.navigate('(tabs)/services')
                    }
                  } else {
                    Linking.openURL(item.url)
                  }
                }}
              />
            )
          })}
        </ScrollView>
      </View>
    )
  }

  return (
    <ScrollView>
      <TopBanner />
      <MiddleBanner />
      <View>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  )
}
