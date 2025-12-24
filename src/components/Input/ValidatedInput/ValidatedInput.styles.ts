import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants/Colors'
import { SPACING } from '../../../constants/Spacing'
import { TYPOGRAPHY } from '../../../constants/Typography'

export const validatedInputStyles = StyleSheet.create({
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.error,
    backgroundColor: COLORS.white
  },
  
  errorText: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.error,
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs
  }
})
