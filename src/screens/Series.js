import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Form, Item, Label, Input} from 'native-base';
import axios from 'axios';
import _ from 'lodash';

import SeriesCard from '../components/SeriesCard';

class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      result: [],
      loading: false,
      error: false,
      hasSearch: false,
    };

    // trigger real search after 1k miliseconds/1 seconds
    this.search = _.debounce(this.search, 1000);
  }

  onSearch = searchKey => {
    if (searchKey && searchKey.length > 1) {
      this.setState({hasSearch: true, loading: true, search: searchKey});
      this.search(searchKey);
    }
  };

  search = async searchKey => {
    if (searchKey && searchKey.length > 1) {
      try {
        const response = await axios.get(
          `http://api.tvmaze.com/search/shows?q=${searchKey}`,
        );
        this.setState({result: response.data, loading: false, error: false});
      } catch (err) {
        this.setState({loading: false, error: true});
        return Alert.alert(
          'Error',
          'Error connecting to the server, please try again later',
          [{text: 'OK'}],
          {
            cancelable: false,
          },
        );
      }
    }
  };

  render() {
    const {loading, error, search, result, hasSearch} = this.state;

    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Search here..</Label>
            <Input
              onChangeText={text => {
                this.onSearch(text);
              }}
            />
          </Item>
        </Form>
        <View style={styles.seriesContainer}>
          {loading ? (
            <ActivityIndicator color="#DEAA9B" size="large" />
          ) : error ? (
            <Text style={styles.text}>Error, please try again</Text>
          ) : hasSearch && result.length < 1 ? (
            <Text style={styles.text}>
              No series found with keyword "{search}", please try another
              keyword
            </Text>
          ) : (
            <FlatList
              data={result}
              renderItem={({item}) => <SeriesCard item={item.show} />}
              keyExtractor={item => item.show.id.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  seriesContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default Pokemon;
