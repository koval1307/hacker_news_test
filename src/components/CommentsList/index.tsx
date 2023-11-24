import {ActivityIndicator, View} from 'react-native';
import React, {forwardRef} from 'react';

import {FlashList} from '@shopify/flash-list';
import {useComments} from '../../hooks/useComments';
import {CommentType} from '../../types/news';
import CommentItem from '../CommentItem';
import {styles} from './styles';
import BottomSheet from '@gorhom/bottom-sheet';

const CommentsList = forwardRef(({comments}: {comments: number[]}, ref) => {
  const {data, isLoading} = useComments(comments);
  const snapPoints = ['1%', '50%', '75%', '100%'];
  return (
    <BottomSheet ref={ref} snapPoints={snapPoints}>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlashList
            data={data}
            estimatedItemSize={100}
            ItemSeparatorComponent={() => <View style={styles.text} />}
            renderItem={({item}: {item: CommentType}) => (
              <CommentItem comment={item} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </BottomSheet>
  );
});

export default CommentsList;
