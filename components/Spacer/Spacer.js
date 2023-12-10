import { View } from 'react-native'

export default function Spacer({ vertical = false, horizontal = false, size = 0 }) {
  return (
    <View
      style={{
        marginVertical: vertical ? size : 0,
        marginHorizontal: horizontal ? size : 0,
      }}
    />
  )
}
