import React from "react";
import Svg, { Path } from "react-native-svg";

const File = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    aria-hidden="true"
    data-prefix="far"
    data-icon="file-image"
    className="svg-inline--fa fa-file-image fa-w-12"
    viewBox="0 0 384 512"
  >
    <Path
      fill={fill}
      d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
    />
  </Svg>
);

export default File;
