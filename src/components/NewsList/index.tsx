import React, {useRef, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import NewsListItem from '../NewsListItem';
import {styles} from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import CommentsList from '../CommentsList';
import IconComment from '../../assets/icons/IconComment';

const NewsList = ({
  data,
  refreshing,
  onRefresh,
  page,
  handlePageClick,
}: {
  data?: readonly any[] | null | undefined;
  refreshing: boolean;
  onRefresh: () => void;
  page: number;
  handlePageClick: (p: number) => void;
}) => {
  const [comments, setComments] = useState<any[]>([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const totalPages = data?.length ?? 4;
  const renderPaginationButtons = () => {
    const maxButtonsToShow = 3;
    let startPage = Math.max(1, page - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }
    return Array.from({length: endPage - startPage + 1}, (_, i) => (
      <TouchableOpacity
        key={startPage + i}
        onPress={() => handlePageClick(startPage + i)}
        style={[
          styles.paginationButton,
          startPage + i === page ? styles.activeButton : null,
        ]}>
        <Text style={{color: 'white'}}>{startPage + i}</Text>
      </TouchableOpacity>
    ));
  };

  const handleItemPress = (item: any) => {
    if (item?.kids.length) {
      setComments(item?.kids);
      bottomSheetRef.current?.expand();
    }
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <NewsListItem item={item} />
            {item?.kids?.length && (
              <View style={styles.commentsView}>
                <Pressable onPress={() => handleItemPress(item)}>
                  <IconComment color="black" />
                </Pressable>
                <Text>{item?.kids?.length}</Text>
              </View>
            )}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: '#1f2937'}} />
        )}
        estimatedItemSize={100}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />

      <View style={styles.paginationContainer}>
        {renderPaginationButtons()}
      </View>
      {comments ? (
        <CommentsList ref={bottomSheetRef} comments={comments} />
      ) : null}
    </View>
  );
};

export default NewsList;
