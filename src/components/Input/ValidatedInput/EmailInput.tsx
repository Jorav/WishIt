import React, { memo, useCallback } from 'react'
import ValidatedInput from './ValidatedInput'
import { validation } from '../../../services/validation'

interface EmailInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
}

const EmailInput = memo(function EmailInput({
  label = "Email",
  placeholder = "Enter your email address",
  value,
  onChangeText
}: EmailInputProps) {
  const validateEmail = useCallback((email: string): string | null => {
    if (!validation.required(email)) {
      return 'Email is required'
    }
    
    if (!validation.email(email)) {
      return 'Please enter a valid email address'
    }
    
    return null
  }, [])

  return (
    <ValidatedInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      validate={validateEmail}
      debounceMs={800}
    />
  )
})

export default EmailInput
