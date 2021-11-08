import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

export function Home() {
	return (
		<View style={{ 
			flex: 1, 
			justifyContent: 'center', 
			alignItems: 'center'}}>
			<Fragment>
				<Text>Eu sou um texto dentro de um Fragment</Text>
				<Text>Eu sou outro texto hehe</Text>
			</Fragment>
		</View>
	)
}