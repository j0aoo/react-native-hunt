import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import LogoTitle from "../components/LogoTitle";

const Temp = ({ navigation }) => (
	<View style={styles.container}>
		<View style={styles.containerBar}>
			<Text style={{ fontSize: 19, paddingTop: 20, paddingBottom: 40 }}>{navigation.state.params.temp.city_name}!</Text>
		</View>
		<View style={styles.containerBarDesc}>
			<Text style={styles.textDesc}>{navigation.state.params.temp.temp}°</Text>
			<Text style={styles.textDesc}>{navigation.state.params.temp.description}</Text>
		</View>
		<View style={styles.containerBarMax}>
			<Text style={styles.textMax}> Max <Text style={{ fontWeight: "bold" }}>{navigation.state.params.temp.forecast[0].max}°</Text></Text>
			<Text style={styles.textMax}>Min <Text style={{ fontWeight: "bold" }}>{navigation.state.params.temp.forecast[0].min}°</Text></Text>
		</View>
		<View style={styles.containerBarHumy}>
			<Text style={styles.textHumy}>Vento <Text style={{ fontWeight: "bold" }}>{navigation.state.params.temp.wind_speedy}</Text></Text>
			<Text style={styles.textHumy}>Humidade <Text style={{ fontWeight: "bold" }}>{navigation.state.params.temp.humidity}%</Text></Text>
		</View>

		<View style={{ height: 3, backgroundColor: '#000', width: '100%', marginTop: 20 }} />

		<View style={{ width: '100%', backgroundColor: "#d4f5f3", height: '100%', }}>
			<View style={styles.containerBarDates}>
				<Text style={styles.textDates}>{navigation.state.params.temp.forecast[0].weekday}!</Text>
				<Text style={styles.textDates}>{navigation.state.params.temp.forecast[1].weekday}!</Text>
				<Text style={styles.textDates}>{navigation.state.params.temp.forecast[2].weekday}!</Text>
				<Text style={styles.textDates}>{navigation.state.params.temp.forecast[3].weekday}!</Text>
				<Text style={styles.textDates}>{navigation.state.params.temp.forecast[4].weekday}!</Text>
			</View>
			<View style={styles.containerBarDates2}>
				<Text style={styles.textDates2}>
					{navigation.state.params.temp.forecast[0].max}°
					{navigation.state.params.temp.forecast[0].min}°
				</Text>
				<Text style={styles.textDates2}>
					{navigation.state.params.temp.forecast[1].max}°
					{navigation.state.params.temp.forecast[1].min}°
				</Text>
				<Text style={styles.textDates2}>
					{navigation.state.params.temp.forecast[2].max}°
					{navigation.state.params.temp.forecast[2].min}°
				</Text>
				<Text style={styles.textDates2}>
					{navigation.state.params.temp.forecast[3].max}°
					{navigation.state.params.temp.forecast[3].min}°
				</Text>
				<Text style={styles.textDates2}>
					{navigation.state.params.temp.forecast[4].max}°
					{navigation.state.params.temp.forecast[4].min}°
				</Text>
			</View>
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerBarDates: {
		width: '94%',
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerBarDates2: {
		width: '94%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
	},
	containerBarDesc: {
		backgroundColor: "#fff",
		paddingRight: 20,
		width: '94%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerBarHumy: {
		backgroundColor: "#fff",
		width: '94%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerBarMax: {
		backgroundColor: "#fff",
		width: '94%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textDates: {
		paddingLeft: 30,
		fontSize: 16,
	},
	textDates2: {
		paddingLeft: 20,
		fontWeight: "bold",
		fontSize: 15,
	},
	textDesc: {
		color: '#4F4F4F',
		paddingRight: 20,
		fontSize: 24,
		fontWeight: 'bold',
	},
	textMax: {
		color: '#4F4F4F',
		paddingRight: 20,
		fontSize: 16,
		padding: 10,
	},
	textHumy: {
		color: '#4F4F4F',
		paddingRight: 20,
		fontSize: 16,
		padding: 10,
		paddingBottom: 20,
	},
});

Temp.navigationOptions = ({ navigation }) => ({
	headerTitle: <LogoTitle />
});

export default Temp;