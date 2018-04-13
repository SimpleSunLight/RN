/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';

import HomeContent from './home/HomeContent';
import FindContent from './find/FindContent';
import HomeDetails  from './home/HomeDetails';
import MessageContent from './message/MessageContent';
import MineContent from './mine/MineContent';
import Login from './login/index';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      tabBarLabel: '首页',
      headerLeft: (
        <TouchableHighlight
          underlayColor={'white'} 
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('MyModal')}
        >
          <Image
            source={require('../images/mine.png')}
            style={{ width: 26, height: 26 }}
          />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableHighlight
          underlayColor={'white'} 
          style={{ marginRight: 20 }}
          onPress={() => alert('Hello')}
        >
          <Image
            source={require('../images/qrcode.png')}
            style={{ width: 26, height: 26 }}
          />
        </TouchableHighlight>
      ),
      headerTitle: () => (
        <View style={styles.headerWrapper}>
          <Text
            adjustsFontSizeToFit
            style={styles.headerText}>网易</Text>
        </View>
      ),
      tabBarIcon: ({ focused, tinColor }) => (
        <Image
          source={focused ? require('../images/clickheader.png') : require('../images/header.png')}
          style={{ width: 26, height: 26, tintColor: tinColor }}
        />
      ),
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <HomeContent />
      </View>
    );
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}

class Find extends Component {
  static navigationOptions = {
    tabBarLabel: '发现',
    headerTitle: () => (
      <View style={styles.headerWrapper}>
        <Text
          adjustsFontSizeToFit
          style={styles.headerText}>发现</Text>
      </View>
    ),
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? require('../images/clickfind.png') : require('../images/find.png')}
        style={{ width: 26, height: 26, tintColor: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
         <FindContent />
      </View>
    );
  }
}

class Message extends Component {
  static navigationOptions = {
    tabBarLabel: '消息',
    headerTitle: () => (
      <View style={styles.headerWrapper}>
        <Text
          adjustsFontSizeToFit
          style={styles.headerText}>消息</Text>
      </View>
    ),
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? require('../images/clickmessage.png') : require('../images/message.png')}
        style={{ width: 26, height: 26, tintColor: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <MessageContent />
      </View>
    );
  }
}

class Mine extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    headerTitle: () => (
      <View style={styles.headerWrapper}>
        <Text
          adjustsFontSizeToFit
          style={styles.headerText}>我的</Text>
      </View>
    ),
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? require('../images/clickmine.png') : require('../images/mine.png')}
        style={{ width: 26, height: 26, tintColor: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <MineContent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20
  }
});


const MainPage = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Find: {
      screen: Find,
    },
    Message: {
      screen: Message,
    },
    Mine: {
      screen: Mine,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4BC1D2',    //选中时的颜色
      inactiveTintColor: '#000',     //默认时的颜色
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
      labelStyle: {
        fontSize: 12,
        margin: 1
      },
      indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  });

const Navigator = StackNavigator(
  {
    MainPage:{
      screen:MainPage,
    }
  },
  {
    navigationOptions:{
      headerBackTitle:true,
      headerTintColor:'#333333',
      showIcon:true,
      swipeEnabled:false,
      animationEnabled:false,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center'
      }
    },
    mode:'card',
    initialRouteName: 'MainPage',
  });

const RootStack = StackNavigator(
  {
    Main: {
      screen: Navigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
    HomeDetails: {
      screen: HomeDetails,
    }
  },
  {
    mode: 'card',
    headerMode: 'none',
  }
);

module.exports = RootStack;