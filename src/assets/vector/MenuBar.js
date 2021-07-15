import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const MenuBar = (props) => (
  <Svg width={25} height={21} viewBox="0 0 25 21" fill="none" {...props}>
    <G clipPath="url(#clip0)" fill="#69CEED">
      <Path d="M1.7 3.52h21.16c2.27 0 2.27-3.52 0-3.52H1.7c-2.26 0-2.27 3.52 0 3.52zM1.7 8.93h21.16c2.27 0 2.27-3.52 0-3.52H1.7c-2.26 0-2.27 3.52 0 3.52zM1.7 14.8h21.16c2.27 0 2.27-3.52 0-3.52H1.7c-2.26 0-2.27 3.52 0 3.52zM1.7 20.8h21.16c2.27 0 2.27-3.52 0-3.52H1.7c-2.26 0-2.27 3.52 0 3.52z" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Path fill="#fff" d="M0 0H24.56V20.8H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuBar;
