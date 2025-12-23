import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { inputStyles } from './Input.styles'

interface InputProps {
  label?: string
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

export default function Input({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry 
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={inputStyles.container}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      <TextInput
        style={[
          inputStyles.input,
          isFocused && inputStyles.inputFocused
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.gray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  )
}
