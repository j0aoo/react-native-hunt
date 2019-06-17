import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default class LogoTitle extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<Image
	          style={{ width: 60, height: 50, marginLeft: '2%' }}
	          source={require('./poneisol.png')}
	        />
	        <Text style={styles.text}>PrevisionTEMP</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: "center",
		flexDirection: "row",
		alignItems: "center",
	}, 
	text: {
		width: "99%",
		color: "#4F4F4F",
		fontWeight: 'bold',
		fontSize: 21,
		marginLeft: '4%',
	},
});
