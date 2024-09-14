import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={390}
    height={147}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h390v147H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={195}
        x2={195}
        y1={0}
        y2={119.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#090909" stopOpacity={0} />
        <Stop offset={0.567} stopColor="#090909" stopOpacity={0.789} />
        <Stop offset={1} stopColor="#090909" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent



