import {Linking, Pressable, Text, View} from 'react-native';
import React from 'react';

import {styles} from './styles';
const NewsListItem = ({item}: {item: any}) => {
  const hasUrl = item.url !== undefined;

  const handleLink = () => {
    if (item.url) {
      Linking.openURL(item.url);
    } else {
      console.log('error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreView}>
        <Text>Score</Text>
        <Text style={styles.scoreText}>{item.score}</Text>
      </View>
      <View style={styles.sideView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>Author {item.by}</Text>
        {hasUrl && (
          <Pressable onPress={handleLink}>
            <Text style={styles.time} numberOfLines={1}>
              {item.url
                .replace('http://', '')
                .replace('https://', '')
                .replace('www.', '')}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default NewsListItem;
