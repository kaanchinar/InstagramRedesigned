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
      fill="#000"
      fillRule="evenodd"
      d="M10.55 4.626a2.1 2.1 0 0 1 2.9 0l7 6.675a2.1 2.1 0 0 1 .65 1.52V19a2.1 2.1 0 0 1-2.1 2.1H16.8v-4.202a4.798 4.798 0 1 0-9.597 0V21.1H5A2.1 2.1 0 0 1 2.9 19v-6.18a2.1 2.1 0 0 1 .65-1.52l7-6.674ZM9 22v.9H5A3.9 3.9 0 0 1 1.1 19v-6.18A3.9 3.9 0 0 1 2.31 9.998l7-6.675a3.9 3.9 0 0 1 5.383 0l7 6.675A3.9 3.9 0 0 1 22.9 12.82V19a3.9 3.9 0 0 1-3.9 3.9h-4V22h-.002v-5.102a2.998 2.998 0 1 0-5.996 0V22H9Z"
      clipRule="evenodd"
    />
  </Svg>
)
export { SvgComponent as HomeIcon }
