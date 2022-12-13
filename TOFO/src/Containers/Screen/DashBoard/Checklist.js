import { StyleSheet, Text, View,StatusBar } from 'react-native';
import React from 'react';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
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







