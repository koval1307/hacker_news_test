import React from "react";
import { View, ViewStyle, StyleProp } from "react-native";

type BottomSheetBackgroundProps = {
  style?: StyleProp<ViewStyle>;
  pointerEvents?: "none" | "auto" | "box-none" | "box-only" | undefined;
};

const defaultProps: BottomSheetBackgroundProps = {
  style: {},
  pointerEvents: undefined,
};

function BottomSheetBackground({
  style,
  pointerEvents,
}: BottomSheetBackgroundProps) {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          borderRadius: 24,
        },
        style,
      ]}
      pointerEvents={pointerEvents}
    />
  );
}

BottomSheetBackground.defaultProps = defaultProps;
BottomSheetBackground.displayName = "BottomSheetBackground";

export default BottomSheetBackground;
