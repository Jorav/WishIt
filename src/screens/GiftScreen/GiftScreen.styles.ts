import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const giftScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg
  },

  emptyTitle: {
    fontSize: TYPOGRAPHY.sizes.large,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.sm
  },

  emptySubtitle: {
    fontSize: TYPOGRAPHY.sizes.medium,
    color: COLORS.gray,
    textAlign: 'center'
  }
})