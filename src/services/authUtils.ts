// Shared authentication utilities
export const authUtils = {
  storeToken: async (token: string): Promise<void> => {
    // TODO: Store in secure storage (AsyncStorage, Keychain, etc.)
    console.log('Storing auth token:', token)
  },

  getToken: async (): Promise<string | null> => {
    // TODO: Retrieve from secure storage
    console.log('Getting auth token')
    return null
  },

  removeToken: async (): Promise<void> => {
    // TODO: Remove from secure storage
    console.log('Removing auth token')
  },

  generateMockToken: (): string => {
    return `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}
