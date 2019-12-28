import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

const SingleSeries = props => {
  const {navigation} = props;
  // we get the props from navigation and set default value 0
  // const seriesID = navigation.getParam('seriesID', 0);
  const image = navigation.getParam(
    'image',
    'https://via.placeholder.com/210x295.png?text=No+Image',
  );
  const title = navigation.getParam('title', '-');
  const summary = navigation.getParam('summary', '-');
  const clearSum = summary
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const series = navigation.getParam('allProps', {});
  const rating = series.rating.average || 0;

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.posterContainer}>
            <Image style={styles.poster} source={{uri: image}} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.textType}>{series.type}</Text>
            <Text>Language: {series.language}</Text>
            <Text style={{marginVertical: 5}}>Status: {series.status}</Text>
            <Text>Premiered: {series.premiered}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.subHeader, {marginBottom: 10}]}>Genres:</Text>
          {series.genres.length > 0 ? (
            <FlatList
              data={series.genres}
              contentContainerStyle={{flexDirection: 'row'}}
              renderItem={item => <Genres genre={item.item} />}
              keyExtractor={item => item.index}
            />
          ) : (
            <Genres />
          )}
        </View>
        <Text style={[styles.subHeader, {marginTop: 20, marginBottom: 5}]}>
          Summary:
        </Text>
        <Text style={styles.summary}>{clearSum}</Text>
      </View>
    </ScrollView>
  );
};

const Genres = props => {
  return (
    <View style={styles.genresContainer}>
      <Text style={styles.genreText}>
        {props.genre ? props.genre : 'No Genre'}
      </Text>
    </View>
  );
};

export default SingleSeries;

const styles = StyleSheet.create({
  image: {
    height: 350,
    resizeMode: 'cover',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFBB27',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: 20,
    bottom: 25,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  header: {
    marginHorizontal: 20,
    top: -50,
  },
  row: {flexDirection: 'row'},
  poster: {
    width: 126,
    height: 177,
    top: -40,
    borderRadius: 10,
  },
  posterContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    marginLeft: 20,
    marginTop: 25,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textType: {
    fontWeight: '400',
    color: '#B4B9C5',
    marginBottom: 5,
  },
  subHeader: {fontWeight: 'bold', fontSize: 17, color: '#B4B9C5'},
  summary: {lineHeight: 25},
  genresContainer: {
    marginRight: 5,
    backgroundColor: '#FFBB27',
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
  },
  genreText: {paddingHorizontal: 5, color: '#FFF'},
});
