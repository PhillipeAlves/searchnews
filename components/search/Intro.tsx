import React from 'react'
import { Keyboard } from 'react-native'
import StyledView from '../UI/StyledView'
import StyledText from '../UI/StyledText'
import { colors } from '../../constants/colors'
import { useSafeInsets } from '../../utils/dimensions'

type Intro = {
  focused: boolean
}

const Intro = ({ focused }: Intro) => {
  const { top } = useSafeInsets()

  return (
  <StyledView height={'100%'} ph={25} pt={top + 110} onPress={() => Keyboard.dismiss()}>
    {!focused && (
      <StyledView>
        <StyledText size={28} weight='bold' lineHeight={0}>Hi there,</StyledText>
        <StyledText size={18} lineHeight={26} pt={30} color={colors.grey}>This is a simple app that uses the News API to search through every article published by over 150,000 news sources and blogs in the last 5 years. It can help you answer questions like:</StyledText>
        <StyledText pt={30} color={colors.grey} pl={30}>- What top stories is TechCrunch running right now?</StyledText>
        <StyledText pt={20} color={colors.grey} pl={30}>- What new articles were published about the next iPhone today?</StyledText>
        <StyledText pt={20} color={colors.grey} pl={30}>-Has my company or product been mentioned or reviewed by any blogs recently?</StyledText>
        <StyledText size={18} lineHeight={26} pt={40} color={colors.grey}>To start using it just type something that you'd like to know about it on the search bar on top of the screen.</StyledText>
        <StyledText size={22} pt={40} >Have fun!</StyledText>
      </StyledView>
    )}
  </StyledView>
)}

export default Intro
