import React from "react";
import Svg, { Path } from "react-native-svg";

const iconBill = ({ width, height, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 32 38" fill="none">
    <Path
      d="M2.25.83h24.62c.28.13.58.22.83.39.62.44.83 1.08.83 1.83-.01 7.19 0 14.37-.01 21.56 0 .22 0 .4.23.54 1.09.68 1.92 1.63 2.43 2.81.99 2.28.77 4.46-.62 6.51-.91 1.34-2.27 2.11-3.68 2.79H9.23c-.13-.11-.28-.22-.4-.35-2.63-2.62-5.25-5.25-7.88-7.87-.24-.23-.34-.47-.34-.81.01-6.4.01-12.8.01-19.2V2.95c0-.89.37-1.55 1.18-1.94.14-.07.3-.12.45-.18zm11.34 30.33c-.11-.28-.26-.51-.3-.76-.15-.91.47-1.59 1.44-1.6 1.26-.01 2.51-.01 3.77.01.29 0 .39-.1.5-.36.95-2.43 2.71-3.9 5.3-4.29.61-.09 1.24-.01 1.87-.01V3.18H2.96c-.01.11-.01.2-.01.29v24.02c0 .41.27.67.68.67h3.34c1.67 0 2.73 1.06 2.74 2.74v3.31c0 .48.25.73.74.73h2.78c.1 0 .2-.01.34-.02-.43-.66-.41-1.27.05-1.86-.48-.75-.48-1.19-.03-1.9zm8.83 3.47c1.51 1.2 3.9 1.21 5.56.03a4.896 4.896 0 001.8-5.61c-.67-1.94-2.69-3.32-4.72-3.24-2.22.08-3.89 1.65-4.3 3 .64-.04 1.23.05 1.59.64.35.58.24 1.15-.16 1.67.49.65.48 1.28 0 1.92.41.49.45 1.03.23 1.59zm-4.51-3.13h-3.23c-.47 0-.75.36-.61.78.11.32.38.38.69.38h4.41c.66 0 1.33.01 1.99 0 .38-.01.6-.21.62-.54.02-.38-.23-.61-.66-.61-1.08-.01-2.14-.01-3.21-.01zm0-1.92h-3.16c-.48 0-.74.24-.7.64.03.35.26.52.75.52h6.22c.11 0 .21 0 .32-.02.41-.09.61-.58.33-.88-.14-.15-.41-.24-.62-.25-1.05-.02-2.09-.01-3.14-.01zm.01 5.75h-3.2c-.43 0-.67.2-.68.55-.01.37.23.6.67.6h6.36c.46 0 .7-.21.7-.57 0-.37-.24-.57-.69-.57-1.05-.01-2.11-.01-3.16-.01zm-.05-.76h3.23c.43 0 .66-.2.67-.56.01-.37-.23-.58-.68-.59h-6.36c-.45 0-.69.21-.69.58s.24.57.7.57h3.13z"
      fill={fill}
    />
    <Path
      d="M10.15 24.64c-3.05.03-5.58-2.47-5.61-5.53-.04-3.09 2.44-5.61 5.56-5.65 3.05-.04 5.59 2.48 5.61 5.56.02 3.06-2.48 5.59-5.56 5.62zm-1.06-4.07c-.61-.58-1.19-1.14-1.77-1.69-.2-.19-.42-.31-.65-.07-.2.22-.1.43.1.62l1.98 1.89c.27.25.46.26.7 0 1.25-1.31 2.49-2.63 3.74-3.95.18-.19.28-.41.06-.62-.24-.23-.45-.1-.64.11-.15.17-.31.33-.46.49-1.01 1.05-2.02 2.12-3.06 3.22zM14.53 11.86H5.21c-.12 0-.26.04-.35-.02-.13-.08-.31-.23-.31-.35-.01-.13.15-.29.28-.38.08-.06.23-.03.35-.03H24c.12 0 .27-.03.35.03.12.1.26.26.27.39 0 .11-.16.27-.29.33-.11.06-.28.02-.42.02-3.14.01-6.26.01-9.38.01zM17.55 8.47h-6.33c-.12 0-.26.04-.35-.02-.14-.09-.34-.24-.34-.37 0-.12.2-.27.33-.37.07-.05.21-.02.31-.02h12.76c.5 0 .73.12.69.4-.06.42-.4.37-.69.37-2.11.01-4.24.01-6.38.01zM4.5 7.12a2.377 2.377 0 012.36-2.39c1.32-.01 2.41 1.08 2.4 2.39-.01 1.3-1.1 2.38-2.39 2.38-1.28 0-2.36-1.08-2.37-2.38zm2.39-1.61c-.89 0-1.61.7-1.62 1.59-.01.88.72 1.62 1.6 1.62.88 0 1.61-.73 1.62-1.6a1.6 1.6 0 00-1.6-1.61zM14.69 6.46h-3.63c-.37 0-.57-.15-.55-.4.03-.32.27-.38.54-.38h7.25c.27 0 .49.09.49.39 0 .3-.21.39-.49.39-1.2-.01-2.4 0-3.61 0zM20.76 17.69h3.27c.11 0 .24-.03.31.02.12.09.26.23.28.36.01.11-.12.26-.23.35-.08.06-.23.05-.34.05h-6.76c-.24-.02-.41-.14-.41-.4.01-.26.18-.38.43-.38h3.45zM20.76 20.4h-3.34c-.22 0-.44-.02-.51-.28-.06-.25.05-.42.3-.48.11-.03.24-.02.35-.02h6.61c.27 0 .48.11.47.41-.01.27-.21.37-.47.37h-3.41zM20.76 15.76h3.23c.12 0 .26-.03.35.02.12.08.28.22.29.34.01.12-.14.28-.26.36-.09.06-.25.04-.38.04h-6.5c-.41-.01-.61-.13-.6-.39.02-.39.31-.38.6-.38 1.09.01 2.18.01 3.27.01zM20.72 22.33h-3.2c-.11 0-.24.03-.31-.02-.12-.08-.3-.22-.29-.33 0-.13.14-.3.27-.39.09-.06.25-.04.38-.04h6.4c.48 0 .68.11.69.38.01.28-.19.4-.7.4-1.09.01-2.16 0-3.24 0zM24.38 29.52c-.02.32.21.5.5.62.35.15.71.26 1.05.42.57.26.88.71.87 1.35-.02.65-.33 1.13-.91 1.42-.2.1-.33.17-.31.43.01.24-.14.41-.4.39-.24-.01-.37-.17-.35-.4.01-.23-.12-.29-.28-.41-.3-.21-.55-.5-.79-.78-.15-.19-.06-.43.15-.5.14-.04.34.05.49.13.07.03.1.16.16.23.24.28.54.38.89.27.35-.11.54-.38.57-.74.04-.36-.18-.58-.48-.71-.29-.13-.6-.23-.9-.34-.7-.26-1.02-.67-1.04-1.33-.02-.71.29-1.24.93-1.54.19-.09.31-.17.29-.41-.02-.23.12-.39.36-.4.26-.01.41.15.4.4-.01.25.13.31.31.43.28.18.51.44.72.7.16.2.14.44-.11.58-.23.13-.42.02-.54-.18-.17-.28-.39-.48-.73-.49-.49-.03-.85.33-.85.86z"
      fill={fill}
    />
  </Svg>
);

export default iconBill;