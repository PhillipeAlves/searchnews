import { Platform } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

export const useSafeInsets = () => {
  let insets = { top: 0, bottom: 0, left: 0, right: 0 }

  if (initialWindowMetrics?.insets) {
    insets = initialWindowMetrics.insets
  }

  if (Platform.OS === 'android') {
    insets.bottom = 0
  }

  return insets
}
