import { Stack } from 'expo-router'
// export default Stack
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Login',
          headerLeft: () => null,
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default Layout
