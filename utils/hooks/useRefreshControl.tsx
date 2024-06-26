import React, { useState } from 'react'
import { RefreshControl } from 'react-native'

const useRefreshControl = (asyncFunction: () => void) => {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      await asyncFunction()
    } catch (error) {
      console.error('useRefreshControl:handleRefresh', error)
    }
    setRefreshing(false)
  }

  const component = <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />

  return { handleRefresh, refreshing, refreshControl: component }
}

export default useRefreshControl
