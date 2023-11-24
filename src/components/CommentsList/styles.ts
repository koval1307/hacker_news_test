import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentsListWrapper: {
    height: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width,
  },
  text: {
    height: 1,
    backgroundColor: "#1f2937",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  comment: {
    padding: 8,
  },
  time: {
    color: "#6b7280",
    fontSize: 12,
    paddingVertical: 2,
  },
});
