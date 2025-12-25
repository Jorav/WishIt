import React from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../../components/Button/Button'
import { authUtils } from '../../services/authUtils'
import { profileScreenStyles } from './ProfileScreen.styles'

export default function ProfileScreen({ navigation }: any) {
  const handleLogout = async () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out', 
          style: 'destructive',
          onPress: async () => {
            await authUtils.removeToken()
            navigation.navigate('Login')
          }
        }
      ]
    )
  }

  return (
    <View style={profileScreenStyles.container}>
      <View style={profileScreenStyles.header}>
        <Text style={profileScreenStyles.title}>Profile</Text>
      </View>
      
      <View style={profileScreenStyles.content}>
        <Button
          title="Log Out"
          onPress={handleLogout}
          variant="secondary"
        />
      </View>
    </View>
  )
}
