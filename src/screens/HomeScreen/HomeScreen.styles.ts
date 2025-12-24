import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/Colors'
import { SPACING } from '../../constants/Spacing'
import { TYPOGRAPHY } from '../../constants/Typography'

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },

  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md
  },

  title: {
    fontSize: TYPOGRAPHY.sizes.xlarge,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.xs
  },

  subtitle: {
    fontSize: TYPOGRAPHY.sizes.medium,
    color: COLORS.gray
  },

  listContainer: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: 100
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl * 2
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
    textAlign: 'center',
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.lg
  },

  floatingButtonContainer: {
    position: 'absolute',
    bottom: SPACING.lg,
    right: SPACING.lg
  },

  floatingButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },

  floatingButtonText: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: TYPOGRAPHY.weights.bold
  }
})
