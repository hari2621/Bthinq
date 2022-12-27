/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
  //appTitle
  forgotTitle: {
    fontSize: 40,
},
 //input-box text
 forgotText: {
  fontSize: 23
},
  })
}
