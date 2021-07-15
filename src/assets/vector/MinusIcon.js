import React from "react";
import Svg, { Path } from "react-native-svg";

const MinusIcon = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    aria-hidden="true"
    data-prefix="fas"
    data-icon="minus"
    className="svg-inline--fa fa-minus fa-w-14"
    viewBox="0 0 448 512"
  >
    <Path
      fill={fill}
      d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    />
  </Svg>
);

export default MinusIcon;
