import React from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon = (props) => (
  <Svg width={13} height={21} viewBox="0 0 13 21" fill="none" {...props}>
    <Path
      d="M11.92 18.49l-8.67-7.8 8.67-7.8c1.25-1.13-.6-2.98-1.85-1.85C6.84 3.95 3.61 6.86.38 9.76c-.51.46-.51 1.4 0 1.85 3.23 2.91 6.46 5.82 9.69 8.72 1.25 1.14 3.11-.71 1.85-1.84z"
      fill="#000"
    />
  </Svg>
);

export default BackIcon;
