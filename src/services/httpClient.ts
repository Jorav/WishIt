interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export const httpClient = {
  post: async <T>(url: string, data: any): Promise<T> => {
    // Simulate API call delay
    await new Promise<void>(resolve => setTimeout(resolve, 1000))
    
    // TODO: Replace with real HTTP client (fetch, axios, etc.)
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // return response.json()
    
    console.log(`API Call: POST ${url}`, data)
    return data as T
  },

  get: async <T>(url: string): Promise<T> => {
    await new Promise<void>(resolve => setTimeout(resolve, 500))
    console.log(`API Call: GET ${url}`)
    return {} as T
  }
}
