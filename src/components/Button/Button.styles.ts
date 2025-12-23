import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    marginVertical: SPACING.sm
  },
  
  secondary: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: SPACING.sm,
    alignItems: 'center',
    marginVertical: SPACING.sm
  },
  
  text: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.sizes.medium,
    fontWeight: TYPOGRAPHY.weights.bold
  },
  
  textSecondary: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.sizes.medium,
    fontWeight: TYPOGRAPHY.weights.bold
  },
  
  disabled: {
    opacity: 0.5
  },
  
  textDisabled: {
    opacity: 0.7
  }
})
