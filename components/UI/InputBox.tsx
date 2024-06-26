import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, TextInput } from 'react-native'
import { colors } from '../../constants/colors'
import { useSafeInsets } from '../../utils/dimensions'
import StyledView from './StyledView'
import StyledText from './StyledText'

type InputBox = { 
  isVisible: boolean
  onChangeText: (text: string) => void
  onFocus: (value: boolean) => void
  focused: boolean
  text: string
}

const InputBox = ({ onChangeText, isVisible, text, onFocus, focused }: InputBox) => {
  const { top } = useSafeInsets()
  const ref = useRef<TextInput>(null)

  const handleFocus = () => onFocus(true)

  const handleBlur = () => onFocus(false)

  const handleRefFocus = () => {
    if (ref.current?.focus) {
      ref.current?.focus()
    }
  }

  const handleClearPress = () => {
    onChangeText('')
    handleRefFocus()
  }

  const opacity = useRef(new Animated.Value(1)).current;

  const animate = (toValue: number) => {
    Animated.timing(opacity, {
      toValue,
      duration: 200,
      useNativeDriver: true
    }).start()
  }

  const handleAnimation = () => {
    if (isVisible) {
      animate(1)
    } else {
      animate(0)
    }
  }

  useEffect(handleAnimation, [isVisible])
   
  return (
    <StyledView ph={20} background='transparent' width={'100%'} style={{position: 'absolute', top: top + 15, zIndex: 8}} onPress={handleRefFocus}>
      <Animated.View style={{ opacity }}>
      <StyledView style={{ position: 'absolute', left: 20, top: -5.5, zIndex: 9 }} onPress={handleFocus}>
        <Image source={require('../../assets/images/newsImage.png')} style={styles.image} />
      </StyledView>
      <TextInput 
        ref={ref}
        placeholder='Search'
        value={text}
        onChangeText={onChangeText}
        style={[styles.input, { borderColor: focused ? colors.blue : colors.white, shadowColor: focused ? colors.blue : colors.black }]}
        placeholderTextColor={focused ? colors.lightGrey : colors.grey}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!!text && (
        <StyledView ph={10} pv={20} style={{ position: 'absolute', right: 10, top: -8.5, alignSelf: 'center', zIndex: 9 }} onPress={handleClearPress}>
          <StyledText  color={colors.blue} size={14} >Clear</StyledText>
        </StyledView>
      )}
      </Animated.View>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    width: '100%',
    borderRadius: 30,
    paddingVertical: 15,
    paddingLeft: 90,
    paddingRight: 70,
    fontSize: 14,
    letterSpacing: .5,
    fontFamily: 'Lato-Regular',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
  image: { 
    width: 60, 
    height: 60, 
    aspectRatio: 1, 
    resizeMode: 'contain'
  }
})

export default InputBox