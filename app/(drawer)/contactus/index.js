import { View, ScrollView } from 'react-native'
import { Header, ContactUs, Copyright } from '../../../components/index'

export default function ContactUsPage() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <ContactUs />
        <Copyright />
      </ScrollView>
    </View>
  )
}
