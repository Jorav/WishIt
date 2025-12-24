import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const inputStyles = StyleSheet.create({
  container: {
    marginVertical: SPACING.xs
  },
  
  input: {
    backgroundColor: COLORS.lightGray,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    fontSize: TYPOGRAPHY.sizes.medium,
    color: COLORS.text
  },
  
  inputFocused: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.gray,
    marginBottom: SPACING.xs,
    fontWeight: TYPOGRAPHY.weights.medium
  }
})
