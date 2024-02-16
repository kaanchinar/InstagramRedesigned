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
    <Circle cx={4.375} cy={14.375} r={3.25} stroke="#000" strokeWidth={2.25} />
    <Circle cx={14.571} cy={14.375} r={3.25} stroke="#000" strokeWidth={2.25} />
    <Circle cx={24.766} cy={14.375} r={3.25} stroke="#000" strokeWidth={2.25} />
  </Svg>
)
export { SvgComponent as Collapse }
