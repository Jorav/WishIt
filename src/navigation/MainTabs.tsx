import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WishScreen from '../screens/WishScreen/WishScreen'
import GiftScreen from '../screens/GiftScreen/GiftScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import { COLORS } from '../constants/Colors'

const Tab = createBottomTabNavigator()

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60
        }
      }}
    >
      <Tab.Screen 
        name="Wish" 
        component={WishScreen}
        options={{
          tabBarLabel: 'Wish'
        }}
      />
      <Tab.Screen 
        name="Gift" 
        component={GiftScreen}
        options={{
          tabBarLabel: 'Gift'
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  )
}
