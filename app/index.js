import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import { PressableButton } from '../components/index'
import { Link, Redirect } from 'expo-router'
// import { useFonts } from 'expo-font'

function Button({ text }) {
  return (
    <PressableButton style={{ backgroundColor: '#F8B604', color: 'white', minWidth: 120 }}>
      <Text style={{ color: 'white', fontWeight: 700, fontSize: 25, textAlign: 'center' }}>{text}</Text>
      {/* {children} */}
    </PressableButton>
  )
}

export default function Root() {
  // const [fontsLoaded] = useFonts({
  //   'Nunito-Regular': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
  // })
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded, fontError])

  // if (!fontsLoaded && !fontError) {
  //   return null
  // }

  const canContinue = true
  return (
    <SafeAreaView style={style.container}>
      {/* <Text>Landing Page</Text> */}
      {/* <View> */}
      {/* <Button text="Login"></Button> */}
      {/* <Button text="Register"></Button> */}
      {/* </View> */}
      {/* <Link href="/"></Link> */}
      {/* {canContinue ? <Link href="/home/home">Home</Link> : <Text>Seems like you cannot go to Home Page</Text>} */}
      {/* <Link href="/home/home" >Home</Link> */}
      <View style={style.logoContainer}>
        {/* <View style={{ alignContent: 'center', justifyContent: 'center', borderColor: 'white', borderWidth: 2 }}> */}
        <Image style={style.logoImage} source={require('../assets/brand/2.png')} />
        {/* </View> */}
        <Text style={style.logoText}>The best service you can get</Text>
      </View>
      <View style={style.authContainer}>
        <Text>Continue as a guest</Text>
        <View style={style.authButtons}>
          <Button text="Login" />
          <Button text="Register" />
          {/* <Text>Login</Text> */}
          {/* </Button> */}
          {/* <Button> */}
          {/* <Text>Register</Text> */}
          {/* </Button> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

// primary: #F8B604

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logoContainer: {
    flex: 1,
    // width: 100,
    // height: 100,
    // backgroundColor: 'white',
  },
  logoImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  authContainer: {
    // flex: 1,
    backgroundColor: 'orange',
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
