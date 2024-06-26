import axios from 'axios'
import { InfiniteData, keepPreviousData, useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query'
import { Article } from './SearchArticle'
import { API_ENV } from "@env"

type useSearchQueryProps = {
  searchQuery: string
  limit?: number
}

export type SearchResults = { 
  status: string, 
  totalResults: 0, 
  articles: Article[]
}

type useSearchQuery = UseInfiniteQueryResult<InfiniteData<any[], unknown>, Error> & { 
  handleEndReached: () => void 
  searchResults: SearchResults
}

const useSearchQuery = ({ searchQuery, limit = 10 }: useSearchQueryProps): useSearchQuery  => {
  const url = `https://newsapi.org/v2/everything`

  const fetch = async ({ pageParam: page = 1}: { pageParam: number }) => {
    if (searchQuery) {
      const { data } = await axios.get(url, {
        params: { 
          page, 
          pageSize: limit,
          language: 'en',
          apiKey: API_ENV,
          q: searchQuery
        }
      })
      
      return { ...data, page}
    }
    return []
  }

  const getNextPageParam = (lastPage: any, allPages: any) => {
    const totalPages = !Number.isNaN(parseFloat(lastPage?.totalResults)) ? parseInt((lastPage.totalResults / 10).toFixed()) : 0
    
    if (totalPages > lastPage.page) return lastPage.page + 1
  }

  const queryResults = useInfiniteQuery({
    queryKey: [searchQuery],
    queryFn: fetch,
    getNextPageParam,
    initialPageParam: 1,
    placeholderData: keepPreviousData,
  })

  const { fetchNextPage, data } = queryResults
  const articles = data?.pages?.flatMap((page: SearchResults) => page?.articles) || []
  const { status, totalResults } = data?.pages?.[0] || {}
  
  const searchResults = {
    status, 
    totalResults,
    articles
  }

  const handleEndReached = () => {
      fetchNextPage()
  }

  return {
    ...queryResults,
    searchResults,
    handleEndReached
  }
}

export default useSearchQuery