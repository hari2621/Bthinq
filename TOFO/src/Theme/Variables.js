/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const COLOR = {
  // Example colors:
    BLACK: "#000000",
    ORANGE: "#DF6229",
    WHITE: "#FFFFFF",
    LIGHT_ORANGE: "#F77D3B",
}

export const NavigationColors = {
  primary: COLOR.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export default {
  COLOR,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
