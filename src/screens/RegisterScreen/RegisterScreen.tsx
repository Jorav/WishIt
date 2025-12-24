import React, { useState } from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import Button from '../../components/Button/Button'
import ValidatedInput from '../../components/Input/ValidatedInput/ValidatedInput'
import EmailInput from '../../components/Input/ValidatedInput/EmailInput'
import PasswordInput from '../../components/Input/ValidatedInput/PasswordInput'
import ConfirmPasswordInput from '../../components/Input/ValidatedInput//ConfirmPasswordInput'
import { registerApi } from './RegisterScreen.api'
import { authUtils } from '../../services/authUtils'
import { registerStyles } from './RegisterScreen.styles'

interface RegisterFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterScreen({ navigation }: any) {
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

  const isFormValid = (): boolean => {
    const { fullName, email, password, confirmPassword } = formData
    return (
      fullName.trim().length > 0 &&
      email.includes('@') && email.includes('.') &&
      password.length >= 6 &&
      password === confirmPassword
    )
  }

  const handleRegister = async () => {
    if (!isFormValid()) {
      Alert.alert('Form Error', 'Please fix the errors above before continuing.')
      return
    }

    setIsLoading(true)
    try {
      const { confirmPassword, ...registrationData } = formData
      const response = await registerApi.createAccount(registrationData)
      await authUtils.storeToken(response.token)
      
      Alert.alert(
        'Success!',
        'Account created successfully!',
        [{ 
          text: 'OK', 
          onPress: () => {
            navigation.replace('Home')
          }
        }]
      )
    } catch (error) {
      Alert.alert('Registration Failed', (error as Error).message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView
      style={registerStyles.container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View>
        <View style={registerStyles.header}>
          <Text style={registerStyles.title}>Create Account</Text>
        </View>
        <View style={registerStyles.form}>
          <ValidatedInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChangeText={(value: string) => updateField('fullName', value)}
          />
          <EmailInput
            value={formData.email}
            onChangeText={(value: string) => updateField('email', value)}
          />
          <PasswordInput
            value={formData.password}
            onChangeText={(value: string) => updateField('password', value)}
          />
          <ConfirmPasswordInput
            value={formData.confirmPassword}
            onChangeText={(value: string) => updateField('confirmPassword', value)}
            originalPassword={formData.password}
          />
        </View>
        <View style={registerStyles.buttonContainer}>
          <Button
            title={isLoading ? "Creating Account..." : "Create Account"}
            onPress={handleRegister}
            disabled={isLoading || !isFormValid()}
          />
        </View>
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
