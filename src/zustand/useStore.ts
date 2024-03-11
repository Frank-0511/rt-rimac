import { useEffect, useState } from 'react'

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
  defaultValue: F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>(defaultValue)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setData(result)
    setTimeout(() => setLoading(false), 0)
  }, [result])

  return { data, loading }
}

export default useStore
