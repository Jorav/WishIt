import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const wishItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.sm,
    marginVertical: SPACING.xs,
    padding: SPACING.md,
    elevation: 2,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.border
  },

  dragHandle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: SPACING.md,
    paddingVertical: SPACING.sm
  },

  dragDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.gray,
    marginVertical: 1
  },

  content: {
    flex: 1
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs
  },

  priority: {
    fontSize: TYPOGRAPHY.sizes.small,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: SPACING.xs,
    paddingVertical: 2,
    borderRadius: 4
  },

  deleteButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center'
  },

  deleteText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: TYPOGRAPHY.weights.bold,
    lineHeight: 16
  },

  title: {
    fontSize: TYPOGRAPHY.sizes.medium,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.xs
  },

  description: {
    fontSize: TYPOGRAPHY.sizes.small,
    color: COLORS.gray,
    marginBottom: SPACING.sm,
    lineHeight: 18
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  price: {
    fontSize: TYPOGRAPHY.sizes.medium,
    fontWeight: TYPOGRAPHY.weights.medium,
    color: COLORS.primary
  }
})
