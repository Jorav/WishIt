import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
    marginTop: SPACING.xl,
    paddingHorizontal: SPACING.lg
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.xlarge,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.sm
  },
  
  form: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl
  },
  
  buttonContainer: {
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl
  },
  
  footer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl * 2
  },
  
  footerText: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.gray,
    textAlign: 'center'
  },
  
  linkText: {
    color: COLORS.primary,
    fontWeight: TYPOGRAPHY.weights.medium
  }
})
