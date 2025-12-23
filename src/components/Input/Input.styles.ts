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
    borderWidth: 2,
    borderColor: COLORS.primary
  },
  
  label: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.gray,
    marginBottom: SPACING.xs
  }
})
