/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

import { COLOR } from "./Variables";

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ( ...args) {
  return {
    container:{ 
      backgroundColor: COLOR.WHITE
  },
  textInput: {
    backgroundColor: COLOR.BLACK,
    borderColor: COLOR.BLACK,
    color: COLOR.BLACK
},
   //appTitle
  forgotTitle: {
    color: COLOR.ORANGE,
},

//input-box text
forgotText: {
    color: COLOR.BLACK,
},
//Enable button
buttonText: {
    backgroundColor: COLOR.ORANGE,
    },
  
  }
}
