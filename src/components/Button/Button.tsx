import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { buttonStyles } from './Button.styles'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={variant === 'primary' ? buttonStyles.primary : buttonStyles.secondary} 
      onPress={onPress}
    >
      <Text style={variant === 'primary' ? buttonStyles.text : buttonStyles.textSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
