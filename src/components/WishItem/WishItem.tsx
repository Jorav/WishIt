import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { wishItemStyles } from './WishItem.styles'

interface Wish {
  id: string
  title: string
  description?: string
  price?: number
  priority: number
  imageUrl?: string
  createdAt: string
}

interface WishItemProps {
  wish: Wish
  index: number
  onPress: () => void
  onDelete: () => void
}

export default function WishItem({ wish, index, onPress, onDelete }: WishItemProps) {
  const formatPrice = (price?: number) => {
    if (!price) return 'Price not set'
    return `$${price.toLocaleString()}`
  }

  return (
    <TouchableOpacity style={wishItemStyles.container} onPress={onPress}>
      <View style={wishItemStyles.dragHandle}>
        <View style={wishItemStyles.dragDot} />
        <View style={wishItemStyles.dragDot} />
        <View style={wishItemStyles.dragDot} />
      </View>

      <View style={wishItemStyles.content}>
        <View style={wishItemStyles.header}>
          <Text style={wishItemStyles.priority}>#{index + 1}</Text>
          <TouchableOpacity 
            style={wishItemStyles.deleteButton}
            onPress={onDelete}
          >
            <Text style={wishItemStyles.deleteText}>×</Text>
          </TouchableOpacity>
        </View>

        <Text style={wishItemStyles.title}>{wish.title}</Text>
        
        {wish.description && (
          <Text style={wishItemStyles.description}>{wish.description}</Text>
        )}

        <View style={wishItemStyles.footer}>
          <Text style={wishItemStyles.price}>{formatPrice(wish.price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
