import React, { useState, useEffect, memo } from 'react'
import { View, TextInput, Text } from 'react-native'
import { COLORS } from '../../../constants/Colors'
import { inputStyles } from '../../Input/Input.styles'
import { validatedInputStyles } from './ValidatedInput.styles'

interface ValidatedInputProps {
  label?: string
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  validate?: (value: string) => string | null
  debounceMs?: number
}

const ValidatedInput = memo(function ValidatedInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  validate,
  debounceMs = 500
}: ValidatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasBeenTouched, setHasBeenTouched] = useState(false)
  const [isValidating, setIsValidating] = useState(false)

  useEffect(() => {
    if (!hasBeenTouched) return

    setIsValidating(true)
    const timeoutId = setTimeout(() => {
      let errorMessage = null

      if (!value.trim()) {
        errorMessage = 'This field is required'
      } else if (validate) {
        errorMessage = validate(value)
      }

      setError(errorMessage)
      setIsValidating(false)
    }, debounceMs)

    return () => clearTimeout(timeoutId)
  }, [value, validate, debounceMs, hasBeenTouched])

  const handleChangeText = (text: string) => {
    onChangeText(text)
    if (!hasBeenTouched) {
      setHasBeenTouched(true)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    setHasBeenTouched(true)
    
    let errorMessage = null
    if (!value.trim()) {
      errorMessage = 'This field is required'
    } else if (validate) {
      errorMessage = validate(value)
    }
    
    setError(errorMessage)
    setIsValidating(false)
  }

  const hasError = error !== null && hasBeenTouched && !isValidating

  const getInputStyle = () => {
    if (isFocused) {
      return inputStyles.inputFocused
    } else if (hasError) {
      return validatedInputStyles.inputError
    }
    return null
  }

  return (
    <View style={inputStyles.container}>
      {label && <Text style={inputStyles.label}>{label}</Text>}
      
      <TextInput
        style={[
          inputStyles.input,
          getInputStyle()
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.gray}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />
      
      {hasError && (
        <Text style={validatedInputStyles.errorText}>{error}</Text>
      )}
    </View>
  )
})

export default ValidatedInput
