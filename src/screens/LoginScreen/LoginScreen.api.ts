import { httpClient } from '../../services/httpClient'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  id: string
  fullName: string
  email: string
  token: string
}

const TEST_USER = {
  email: 'test@wishit.com',
  password: 'test123',
  response: {
    id: 'user_test_123',
    fullName: 'Test User',
    email: 'test@wishit.com',
    token: 'test_token_12345'
  }
}

export const loginApi = {
  authenticateUser: async (credentials: LoginRequest): Promise<LoginResponse> => {
    // Check for test user first
    if (credentials.email === TEST_USER.email && credentials.password === TEST_USER.password) {
      await new Promise<void>(resolve => setTimeout(resolve, 800)) // Simulate API delay
      console.log('🧪 Test user login successful')
      return TEST_USER.response
    }

    const response = await httpClient.post<LoginResponse>('/api/login', credentials)
    
    // Mock response for now (until you have real backend)
    return {
      id: `user_${Date.now()}`,
      fullName: 'Mock User',
      email: credentials.email,
      token: `token_${Date.now()}`
    }
  },

  refreshToken: async (token: string): Promise<string> => {
    await httpClient.post('/api/refresh-token', { token })
    return `refreshed_token_${Date.now()}`
  }
}
