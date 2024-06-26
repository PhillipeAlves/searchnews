import React from 'react'
import { FlexStyle, StyleProp, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native'

type StyledView = ViewProps & TouchableOpacityProps & {
  pv?: number
  ph?: number
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  mb?: number
  mt?: number
  ml?: number
  mr?: number
  flex?: number
  background?: string
  children?: any
  style?: StyleProp<ViewStyle>
  height?: FlexStyle['height']
  width?: FlexStyle['width']
  align?: FlexStyle['alignItems']
  justify?: FlexStyle['justifyContent']
  direction?: FlexStyle["flexDirection"]
}

const StyledView = ({ style, pv, ph, pb, pt, pl, pr, mb, mt, ml, mr, width, height, background, flex, align, justify, direction, children, ...rest }: StyledView) => {
  const defaultStyles = [
    {
      paddingLeft: pl,
      paddingRight: pr,
      paddingBottom: pb,
      paddingTop: pt,
      paddingHorizontal: ph,
      paddingVertical: pv,
      marginLeft: ml,
      marginRight: mr,
      marginBottom: mb,
      marginTop: mt,
      backgroundColor: background,
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      width,
      height,
      flex
    }, 
    style
  ]

  let component = (
    <View style={defaultStyles} {...rest}>
      {children}
    </View>
  )

  if (rest.onPress || rest.onPressIn || rest.onPressOut) {
    component = (
      <TouchableOpacity style={defaultStyles} {...rest}>
        {children}
      </TouchableOpacity>
    )
  }

  return component
}

export default StyledView