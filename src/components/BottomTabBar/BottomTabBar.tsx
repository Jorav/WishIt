import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { bottomTabBarStyles } from './BottomTabBar.styles'

export type TabType = 'Wish' | 'Gift' | 'Profile'

interface BottomTabBarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export default function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  const tabs: TabType[] = ['Wish', 'Gift', 'Profile']

  return (
    <View style={bottomTabBarStyles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={bottomTabBarStyles.tabButton}
          onPress={() => onTabChange(tab)}
        >
          <Text
            style={[
              bottomTabBarStyles.tabText,
              activeTab === tab && bottomTabBarStyles.tabTextActive
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}