import { httpClient } from '../../services/httpClient'

export interface RegisterRequest {
  fullName: string
  email: string
  password: string
}

export interface RegisterResponse {
  id: string
  fullName: string
  email: string
  createdAt: string
  token: string
}

export const registerApi = {
  createAccount: async (userData: RegisterRequest): Promise<RegisterResponse> => {
    const response = await httpClient.post<RegisterResponse>('/api/register', userData)
    
    // Mock successful response for now
    return {
      id: `user_${Date.now()}`,
      fullName: userData.fullName,
      email: userData.email,
      createdAt: new Date().toISOString(),
      token: `token_${Date.now()}`
    }
  },

  checkEmailAvailability: async (email: string): Promise<boolean> => {
    await httpClient.get(`/api/users/check-email?email=${email}`)
    return true
  }
}
