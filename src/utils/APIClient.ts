interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}

const apiClient = async (endpoint: string, options: RequestOptions = {}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`

    const response = await fetch(url, {
      method: options.method || 'GET',
      body: options.body ? JSON.stringify(options.body) : undefined
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw error
  }
}

export default apiClient
