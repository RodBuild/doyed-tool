import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { useState, createContext, useContext } from 'react'
import { Header, PressableIcon, Title, RowButton, ServicesRadioButtons } from '../../../../../components/index'
import { COLORS } from '../../../../../assets/colors/colors'
import { router } from 'expo-router'

import mockData from '../../../../../data/mockServiceCreateForm.json'

const StepContext = createContext(null)

function NavigationControllers({ setStep, setPointsArray }) {
  const step = useContext(StepContext)
  return (
    <View>
      {step === 0 ? (
        <View style={styles.navContainerStyle}>
          <PressableIcon
            style={{ ...styles.navIconSingle, alignItems: 'flex-start' }}
            iconName="close"
            iconSize={35}
            iconColor={COLORS.primary}
            onPress={() => router.replace('home/(tabs)/services')}
          />
        </View>
      ) : (
        <View style={styles.navContainerStyle}>
          <PressableIcon
            style={{ ...styles.navIconDouble, alignItems: 'flex-start' }}
            iconName="arrow-left"
            iconSize={35}
            iconColor={COLORS.primary}
            onPress={() => {
              setPointsArray((prevArray) => prevArray.slice(0, -1))
              setStep(step - 1)
              // router.back()
            }}
          />
          <PressableIcon
            style={{ ...styles.navIconDouble, alignItems: 'flex-end' }}
            iconName="close"
            iconSize={35}
            iconColor={COLORS.primary}
            onPress={() => router.replace('home/(tabs)/services')}
          />
        </View>
      )}
    </View>
  )
}

function Content({ data, maxSteps, setStep, setPointsArray }) {
  const step = useContext(StepContext)

  switch (data.type) {
    case 'basic':
      return (
        <View>
          {data.answers.map((answer, index) => {
            return (
              <RowButton
                key={index}
                text={answer.answer}
                textSize={20}
                icon="chevron-right-circle"
                iconColor={COLORS.primary}
                onPress={() => {
                  setPointsArray((currArray) => [...currArray, answer.value])
                  if (step + 1 < maxSteps) {
                    setStep(step + 1)
                  } else {
                    console.log('nope: ', step + 1)
                  }
                }}
              />
            )
          })}
        </View>
      )
    case 'multi':
      return <Text>Xd</Text>
    case 'radio':
      return (
        <View>
          {data.questions.map((question, index) => {
            return <ServicesRadioButtons key={index} question={question} answers={data.answers[index].options} />
          })}
        </View>
      )
    default:
      return <Text>Xd</Text>
  }
}

function StepForm() {
  const [step, setStep] = useState(0)
  const [pointsArray, setPointsArray] = useState([])
  console.log('pointsArray: ', pointsArray)

  const response = mockData

  return (
    <StepContext.Provider value={step}>
      <View>
        <NavigationControllers setStep={setStep} setPointsArray={setPointsArray} />
        <View>
          <View style={{ maxWidth: '75%', paddingLeft: 20 }}>
            <Title
              titleText={response.data[step].header}
              subTitleText="This a bigg bigg title that is meant to be super annoying, so you be careful!! Dude or Dudette. This a bigg bigg title that is meant to be super annoying, so you be careful!! Dude or Dudette"
            />
          </View>
          <Content
            data={response.data[step]}
            maxSteps={response.data.length}
            setStep={setStep}
            setPointsArray={setPointsArray}
          />
          <Pressable
            onPress={() => {
              if (step + 1 < response.data.length) {
                setStep(step + 1)
              } else {
                console.log(step + 1)
              }
            }}
          >
            <Text>PRESS</Text>
          </Pressable>
        </View>
      </View>
    </StepContext.Provider>
  )
}

export default function createService() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <StepForm />
      {/* <NavigationControllers /> */}
      {/* <Text>createService</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  navContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navIconDouble: {
    flex: 1,
    maxWidth: 500,
  },
  navIconSingle: {
    flex: 1,
    maxWidth: 1000,
  },
})
