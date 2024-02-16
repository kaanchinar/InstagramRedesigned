import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={11.1} stroke="#000" strokeWidth={1.8} />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M6.577 16.76a.5.5 0 0 0 .664.663l6.786-3.153a.5.5 0 0 0 .243-.243l3.153-6.786a.5.5 0 0 0-.664-.664L9.973 9.73a.5.5 0 0 0-.243.243l-3.153 6.786ZM12 10.8c.665 0 1.2.534 1.2 1.2 0 .665-.535 1.2-1.2 1.2-.666 0-1.2-.535-1.2-1.2 0-.665.534-1.2 1.2-1.2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export { SvgComponent as ExploreIcon }
