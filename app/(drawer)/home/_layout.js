import { Tabs } from 'expo-router/tabs'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../../assets/colors/colors'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 120,
          backgroundColor: COLORS.primary,
        },
        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tabs.Screen
        // Name of the route to hide.
        redirect={true}
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        name="(tabs)/feed"
        options={{
          title: 'Feed',
          tabBarLabel: 'Feed',
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? 'newspaper-variant' : 'newspaper-variant-outline'}
              size={50}
              color={focused ? COLORS.whiteactive : COLORS.whiteinactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/services"
        options={{
          title: 'Services',
          tabBarLabel: 'Services',
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? 'view-grid' : 'view-grid-outline'}
              size={50}
              color={focused ? COLORS.whiteactive : COLORS.whiteinactive}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/checkout"
        options={{
          title: 'Checkout',
          tabBarLabel: 'Checkout',
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? 'cart' : 'cart-outline'}
              size={50}
              color={focused ? COLORS.whiteactive : COLORS.whiteinactive}
            />
          ),
          // We will use a useRef
          tabBarBadge: 0,
        }}
      />
    </Tabs>
  )
}
