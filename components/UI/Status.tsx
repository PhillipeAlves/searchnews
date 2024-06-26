import { ActivityIndicator, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import { colors } from '../../constants/colors'

const Error = () => (
  <>
    <StyledText color={colors.error}>ERROR</StyledText>
    <StyledText  pt={10}>Sorry, an error has occurred.</StyledText>
  </>
)

const Loading = () => (
  <>
    <ActivityIndicator size='large' />
    <StyledText pt={10}>loading</StyledText>
  </>
)

const NotFound = ({searchQuery}: { searchQuery: string }) => (
  <StyledText align='center'>Sorry, there are no results for "{searchQuery}"</StyledText>
)

type Status = {
  error?: any
  loading?: boolean
  notFound?: string
}

const Status = ({ error, loading, notFound }: Status) => {
  let component
  
  if (error) component = <Error />
  if (loading) component = <Loading />
  if (notFound) component = <NotFound searchQuery={notFound} />

  if (!component) return null

  return (
      <View style={styles.container}>
        {component}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 30,
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

export default Status