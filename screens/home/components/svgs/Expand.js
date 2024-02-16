import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Circle cx={9.667} cy={9.667} r={3.542} stroke="#000" strokeWidth={2.25} />
    <Circle cx={20.333} cy={9.667} r={3.542} stroke="#000" strokeWidth={2.25} />
    <Circle cx={9.667} cy={20.333} r={3.542} stroke="#000" strokeWidth={2.25} />
    <Circle
      cx={20.333}
      cy={20.333}
      r={3.542}
      stroke="#000"
      strokeWidth={2.25}
    />
  </Svg>
)
export { SvgComponent as Expand }
