import { Text, View, useWindowDimensions } from "react-native";
import React from "react";
import RenderHTML from "react-native-render-html";
import { CommentType } from "../../types/news";
import { styles } from "./styles";

const CommentItem = ({ comment }: { comment: CommentType }) => {
  const source = {
    html: comment.text,
  };
  const { width: contentWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {comment.deleted && <Text style={styles.html}>[deleted] • </Text>}
      {!comment.deleted && <Text style={styles.time}>{comment.by} •</Text>}
      <RenderHTML
        baseStyle={styles.html}
        key={comment.id}
        contentWidth={contentWidth}
        source={source}
      />
      {comment.kids && (
        <>
          <Text style={styles.labelText}>
            {comment.kids.length === 1
              ? `${comment.kids.length} reply`
              : `${comment.kids.length} replies`}
          </Text>
        </>
      )}
    </View>
  );
};

export default CommentItem;
