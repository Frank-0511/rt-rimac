import { useEffect, useState } from 'react'

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
  defaultValue: F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<F>(defaultValue)

  useEffect(() => {
    setData(result)
  }, [result])

  return data
}

export default useStore
