import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
export default function Checklist() {
  return (
    <View style={Styles.container}>
      <Text style={{color:'black'}}>Checklist Soon...</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20
  },
});







