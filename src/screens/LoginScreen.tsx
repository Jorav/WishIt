import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { COLORS } from '../constants/Colors'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login', `Email: ${email}`)
      // Here you'd call your API later
    } else {
      Alert.alert('Error', 'Please fill in all fields')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: COLORS.text
  }
})
