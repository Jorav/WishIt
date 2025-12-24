import React, { memo, useCallback } from 'react'
import ValidatedInput from './ValidatedInput'
import { validation } from '../../../services/validation'

interface PasswordInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
}

const PasswordInput = memo(function PasswordInput({
  label = "Password",
  placeholder = "Enter your password",
  value,
  onChangeText
}: PasswordInputProps) {
  const validatePassword = useCallback((password: string): string | null => {
    if (!validation.required(password)) {
      return 'Password is required'
    }
    
    const passwordValidation = validation.password(password)
    if (!passwordValidation.isValid) {
      return passwordValidation.message || 'Invalid password'
    }
    
    return null
  }, [])

  return (
    <ValidatedInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry
      validate={validatePassword}
      debounceMs={300}
    />
  )
})

export default PasswordInput
