import { Image, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { formatDate } from '../../utils/date'
import StyledView from '../UI/StyledView'
import StyledText from '../UI/StyledText'
import openInAppBrowser from '../../navigation/openInAppBrowser'

export type Article = {
  source: {
    id: any
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const SearchArticle = ({ data }: { data: Article }) => {
  const { author, title, description, urlToImage, publishedAt, url, source } = data || {}

  const onPress = () => openInAppBrowser(url)
  
  if (!title || description === '[Removed]') return null

  return (
    <StyledView mb={30} pb={35} style={{ borderBottomColor: colors.lightGrey, borderBottomWidth: 1 } } onPress={onPress}>
      <StyledView height={215} width={'100%'} background={!urlToImage ? colors.background : undefined} align='center' justify='center'>
       {!!urlToImage && <Image src={urlToImage} style={styles.image} />}
       {!urlToImage && (
        <>
          <Image source={require('../../assets/images/imageFallback.png')} style={styles.imageFallback} />
          <StyledText color={colors.lightGrey} size={14}>image unavailable</StyledText>
        </>
      )}
      </StyledView>
      <StyledView>
        {!!publishedAt && <StyledText size={12} pt={20} pb={10} letterSpacing={1} color={colors.blue} style={{textTransform: 'uppercase'}}>{formatDate(publishedAt, 'DD MMM YYYY')}</StyledText>}
        <StyledText size={18} weight='bold' pb={20} letterSpacing={1}>{title}</StyledText>
        {!!description && <StyledText color={colors.grey} numberOfLines={6} >{description.trim()}</StyledText>}
        {!!author && <StyledText fontStyle='italic' pt={20} color={colors.lightGrey} size={14}>by {author}</StyledText>}
        {!!source.name && <StyledText  pt={15} size={14} color={colors.blue}>Source: {source.name}</StyledText>}
      </StyledView>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%', 
    height: 215, 
    resizeMode: 'cover' 
  },
  imageFallback: {
    width: 50, 
    height: 50
  }
})

export default SearchArticle