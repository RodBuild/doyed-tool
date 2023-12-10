import { View, Text } from 'react-native'
import React from 'react'

export default function Title({ titleText, subTitleText, titleStyle, subTitleStyle }) {
  const defaultTitleStyle = {
    // marginLeft: 15,
    fontSize: 30,
    fontWeight: 600,
    marginTop: 15,
    marginBottom: subTitleText ? 5 : 15,
    textAlign: 'left',
    // maxWidth: '75%',
  }
  const customTitleStyle = {
    fontSize: 30,
    fontWeight: 600,
    ...titleStyle,
  }
  const defaultSubTitleStyle = {
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 15,
    marginBottom: 10,
    maxWidth: '95%',
  }
  const customSubTitleStyle = {
    fontSize: 15,
    fontWeight: 400,
    ...subTitleStyle,
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ maxWidth: 1000 }}>
        <Text style={titleStyle ? customTitleStyle : defaultTitleStyle}>{titleText}</Text>
        <Text style={subTitleStyle ? customSubTitleStyle : defaultSubTitleStyle}>{subTitleText}</Text>
      </View>
    </View>
  )
}
