import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import NewsList from '../../components/NewsList';
import {View} from 'react-native';
import LoadingScreen from '../../components/LoadingComponent';
import {usePosts} from '../../hooks/usePosts';

const Poll = () => {
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {data, isLoading, refetch} = usePosts(page, 'ask');

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, [refetch]);

  useEffect(() => {
    if (!data?.length && !isLoading) {
      handleRefresh();
    }
  }, [data, handleRefresh, isLoading]);

  const handlePageClick = (p: number) => setPage(p);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <NewsList
          data={data}
          page={page}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          handlePageClick={handlePageClick}
        />
      )}
    </View>
  );
};

export default Poll;
