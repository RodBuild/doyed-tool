import { Link, useRouter } from 'expo-router'
import { PressableButton, Spacer } from '../components/index'
import { View, Text, StyleSheet, Image, Platform, StatusBar, SafeAreaView } from 'react-native'

function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 250, resizeMode: 'contain', alignSelf: 'center' }}
      source={require('../assets/brand/2.png')}
    />
  )
}

function Button({ text }) {
  const targetRoute = text === 'Login' ? '(drawer)/account/auth/login' : '(drawer)/account/auth/signup'
  return (
    <PressableButton style={{ backgroundColor: '#F8B604', color: 'white', minWidth: 120, paddingVertical: 5 }}>
      <Link style={{ color: 'white', fontWeight: 700, fontSize: 25, textAlign: 'center' }} href={targetRoute}>
        {text}
      </Link>
    </PressableButton>
  )
}

export default function StartingPage() {
  const router = useRouter()

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={style.logoContainer}>
        <LogoTitle />
        <Text style={style.logoText}>The best service you can get</Text>
      </View>
      <View style={style.authContainer}>
        <PressableButton onPress={() => router.replace('/home')}>
          <Text style={style.authText}>Continue as a guest</Text>
        </PressableButton>
        <View style={style.authButtons}>
          <Button text="Login" />
          <Spacer horizontal size={50} />
          <Button text="Register" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  logoImage: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoText: {
    maxWidth: 200,
    color: 'white',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  authContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  authText: {
    textAlign: 'center',
    color: '#F8B604',
    fontSize: 25,
    marginBottom: 25,
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
