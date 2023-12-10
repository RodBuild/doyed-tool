import { Pressable, Animated, View, Text } from 'react-native'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'

export default function PressableIcon({ iconName, iconSize, iconColor, style, onPress }) {
  const opacityValue = new Animated.Value(1)

  const fadeIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.75,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={onPress} style={style}>
      <Animated.View style={{ opacity: opacityValue }}>
        <Icons name={iconName ?? 'alert'} size={iconSize ?? 20} color={iconColor ?? 'black'} />
      </Animated.View>
    </Pressable>
  )
}
