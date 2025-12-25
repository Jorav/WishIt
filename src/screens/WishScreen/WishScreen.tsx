import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Button from '../../components/Button/Button'
import WishItem from '../../components/WishItem/WishItem'
import { wishScreenStyles } from './WishScreen.styles'

interface Wish {
  id: string
  title: string
  description?: string
  price?: number
  priority: number
  imageUrl?: string
  createdAt: string
}

export default function WishScreen({ navigation }: any) {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: '1',
      title: 'iPhone 15 Pro',
      description: 'Latest iPhone with amazing camera',
      price: 999,
      priority: 1,
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      title: 'Nike Air Jordan 1',
      description: 'Classic sneakers in black and red',
      price: 170,
      priority: 2,
      createdAt: '2024-01-02'
    },
    {
      id: '3',
      title: 'MacBook Pro 14"',
      description: 'Perfect for development work',
      price: 1999,
      priority: 3,
      createdAt: '2024-01-03'
    }
  ])

  const handleAddWish = () => {
    navigation.navigate('AddWish')
  }

  const handleWishPress = (wishId: string) => {
    console.log('Edit wish:', wishId)
  }

  const handleDeleteWish = (wishId: string) => {
    setWishes(prev => prev.filter(wish => wish.id !== wishId))
  }

  const sortedWishes = wishes.sort((a, b) => a.priority - b.priority)

  const renderEmptyState = () => (
    <View style={wishScreenStyles.emptyState}>
      <Text style={wishScreenStyles.emptyTitle}>No wishes yet!</Text>
      <Text style={wishScreenStyles.emptySubtitle}>
        Start building your wishlist by adding your first wish
      </Text>
      <Button
        title="Add Your First Wish"
        onPress={handleAddWish}
      />
    </View>
  )

  const renderWishItem = ({ item, index }: { item: Wish; index: number }) => (
    <WishItem
      wish={item}
      index={index}
      onPress={() => handleWishPress(item.id)}
      onDelete={() => handleDeleteWish(item.id)}
    />
  )

  return (
    <View style={wishScreenStyles.container}>
      <View style={wishScreenStyles.header}>
        <Text style={wishScreenStyles.title}>My Wishlist</Text>
        <Text style={wishScreenStyles.subtitle}>
          {wishes.length === 0 ? 'Start your journey' : `${wishes.length} wishes`}
        </Text>
      </View>

      <FlatList
        data={sortedWishes}
        renderItem={renderWishItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={wishScreenStyles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
      />

      <View style={wishScreenStyles.floatingButtonContainer}>
        <TouchableOpacity
          style={wishScreenStyles.floatingButton}
          onPress={handleAddWish}
        >
          <Text style={wishScreenStyles.floatingButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
