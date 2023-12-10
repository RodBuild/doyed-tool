import { View, Text } from 'react-native'
import PressableButton from '../PressableButton/PressableButton'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'

/**
 * A pressable Button with text on the left and an icon on the right.
 */
export default function RowButton({ text, textSize, icon, iconColor, iconSize, onPress }) {
  const containerStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const sectionStyle = {
    maxWidth: 450,
    minHeight: 50,
    maxHeight: 100,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  }

  return (
    <PressableButton style={containerStyle} onPress={onPress}>
      <View style={{ ...sectionStyle, alignItems: 'flex-start', flex: 2 }}>
        <Text style={{ fontSize: textSize ?? 20 }}>{text ?? 'default text'}</Text>
      </View>
      <View style={{ ...sectionStyle, alignItems: 'flex-end', flex: 1 }}>
        <Icons name={icon ?? 'alert'} size={iconSize ?? 30} color={iconColor ?? 'black'} />
      </View>
    </PressableButton>
  )
}
