import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function Spacer({children}) {
  return (
    <View style={styles.spacer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
})