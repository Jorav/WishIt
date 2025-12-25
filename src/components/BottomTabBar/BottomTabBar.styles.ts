import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const bottomTabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    elevation: 8,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.sm
  },

  tabText: {
    fontSize: TYPOGRAPHY.sizes.medium,
    color: COLORS.gray,
    fontWeight: TYPOGRAPHY.weights.medium
  },

  tabTextActive: {
    color: COLORS.primary,
    fontWeight: TYPOGRAPHY.weights.bold
  }
})