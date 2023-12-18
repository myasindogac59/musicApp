import { StyleSheet, Text, TextInput, View } from 'react-native'
import styles from './searchBar.style'
import React from 'react'

export default function SearchBar({onSearch}) {
  
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Ara...'
      onChangeText={onSearch}
      />
    </View>
  )
}

