import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { buttonStyles } from './Button.styles'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean  // Add this line
}

export default function Button({ title, onPress, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        variant === 'primary' ? buttonStyles.primary : buttonStyles.secondary,
        disabled && buttonStyles.disabled
      ]} 
      onPress={onPress}
      disabled={disabled}  // This was already here but interface was missing
    >
      <Text style={[
        variant === 'primary' ? buttonStyles.text : buttonStyles.textSecondary,
        disabled && buttonStyles.textDisabled
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
