import React from 'react'
import { StyleSheet } from 'react-native'
import StyledView from './StyledView'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import StyledText from './StyledText'

const ModalHeader = ({ text }: { text?: string }) => {
  const navigation = useNavigation()

  return (
    <StyledView style={{zIndex: 9}}>
      {!!text && <StyledText align='center' pv={20} style={{textTransform: 'uppercase'}}>{text}</StyledText>}
      <StyledView style={styles.closeButtonPosition} onPress={navigation.goBack}>
        <StyledView style={[styles.closeButton, { backgroundColor: !!text ? 'transparent' : 'rgba(255, 255, 255, 0.70)'}]}>
          {/* <Icon name="close" size={24} /> */}
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButtonPosition: {
    position: 'absolute',
    right: 8,
    top: 8
  }
})

export default ModalHeader