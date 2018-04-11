/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper2';

const { width, height } = Dimensions.get(('window'));

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class HomeContent extends Component {

  render() {
    return (
      <Swiper
        horizontal={true}
        // removeClippedSubviews={false}
        autoplay={true}
        showsPagination={true}
        paginationStyle={styles.paginationStyle}
        renderPagination={renderPagination}
        activeDot={<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
      >
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
        </View>

        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
        </View>

        <View style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
        </View>

        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width,
    height: 240
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
});