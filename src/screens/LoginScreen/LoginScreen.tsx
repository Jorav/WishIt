import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { loginApi } from './LoginScreen.api'
import { authUtils } from '../../services/authUtils'
import { validation } from '../../services/validation'
import { loginStyles } from './LoginScreen.styles'

interface LoginFormData {
  email: string
  password: string
}

export default function LoginScreen({ navigation }: any) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const updateField = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateForm = (): string | null => {
    const { email, password } = formData

    if (!validation.required(email)) return 'Please enter your email'
    if (!validation.email(email)) return 'Please enter a valid email address'
    if (!validation.required(password)) return 'Please enter your password'

    return null // No errors
  }

  const handleLogin = async () => {
    const validationError = validateForm()
    if (validationError) {
      Alert.alert('Validation Error', validationError)
      return
    }

    setIsLoading(true)
    try {
      const response = await loginApi.authenticateUser(formData)
      
      // Store auth token
      await authUtils.storeToken(response.token)
      
      Alert.alert(
        'Welcome!',
        `Hello ${response.fullName}!`,
        [{ text: 'OK' }]
      )
      
      //navigation.navigate('Home')
      console.log('Login successful, navigate to main app')
      
    } catch (error) {
      Alert.alert('Login Failed', (error as Error).message || 'Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = () => {
    console.log('Navigate to register screen')
    navigation.navigate('Register')
  }

  const fillTestUser = () => {
    setFormData({
      email: 'test@wishit.com',
      password: 'test123'
    })
    Alert.alert('Test User', 'Test credentials filled! Tap Sign In to login.')
  }

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.header}>
        <Text style={loginStyles.title}>Welcome Back!</Text>
        <Text style={loginStyles.subtitle}>Sign in to continue</Text>
      </View>
      
      <View style={loginStyles.form}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => updateField('password', value)}
          secureTextEntry
        />
      </View>
      
      <View style={loginStyles.buttonContainer}>
        <Button 
          title={isLoading ? "Signing In..." : "Sign In"}
          onPress={handleLogin}
          disabled={isLoading}
        />
        
        <Button 
          title="Create Account" 
          onPress={handleRegister}
          variant="secondary"
        />
        
        {/* Test user button - remove in production */}
        <Button 
          title="🧪 Fill Test User"
          onPress={fillTestUser}
          variant="secondary"
        />
      </View>
      
      <View style={loginStyles.footer}>
        <Text style={loginStyles.footerText}>
          Forgot your password?{' '}
          <Text style={loginStyles.linkText}>Reset it here</Text>
        </Text>
        <Text style={loginStyles.testInfo}>
          Test: test@wishit.com / test123
        </Text>
      </View>
    </View>
  )
}
