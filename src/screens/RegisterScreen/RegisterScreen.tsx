import React, { useState } from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { registerApi } from './RegisterScreen.api'
import { authUtils } from '../../services/authUtils'
import { validation } from '../../services/validation'
import { registerStyles } from './RegisterScreen.styles'

interface RegisterFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterScreen() {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const updateField = (field: keyof RegisterFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateForm = (): string | null => {
    const { fullName, email, password, confirmPassword } = formData

    if (!validation.required(fullName)) return 'Please enter your full name'
    if (!validation.required(email)) return 'Please enter your email'
    if (!validation.email(email)) return 'Please enter a valid email address'
    
    const passwordValidation = validation.password(password)
    if (!passwordValidation.isValid) return passwordValidation.message!
    
    if (password !== confirmPassword) return 'Passwords do not match'

    return null
  }

  const handleRegister = async () => {
    const validationError = validateForm()
    if (validationError) {
      Alert.alert('Validation Error', validationError)
      return
    }

    setIsLoading(true)
    try {
      const { confirmPassword, ...registrationData } = formData
      const response = await registerApi.createAccount(registrationData)
      
      // Store auth token
      await authUtils.storeToken(response.token)
      
      Alert.alert(
        'Success!', 
        'Account created successfully!',
        [{ text: 'OK' }]
      )
    } catch (error) {
      Alert.alert('Registration Failed', (error as Error).message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackToLogin = () => {
    console.log('Navigate back to login')
    // Later: navigation.goBack()
  }

  return (
    <ScrollView style={registerStyles.container} showsVerticalScrollIndicator={false}>
      <View style={registerStyles.header}>
        <Text style={registerStyles.title}>Create Account</Text>
        <Text style={registerStyles.subtitle}>Join WishIt and start sharing your wishes</Text>
      </View>
      
    <View style={registerStyles.header}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChangeText={(value) => updateField('fullName', value)}
        />
        
        <Input
          label="Email"
          placeholder="Enter your email address"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
        />
        
        <Input
          label="Password"
          placeholder="Create a password"
          value={formData.password}
          onChangeText={(value) => updateField('password', value)}
          secureTextEntry
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChangeText={(value) => updateField('confirmPassword', value)}
          secureTextEntry
        />
      </View>
      
      <View style={registerStyles.buttonContainer}>
        <Button 
          title={isLoading ? "Creating Account..." : "Create Account"}
          onPress={handleRegister}
          disabled={isLoading}
        />
        
        <Button 
          title="Back to Login" 
          onPress={handleBackToLogin}
          variant="secondary"
        />
      </View>
      
      <View style={registerStyles.footer}>
        <Text style={registerStyles.footerText}>
          By creating an account, you agree to our{'\n'}
          <Text style={registerStyles.linkText}>Terms of Service</Text> and{' '}
          <Text style={registerStyles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </ScrollView>
  )
}
