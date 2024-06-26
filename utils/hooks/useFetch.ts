import axios, { AxiosError } from 'axios'
import { useEffect, useState } from "react"

type useFetch = { 
  data: any
  loading: boolean
  error: null | string
  fetchData: (url: string, params?: any) => void
}

type useFetchProps = { url: string  }

const useFetch = ({ url }: useFetchProps): useFetch => {
  const [data, setData] = useState<any>(null)
  const [loading, setloading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  const fetchData = async (url: string, params?: any) => {
    setloading(true)

    try {
      const { data } = await axios.get(url, {
        params: params || {}
      })
      setData(data)
      setError(null)
    }  catch (err) {
      const error = err as AxiosError<Error>
      setError(error?.message)
    }

    setloading(false)
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return { data, loading, error, fetchData }
}

export default useFetch