import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'  
import { TYPOGRAPHY } from '../../constants/Typography'

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xl
  },
  
  title: {
    fontSize: TYPOGRAPHY.sizes.xlarge,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.sm
  },
  
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.medium,
    color: COLORS.gray,
    textAlign: 'center'
  },
  
  form: {
    marginBottom: SPACING.lg
  },
  
  footer: {
    alignItems: 'center',
    marginTop: SPACING.lg
  },
  
  footerText: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.gray
  }
})
