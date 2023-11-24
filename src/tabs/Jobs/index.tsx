import {View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import LoadingScreen from '../../components/LoadingComponent';
import NewsList from '../../components/NewsList';
import {styles} from './styles';
import {usePosts} from '../../hooks/usePosts';

const Jobs = () => {
  const [page, setPage] = React.useState<number>(1);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const {data, isLoading, refetch} = usePosts(page, 'job');

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    refetch().then(() => {
      setRefreshing(false);
    });
  }, [refetch]);
  const handlePageClick = (p: number) => setPage(p);

  useEffect(() => {
    if (!data?.length && !isLoading) {
      handleRefresh();
    }
  }, [data, handleRefresh, isLoading]);

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

export default Jobs;
