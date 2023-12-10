import { SafeAreaView, View, Image, Text, Button } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { DrawerItemList } from '@react-navigation/drawer'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Drawer } from 'expo-router/drawer'
import { useNavigation } from 'expo-router'
import { PressableButton } from '../../components'
import { DrawerActions } from '@react-navigation/native'

export default function Layout() {
  const devMode = false
  const primaryColor = '#F8B604'

  function DrawerHeader() {
    const navigation = useNavigation()
    return (
      <SafeAreaView>
        <View
          style={{
            height: 155,
            width: '100%',
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: 'red',
          }}
        >
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingTop: 20,
            }}
          >
            <PressableButton onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
              <MaterialCommunityIcons name="close" size={35} color={primaryColor} />
            </PressableButton>
            <Image source={require('../../assets/brand/1.png')} />
          </View>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <DrawerHeader />
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }}
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
        }}
      >
        <Drawer.Screen
          redirect={devMode ? false : true}
          name="index"
          options={{
            drawerLabel: 'Index',
            title: 'Index',
            drawerItemStyle: { display: devMode ? 'flex' : 'none' },
          }}
        />
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="account"
          options={{
            drawerLabel: 'Account',
            title: 'Account',
          }}
        />
        <Drawer.Screen 
          name="contactus"
          options={{
            drawerLabel: 'Contact Us',
            title: 'Contact Us',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
