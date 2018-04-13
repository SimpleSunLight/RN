// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Image
// } from 'react-native';
// import Swiper from 'react-native-swiper';

// const { width } = Dimensions.get('window')

// const renderPagination = (index, total, context) => {
//   return (
//     <View style={styles.paginationStyle}>
//       <Text style={{ color: 'grey' }}>
//         <Text style={styles.paginationText}>{index + 1}</Text>/{total}
//       </Text>
//     </View>
//   )
// }

// class HomeContent extends Component {
//   render () {
//     return (
//       <Swiper 
//         style={styles.wrapper} 
//         height={240}
//         onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
//         dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//         activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//         paginationStyle={{ bottom: -23, left: null, right: 10}}
//         loop={true}
//       >
//         <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
//           <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
//         </View>
//         <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
//           <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
//         </View>
//         <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
//           <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
//         </View>
//         <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
//           <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
//         </View>
//       </Swiper>
//     )
//   }
// }

// const styles = {
//   wrapper: {
//   },
//   slide: {
//     flex: 1,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//   image: {
//     width,
//     flex: 1
//   },
//   paginationStyle: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10
//   },
//   paginationText: {
//     color: 'white',
//     fontSize: 20
//   }
// }

// export default HomeContent;

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {
    margin: 0,
    padding: 0,
    
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
})

export default class extends Component {
  render () {
    return (
      <Swiper style={styles.wrapper}
        height={200}
        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        paginationStyle={{ bottom: -23, left: null, right: 10 }} 
        loop={true}
      >
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
        </View>
        <View style={styles.slide}>
          <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
        </View>
      </Swiper>
    )
  }
}