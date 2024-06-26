import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStack'

const queryClient = new QueryClient()

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  </NavigationContainer>
)

export default App
