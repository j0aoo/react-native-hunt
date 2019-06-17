import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import axios from "axios";
import LogoTitle from "../components/LogoTitle";
import api from "../services/api";

export default class Main extends Component {
	static navigationOptions = {
		headerTitle: <LogoTitle />,
	};

	state = {
		dataLog: [],
		name: "",
	}

	componentDidMount() {
		this.load();
		this.load2();
		this.load3();
		this.load4();
		this.load5();
	}

	handleSearch = async (e) => {
		this.setState({
			name: e
		});
	};

	busca = async () => {
		const response = await api.get(`https://api.hgbrasil.com/weather/?format=json&city_name=${this.state.name}&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ results, ...this.state.dataLog ],
			name: "",
		});
	}

	load = async () => {
		const response = await axios.get(`https://api.hgbrasil.com/weather/?format=json&city_name=&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ ...this.state.dataLog, results],
		});
	}

	load2 = async () => {
		const response = await axios.get(`https://api.hgbrasil.com/weather/?format=json&city_name=Ibitinga&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ ...this.state.dataLog, results],
		});
	}

	load3 = async () => {
		const response = await axios.get(`https://api.hgbrasil.com/weather/?format=json&city_name=Ribeir%C3%A3o%20Preto&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ ...this.state.dataLog, results],
		});
	}

	load4 = async () => {
		const response = await axios.get(`https://api.hgbrasil.com/weather/?format=json&city_name=Gravatal&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ ...this.state.dataLog, results],
		});
	}

	load5 = async () => {
		const response = await axios.get(`https://api.hgbrasil.com/weather/?format=json&city_name=Viadutos&key=0f071eb1`);
		const { results } = response.data;
		
		this.setState({
			dataLog: [ ...this.state.dataLog, results],
		});

			console.log(response.data);
	}

	render() {
		return(	
			<View style={styles.container}>	
				<View style={styles.containerSe}>
			        <TextInput style={styles.input} onChangeText={this.handleSearch} value={this.state.name} placeholder="Insira aqui o nome da cidade" />
					<TouchableOpacity onPress={this.busca}>
						<Image
				          	style={{width: 30, height: 30, marginRight: 5}}
				          	source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_372430.png'}}
				        />
					</TouchableOpacity>
				</View>

				<View style={styles.viewLine} />

				<View style={styles.view}>
					<ScrollView contentContainerStyle={styles.contentContainer}>
						<View style={styles.cmp}>
							<Text style={styles.cmpText}>Capitais</Text>
							<View style={styles.containerCmp}>
								<Text style={styles.cmpTextMin}>Min</Text>
								<Text style={styles.cmpTextMax}>Máx</Text>
							</View>
							<View>
								{this.state.dataLog.map(data => (
									<TouchableOpacity key={data.city_name} onPress={() => {
										this.props.navigation.navigate("Temp", {temp:data} );
									}}>
									<View style={styles.containerCmp}>
										<Text style={styles.cmpTextDataMin}>{data.forecast[0].min}°</Text>
										<Text style={styles.cmpTextDataMax}>{data.forecast[0].max}°</Text>
										<Text style={styles.cmpTextDataName}>{data.city_name}</Text>
									</View>
									</TouchableOpacity>
								))}
							</View>
						</View>
					</ScrollView>
				</View>				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
	}, 
	input: {
		width: "87%",
		backgroundColor: "#fff",
		borderRadius: 10,
		fontSize: 15,
	},
	cmp: {
		width: '100%',
		marginLeft: '5%',
		marginTop: '7%',
	},
	containerCmp: {
		flexDirection: 'row',
		padding: 10,
	},
	cmpTextMax: {
		paddingLeft: 15,
	},
	cmpTextDataMin: {
		paddingLeft: 3,
		fontSize: 16,
		fontWeight: 'bold',
	},
	cmpTextDataMax: {
		paddingLeft: 22,
		fontSize: 16,
		fontWeight: 'bold',
	},
	cmpTextDataName: {
		paddingLeft: 32,
		fontSize: 16,
		fontWeight: 'bold',
	},
	containerSe: {
		borderWidth: 2, 
		borderColor: '#4f4f4f',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
	},
	viewLine: {
		width: '100%',
		height: 3,
		backgroundColor: '#000',
		marginTop: '7%',
	},
	view: {
		backgroundColor: "#d4f5f3",
		width: '100%',
		height: '100%',
	},
	cmpText: {
		fontSize: 29,
		fontWeight: 'bold',
	},
	contentContainer: {
		width: "100%",	
		backgroundColor: "#d4f5f3",
	},
});
