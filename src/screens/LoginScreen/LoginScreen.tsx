import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { loginStyles } from './LoginScreen.styles'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login', `Welcome ${email}!`)
    } else {
      Alert.alert('Error', 'Please fill in all fields')
    }
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
          value={email}
          onChangeText={setEmail}
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      <Button title="Sign In" onPress={handleLogin} />
      
      <View style={loginStyles.footer}>
        <Text style={loginStyles.footerText}>Don't have an account? Sign up</Text>
      </View>
    </View>
  )
}
