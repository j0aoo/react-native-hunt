import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LogoTitle from "../components/LogoTitle";

const Temp = ({ navigation }) => (
	<View style={styles.container}>
		<View style={styles.containerBar}>
			<Text>{navigation.state.params.temp.city_name}</Text>
		</View>
		<View style={styles.containerBarDesc}>
			<Text style={styles.textDesc}>{navigation.state.params.temp.temp}</Text>
			<Text style={styles.textDesc}>{navigation.state.params.temp.description}</Text>
		</View>
		<View style={styles.containerBarMax}>
			<Text style={styles.textMax}> Max {navigation.state.params.temp.forecast[0].max}</Text>
			<Text>Min {navigation.state.params.temp.forecast[0].min}</Text>
		</View>
		<View style={styles.containerBarDesc}>
			<Text style={styles.textDesc}>Vento {navigation.state.params.temp.wind_speedy}</Text>
			<Text style={styles.textDesc}>Humidade {navigation.state.params.temp.humidity}</Text>
		</View>
		<View style={styles.containerBarDates}>
			<Text style={styles.textDates}>{navigation.state.params.temp.forecast[0].weekday}</Text>
			<Text style={styles.textDates}>{navigation.state.params.temp.forecast[1].weekday}</Text>
			<Text style={styles.textDates}>{navigation.state.params.temp.forecast[2].weekday}</Text>
			<Text style={styles.textDates}>{navigation.state.params.temp.forecast[3].weekday}</Text>
			<Text style={styles.textDates}>{navigation.state.params.temp.forecast[4].weekday}</Text>
		</View>
		<View style={styles.containerBarDates}>
			<Text style={styles.textDates}>
				{navigation.state.params.temp.forecast[0].max}
				{navigation.state.params.temp.forecast[0].min}
			</Text>
			<Text style={styles.textDates}>
				{navigation.state.params.temp.forecast[0].max}
				{navigation.state.params.temp.forecast[0].min}
			</Text>
			<Text style={styles.textDates}>
				{navigation.state.params.temp.forecast[0].max}
				{navigation.state.params.temp.forecast[0].min}
			</Text>
			<Text style={styles.textDates}>
				{navigation.state.params.temp.forecast[0].max}
				{navigation.state.params.temp.forecast[0].min}
			</Text>
			<Text style={styles.textDates}>
				{navigation.state.params.temp.forecast[0].max}
				{navigation.state.params.temp.forecast[0].min}
			</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
	},
	containerBar: {
		backgroundColor: "#fff",
		width: '94%',
	},
	containerBarDates: {
		backgroundColor: "#fff",
		width: '94%',
		flexDirection: 'row',
	},
	containerBarDesc: {
		backgroundColor: "#fff",
		width: '94%',
		flexDirection: 'row',
	},
	containerBarMax: {
		backgroundColor: "#fff",
		width: '94%',
		flexDirection: 'row',
	},
	textDates: {
		color: '#4F4F4F',
		paddingRight: 20,
	},
	textDesc: {
		color: '#4F4F4F',
		paddingRight: 20,
	},
	textMax: {
		color: '#4F4F4F',
		paddingRight: 20,
	},
});

Temp.navigationOptions = ({ navigation }) => ({
	headerTitle: <LogoTitle />
});

export default Temp;