import React, { Fragment } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
} from 'react-native';

export function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Olá, Senhor Pimenta</Text>
			<TextInput
				style={styles.input}
				placeholder="New skill"
				placeholderTextColor="#555555"
			/>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={.7}
			>
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>

			<Text style={[styles.title, {marginTop: 50}]}>
				My skills
			</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 30,
		paddingVertical: 70,
	},
	title: {
		color: '#FFFFFF',
		fontSize: 24,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#1F1E25',
		color: '#FFFFFF',
		fontSize: 18,
		padding: Platform.OS === 'IOS' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7,
	},
	button: {
		backgroundColor: '#A370F7',
		padding: 15,
		borderRadius: 7,
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 17,
		fontWeight: 'bold'
	}
})