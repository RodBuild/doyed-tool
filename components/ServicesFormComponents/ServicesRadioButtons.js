import { View, Text } from 'react-native'
import PressableButton from '../PressableButton/PressableButton'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import React from 'react'

function RadioButton(props) {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#000',
          }}
        />
      ) : null}
    </View>
  )
}

function RadioEntry({ text1, text2 }) {
  return (
    <View>
      {/* <RadioButton selected /> */}
      <Text>{text1}</Text>
      <Text>{text2}</Text>
    </View>
  )
}

/**
 * A component that returns a list of 3 radio buttons with icons and text.
 */
export default function ServicesRadioButtons({ question, answers, onPress }) {
  console.log(answers)
  return (
    <View>
      <View>
        <Text>{question}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {answers.map((answer, index) => {
          return (
            <PressableButton key={index} onPress={onPress}>
              <RadioEntry text1={answer.part1} text2={answer.part2} />
            </PressableButton>
          )
        })}
      </View>
      {/* <PressableButton onPress={onPress}>
        <RadioEntry />
      </PressableButton> */}
    </View>
  )
}
