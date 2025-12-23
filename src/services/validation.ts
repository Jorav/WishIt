export const validation = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  password: (password: string): { isValid: boolean; message?: string } => {
    if (password.length < 6) {
      return { isValid: false, message: 'Password must be at least 6 characters' }
    }
    return { isValid: true }
  },

  required: (value: string): boolean => {
    return value.trim().length > 0
  }
}
