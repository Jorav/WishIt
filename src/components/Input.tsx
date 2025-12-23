import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface InputProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

export default function Input({ placeholder, value, onChangeText, secureTextEntry }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={COLORS.gray}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.lightGray,
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    fontSize: 16
  }
})
