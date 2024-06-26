import React from 'react'
import { Text, TextStyle, StyleProp, TextProps } from 'react-native'
import { colors } from '../../constants/colors'

type StyledText = TextProps & { 
  letterSpacing?: number
  color?: string
  size?: number
  pv?: number
  ph?: number
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  weight?: TextStyle['fontWeight']
  fontStyle?: TextStyle['fontStyle']
  decoration?: TextStyle['textDecorationLine']
  align?: TextStyle['textAlign']
  lineHeight?: TextStyle['lineHeight']
  style?: StyleProp<TextStyle>
}

const StyledText = ({ style, letterSpacing = .5, color = colors.black, size = 16, pv, ph, pb, pt, pl, pr, align, weight, fontStyle, decoration, lineHeight = 24, ...props }: StyledText) => {
  const defaultStyles = [
    { 
      fontFamily: 'Lato-Regular',
      color, 
      fontSize: size, 
      fontWeight: weight, 
      textAlign: align, 
      letterSpacing,
      fontStyle,
      textDecorationLine: decoration,
      paddingLeft: pl,
      paddingRight: pr,
      paddingBottom: pb,
      paddingTop: pt,
      paddingHorizontal: ph,
      paddingVertical: pv,
      lineHeight
    }, 
    style
  ]

  return <Text style={defaultStyles} {...props} />
}

export default StyledText
