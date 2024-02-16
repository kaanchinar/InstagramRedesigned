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
      d="M2 16.5v.5a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-.5m-20 0V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v9.5m-20 0h4.586c.905 0 1.774.36 2.414 1 .64.64 1.509 1 2.414 1h1.172c.905 0 1.774-.36 2.414-1 .64-.64 1.509-1 2.414-1H22"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 11 3 3m0 0 3-3m-3 3V6"
    />
    <Path
      fill="#000"
      d="M2 16h4.17a3 3 0 0 1 1.543.427l1.58.95a3 3 0 0 0 .43.212l1.163.465a3 3 0 0 0 2.228 0l1.163-.465c.148-.06.292-.13.43-.213l1.58-.949A3 3 0 0 1 17.832 16H22v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3Z"
    />
  </Svg>
)
export { SvgComponent as InboxIconSelected }
