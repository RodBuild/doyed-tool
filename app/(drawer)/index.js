import { View, Text, StyleSheet } from 'react-native'
import { Redirect } from 'expo-router'

export default function IndexPage() {
  const temp = true

  // if (temp) {
  //   return <Redirect href={'/home'} />
  // } else {
  //   return (
  //     <View>
  //       <Text>Welcome Back!</Text>
  //     </View>
  //   )
  // }
  return (
    <View>
      <Text>Welcome Back!</Text>
      <Text>If you can see this page, that means you are in developer Mode! Hurray for ya!</Text>
    </View>
  )
}
