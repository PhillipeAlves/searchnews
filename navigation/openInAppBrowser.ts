import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import { openExternalUrl } from './openExternalUrl'

const defaultOptions = {
  dismissButtonStyle: 'close',
  preferredBarTintColor: '#000000',
  preferredControlTintColor: 'white',
  readerMode: false,
  animated: true,
  modalPresentationStyle: 'pageSheet',
  modalTransitionStyle: 'coverVertical',
  modalEnabled: true,
  enableBarCollapsing: false,
  showTitle: true,
  toolbarColor: '#000000',
  secondaryToolbarColor: 'black',
  enableUrlBarHiding: false,
  enableDefaultShare: false,
  forceCloseOnRedirection: false,
  animations: {
    startEnter: 'slide_in_right',
    startExit: 'slide_out_left',
    endEnter: 'slide_in_left',
    endExit: 'slide_out_right'
  },
  headers: {
    'my-custom-header': 'my custom header value'
  }
}

const openInAppBrowser = async (url: string) => {
  if ((await InAppBrowser.isAvailable()) && url) {
    try {
      InAppBrowser.close()
      const result = await InAppBrowser.open(url, defaultOptions)
      return result
    } catch (error) {
      console.error(error)
    }
  }
  if (url) {
    await openExternalUrl(url)
  }
}

export default openInAppBrowser
