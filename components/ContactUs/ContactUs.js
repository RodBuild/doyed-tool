import { Text, Linking, View } from 'react-native'
import { Title, PressableButton, Spacer } from '../index'
import { COLORS } from '../../assets/colors/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default function ContactUs() {
  function CircularLogo({ containerStyle, iconName }) {
    return (
      <View style={containerStyle}>
        <View
          style={{
            backgroundColor: 'black',
            width: 100,
            height: 100,
            borderWidth: 8,
            borderColor: COLORS.primary,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialCommunityIcons name={iconName} size={45} color={COLORS.primary} />
        </View>
      </View>
    )
  }

  function determineLinkType(name, value) {
    if (name === 'cellphone') {
      return `tel:${value}`
    } else if (name === 'email') {
      return `mailto:${value}`
    } else return `${value}`
  }

  function Hours() {
    const data = [
      {
        day: 'Monday - Friday',
        hours: '9:00am - 6:00pm',
      },
      {
        day: 'Saturday',
        hours: '8:00am - 4:00pm',
      },
      {
        day: 'Sunday',
        hours: 'Closed',
      },
    ]
    return (
      <View>
        {data.map((item) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 20 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  flex: 1,
                  textAlign: 'left',
                  maxWidth: 250,
                  paddingLeft: 20,
                }}
              >
                {item.day}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  flex: 1,
                  textAlign: 'right',
                  maxWidth: 250,
                  paddingRight: 20,
                }}
              >
                {item.hours}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }

  function ContactInfo() {
    const data = [
      {
        logoName: 'cellphone',
        values: ['(208) 481 - 7879', '(208) 481 - 7321'],
      },
      {
        logoName: 'email',
        values: ['info@doyed.com'],
      },
    ]

    return (
      <View>
        {data.map((item) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
              <CircularLogo
                containerStyle={{
                  flex: 1,
                  maxWidth: 250,
                  alignItems: 'flex-start',
                  paddingLeft: 25,
                }}
                iconName={item.logoName}
              />
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  maxWidth: 250,
                  // alignItems: 'flex-end',
                  paddingRight: 20,
                }}
              >
                <PressableButton onPress={() => Linking.openURL(determineLinkType(item.logoName, item.values[0]))}>
                  <Text style={{ fontSize: 20 }}>{item.values[0]}</Text>
                </PressableButton>
                {item.values[1] ? (
                  <PressableButton onPress={() => Linking.openURL(determineLinkType(item.logoName, item.values[1]))}>
                    <Spacer vertical size={5} />
                    <Text style={{ fontSize: 20 }}>{item.values[1]}</Text>
                  </PressableButton>
                ) : null}
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  function SocialLinks() {
    const data = [
      {
        logoName: 'facebook',
        value: 'Reach out via Facebook',
        url: 'https://www.facebook.com/doyed.llc',
      },
      {
        logoName: 'google',
        value: 'Find us on Google',
        url: 'https://www.google.com/maps/place/Doyed+LLC/@43.5030825,-114.2925508,17z/data=!3m1!4b1!4m6!3m5!1s0x8dd05088162ee451:0x3ddf849163186c70!8m2!3d43.5030786!4d-114.2899759!16s%2Fg%2F11rh0fx17s?entry=ttu',
      },
      {
        logoName: 'web',
        value: 'Check our website',
        url: 'https://doyed.com/',
      },
    ]

    return (
      <View>
        {data.map((item) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
              <CircularLogo
                containerStyle={{
                  flex: 1,
                  maxWidth: 250,
                  alignItems: 'flex-start',
                  paddingLeft: 25,
                }}
                iconName={item.logoName}
              />
              <View
                style={{
                  justifyContent: 'center',
                  flex: 2,
                  maxWidth: 250,
                }}
              >
                <PressableButton
                  onPress={() => {
                    Linking.openURL(item.url)
                  }}
                >
                  <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.value}</Text>
                </PressableButton>
              </View>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View>
      <Title titleText="Business Hours" />
      <Hours />
      <Spacer vertical size={20} />
      <ContactInfo />
      <Spacer vertical size={20} />
      <SocialLinks />
      <Spacer vertical size={20} />
    </View>
  )
}
