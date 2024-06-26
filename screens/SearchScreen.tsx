import React, { useState } from 'react'
import InputBox from '../components/UI/InputBox'
import SearchArticles from '../components/search/SearchArticles'
import StyledView from '../components/UI/StyledView'
import useScrollDirection from '../utils/hooks/useScrollDirection'
import Intro from '../components/search/Intro'

const SearchScreen = () => {
  const [searchQuery, setSearchTerm] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  
  const { handleScroll, direction } = useScrollDirection()

  return (
    <StyledView style={{ height: '100%' }}>
      <InputBox text={searchQuery} onChangeText={setSearchTerm} onFocus={setFocused} focused={focused} isVisible={direction !== 'down'} />
      <SearchArticles searchQuery={searchQuery} onScroll={handleScroll} />
      {!searchQuery && <Intro focused={focused} />}
    </StyledView>
  )
}

export default SearchScreen