import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default class LogoTitle extends Component {
  render() {
    return (
    	<View style={styles.container}>
    		<Text style={styles.text}>Previsão do Tempo</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		textAlign: "center",
	}, 
	text: {
		width: "99%",
		color: "#87CEEB",
		fontWeight: 'bold',
		fontSize: 21,
		marginLeft: '4%',
	},
});
