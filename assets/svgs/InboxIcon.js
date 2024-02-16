import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.8}
      d="M2 16v1a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-1M2 16V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v9M2 16h4.586c.905 0 1.774.36 2.414 1 .64.64 1.509 1 2.414 1h1.172c.905 0 1.774-.36 2.414-1 .64-.64 1.509-1 2.414-1H22"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 11 3 3m0 0 3-3m-3 3V6"
    />
  </Svg>
)
export { SvgComponent as InboxIcon }
