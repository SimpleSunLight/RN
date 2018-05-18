import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import EditView from './EditView';
import LoginButton from './LoginButton';
// import LoginSuccess from '../ui/LoginSuccess';
// import NetUitl from '../lib/NetUtil';

export default class LoginActivity extends Component {

  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
    return (
	    <View style={LoginStyles.loginview}>
	      <View style={{flexDirection: 'row',height:100,marginTop:1,justifyContent: 'center',alignItems: 'flex-start',}}>
	      </View>
	      <View style={{marginTop:80}}>
	        <EditView 
	          name='输入手机号' 
	          maxLength={11}
	          onChangeText={(text) => {
	          this.userName = text;
	        }}/>
	        <EditView 
	          name='输入密码'
	          maxLength={6}
	          secureTextEntry={true} 
	          onChangeText={(text) => {
	        	  this.password = text;
	 				}}/>
	        <LoginButton name='登录' onPressCallback={()=> alter('Hello')}/>
	        <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
	      </View>
	    </View>
    )
  }


  onPressCallback = () => {
    let formData = new FormData();
    formData.append("loginName",this.userName);
    formData.append("pwd",this.password);
    let url = "http://localhost:8080/loginApp";
    NetUitl.postJson(url,formData,(responseText) => {
      alert(responseText);
      this.onLoginSuccess();
    })
  };

  //跳转到第二个页面去
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'LoginSuccess',
         component : LoginSuccess,
       });
     }
   }
}

class loginLineView extends Component {
  render() {
    return (
	    <Text >
        没有帐号
      </Text>
    );
  }
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  },
});