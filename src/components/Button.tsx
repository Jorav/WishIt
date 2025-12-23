import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants/Colors'

interface ButtonProps {
  title: string
  onPress: () => void
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
