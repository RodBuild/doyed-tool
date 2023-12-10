import { View, Text, ScrollView } from 'react-native'
import { Header, ProductsSmall, ServiceCreate } from '../../../../../components/index'

export default function ServicesPage() {
  return (
    // <View>
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <ServiceCreate />
      <ProductsSmall />
    </ScrollView>
    // </View>
  )
}
