import React from 'react';
import {Text} from 'react-native';
import {Thumbnail, Left, Body, ListItem} from 'native-base';

import {withNavigation} from 'react-navigation';

const Series = props => {
  const {item, navigation} = props;

  return (
    <ListItem
      thumbnail
      onPress={() => {
        navigation.navigate('SingleSeries');
      }}>
      <Left>
        <Thumbnail square source={{uri: item.image ? item.image.medium : ''}} />
      </Left>
      <Body style={{marginRight: 20}}>
        <Text style={{fontWeight: '600', fontSize: 17, marginBottom: 5}}>
          {item.name}
        </Text>
        <Text note numberOfLines={1}>
          {item.summary}
        </Text>
      </Body>
    </ListItem>
  );
};

export default withNavigation(Series);
