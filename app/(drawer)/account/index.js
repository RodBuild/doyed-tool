import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { Header } from '../../../components/index'

export default function AccountPage() {
  return (
    <View>
      <Header />
      <Text>Here goes the routing for account page</Text>
      <TouchableOpacity>
        <Link href={{ pathname: 'account/auth/login', params: { name: 'Bacon' } }}>Go to Login</Link>
        <Link href={{ pathname: 'account/auth/signup', params: { name: 'Bacon' } }}>Go to SignUp</Link>
      </TouchableOpacity>
    </View>
  )
}
