import { Pressable, Animated } from 'react-native'

/**
 * Wrap components to make them have a pressable effect
 */
export default function PressableButton({ children, onPress, style }) {
  const opacityValue = new Animated.Value(1)

  const fadeIn = () => {
    Animated.timing(opacityValue, {
      toValue: 0.7,
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
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} onPress={onPress}>
      <Animated.View
        style={{
          ...style,
          opacity: opacityValue,
        }}
        children={children}
      />
    </Pressable>
  )
}
