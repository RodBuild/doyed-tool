import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useNavigation, Link } from 'expo-router'
import { PressableButton } from '../../components/index'
import { COLORS } from '../../assets/colors/colors'

function MiddleButton() {
  return (
    <PressableButton style={styles.middleButton}>
      <Link asChild href={'home/services/createService'}>
        <Text style={styles.middleButtonText}>Create Service</Text>
      </Link>
    </PressableButton>
  )
}

export default function ServiceCreate() {
  const image = require('../../assets/backgrounds/livingRoom.jpg')

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={image}>
        <View style={styles.backgroundImageBlur}>
          <MiddleButton />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 150,
  },
  backgroundImage: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  backgroundImageBlur: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.600)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleButton: {
    alignContent: 'center',
    backgroundColor: COLORS.primary,
    maxWidth: 180,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 50,
  },
  middleButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
  },
})
