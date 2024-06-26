import { Linking } from 'react-native'

export const openExternalUrl = async (url: string) => {
  try {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    }
  } catch (error) {
    console.log(error)
  }
}
