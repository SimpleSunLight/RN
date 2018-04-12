import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class HomeDetails extends Component{
	render() {
		return (
			<View>
				<Text style={styles.container}>Hello</Text>
			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default HomeDetails;