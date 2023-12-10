import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { PressableButton, Spacer } from '../index'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'

export default function Header() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor="black" />
      <Spacer vertical size={20} />
      <View style={styles.topSection}>
        <View style={styles.topSectionElements}>
          <Image style={styles.logoImage} source={require('../../assets/brand/2.png')} />
          <View style={styles.optionIcons}>
            <Icons name="message-reply-text-outline" size={40} color="white" />
            <Spacer horizontal size={10} />
            <PressableButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icons name="menu" size={40} color="white" />
            </PressableButton>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'black',
  },
  topSection: {
    paddingHorizontal: 15,
  },
  topSectionElements: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionIcons: {
    flexDirection: 'row',
  },
})
