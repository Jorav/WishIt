import React from 'react'
import { View, Text } from 'react-native'
import { giftScreenStyles } from './GiftScreen.styles'

export default function GiftScreen() {
  return (
    <View style={giftScreenStyles.container}>
      <View style={giftScreenStyles.emptyState}>
        <Text style={giftScreenStyles.emptyTitle}>Gift Feature</Text>
        <Text style={giftScreenStyles.emptySubtitle}>
          Coming soon! You'll be able to browse others wish lists.
        </Text>
      </View>
    </View>
  )
}
