import { G, Path, Polygon, Svg } from "react-native-svg";
import React from "react";

const IconNews = ({
  color,
  focused,
}: {
  color?: string;
  focused?: boolean;
}) => {
  return (
    <Svg fill={focused ? "#FF6600" : "#fff"} height="20px" width="35px">
      <G id="news">
        <Polygon points="22,22 4,22 4,24 24,24 24,21 22,21 	" />
        <Path d="M18.414,0H4v9h2V2h10v6h6v3h2V5.586L18.414,0z M18,6V2.414L21.586,6H18z" />
        <Polygon points="5.999,20 5.999,12 4,12 4,15.926 2,12 0.002,12 0.002,20 2,20 2,15.914 4,20 	" />
        <Polygon points="12,12 12,20 14,20 15,18 16,20 18,20 18,12 16,12 16,16 15,14 14,16 14,12 	" />
        <Polygon points="11,14 11,12 9,12 8,12 7,12 7,20 8,20 9,20 11,20 11,18 9,18 9,17 10,17 10,15 9,15 9,14 	" />
        <Path
          d="M21,12c-1,0-2,1-2,2.5s1,2.5,2,2.5h0.553c0.642,0,0.577,1,0,1H19v2h2.673c0,0,2.327,0,2.327-2.5S22.573,15,21.573,15
		c-0.766,0-0.755-1,0-1H24v-2h-2H21z"
        />
      </G>
    </Svg>
  );
};

export default IconNews;
