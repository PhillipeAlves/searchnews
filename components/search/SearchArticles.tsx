import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList, Keyboard } from 'react-native'
import { useSafeInsets } from '../../utils/dimensions'
import SearchArticle, { Article } from './SearchArticle'
import useRefreshControl from '../../utils/hooks/useRefreshControl'
import Status from '../UI/Status'
import useSearchQuery from './useSearchQuery'

type SearchArticles = {
  searchQuery: string
  onScroll: (e: any) => void
}

const SearchArticles = ({ searchQuery, onScroll }: SearchArticles) => {
  const { handleEndReached, searchResults, isPending, error, isFetching, refetch } = useSearchQuery({ searchQuery })
  const { totalResults, articles } = searchResults
  const { refreshControl } = useRefreshControl(refetch)
  const { top } = useSafeInsets()
  
  const renderItem = useCallback(
    ({ item }: {item: Article}) => <SearchArticle data={item || {}} />,
    []
  )

  const keyExtractor = useCallback((item: Article, index: number) => `${searchQuery}-${item?.title}-${index}`, [])

  if (totalResults === 0) return <Status notFound={searchQuery} />
  if ((error || isPending) && !!searchQuery || (isFetching && totalResults === undefined)) return <Status loading={isPending || isFetching} error={error} />

  return (
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleEndReached}
        refreshControl={refreshControl}
        initialNumToRender={4}
        onEndReachedThreshold={0.5}
        maxToRenderPerBatch={2} 
        scrollIndicatorInsets={{ right: 0}}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: top + 100 }}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        ListFooterComponent={isFetching ? <ActivityIndicator size='large' style={{paddingVertical: 30}} /> : null}
        onScroll={onScroll}
      />
  )
}

export default SearchArticles