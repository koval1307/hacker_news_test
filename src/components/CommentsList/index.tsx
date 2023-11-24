import { ActivityIndicator, View } from "react-native";
import React, { forwardRef, useCallback } from "react";

import { FlashList } from "@shopify/flash-list";
import { useComments } from "../../hooks/useComments";
import { CommentType } from "../../types/news";
import CommentItem from "../CommentItem";
import { styles } from "./styles";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import BottomSheetBackground from "../BottomSheetBackground";

const CommentsList = forwardRef(({ comments }: { comments: number[] }, ref) => {
  const { data, isLoading } = useComments(comments);
  const snapPoints = ["1%", "50%", "75%", "90%"];

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={2}
        disappearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={0}
      backdropComponent={renderBackdrop}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
    >
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.commentsListWrapper}>
            <FlashList
              data={data}
              estimatedItemSize={200}
              ItemSeparatorComponent={() => <View style={styles.text} />}
              renderItem={({ item }: { item: CommentType }) => (
                <CommentItem comment={item} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}
      </View>
    </BottomSheet>
  );
});

export default CommentsList;
