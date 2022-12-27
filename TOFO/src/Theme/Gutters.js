import { StyleSheet } from 'react-native'
/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ MetricsSizes }) {
  return StyleSheet.create({
    container:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
  },
  textInput: {
    justifyContent: "center",
    borderRadius:30,
    width: 300,
    borderWidth:1,
},
        forgot: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        },
        //background
        forgotBackground: {
          width: "100%",
          height: "100%"
        },
        //app content
        forgotMain: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '60%',
          flex: 4,
        },
        //appTitle
        forgotTitle: {
          margin: 20
        },
        //input-box text
        forgotText: {
          textAlign: 'center',
          justifyContent: 'center',
        },
        //disabled button
        forgotButton: {
          height: 60,
          width: 300,
          margin: 50,
          borderRadius: 30,
        },
        //Enable button
        buttonText: {
          height: 50,
          marginVertical: 40,
          width: 300,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center'
        },
  })
}
