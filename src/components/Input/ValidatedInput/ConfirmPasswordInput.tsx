import React from 'react'
import ValidatedInput from './ValidatedInput'

interface ConfirmPasswordInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  originalPassword: string
}

export default function ConfirmPasswordInput({
  label = "Confirm Password",
  placeholder = "Confirm your password",
  value,
  onChangeText,
  originalPassword
}: ConfirmPasswordInputProps) {
  const validateConfirmPassword = (confirmPassword: string): string | null => {
    if (!confirmPassword) {
      return 'Please confirm your password'
    }
    
    if (confirmPassword !== originalPassword) {
      return 'Passwords do not match'
    }
    
    return null
  }

  return (
    <ValidatedInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry
      validate={validateConfirmPassword}
      debounceMs={300}
    />
  )
}
