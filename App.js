import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	ScrollView
} from 'react-native';

const App = () => {
	return (
		<>
			<ScrollView>
				<View style={styles.vwBanner}>
					<Image
						style={styles.imgBanner}
						source={require('./assets/img/bg.jpg')}
					>
					</Image>
				</View>
				<View style={styles.vwContainer}>
					<Text style={styles.title}>What to do in Paris?</Text>
					<ScrollView horizontal>
						<View>
							<Image
								style={styles.imgScroll}
								source={require('./assets/img/actividad1.jpg')}
							>
							</Image>
						</View>
						<View >
							<Image
								style={styles.imgScroll}
								source={require('./assets/img/actividad2.jpg')}
							>
							</Image>
						</View>
						<View >
							<Image
								style={styles.imgScroll}
								source={require('./assets/img/actividad3.jpg')}
							>
							</Image>
						</View>
						<View >
							<Image
								style={styles.imgScroll}
								source={require('./assets/img/actividad4.jpg')}
							>
							</Image>
						</View>
						<View>
							<Image
								style={styles.imgScroll}
								source={require('./assets/img/actividad5.jpg')}
							>
							</Image>
						</View>
					</ScrollView>
					<Text style={styles.title}>The best accommodations</Text>
					<View>
						<Image
							style={styles.imgAccomodation}
							source={require('./assets/img/mejores1.jpg')}
						>
						</Image>
					</View>
					<View>
						<Image
							style={styles.imgAccomodation}
							source={require('./assets/img/mejores2.jpg')}
						>
						</Image>
					</View>
					<View>
						<Image
							style={styles.imgAccomodation}
							source={require('./assets/img/mejores3.jpg')}
						>
						</Image>
					</View>

					<Text style={styles.title}>Accommodations in LA</Text>
					<View style={styles.vwListAccomodationsLA}>

						<View style={styles.vwListItem}>
							<Image
								style={styles.imgAccomodationLA}
								source={require('./assets/img/hospedaje1.jpg')}
							>
							</Image>
						</View>
						<View style={styles.vwListItem}>
							<Image
								style={styles.imgAccomodationLA}
								source={require('./assets/img/hospedaje2.jpg')}
							>
							</Image>
						</View>
						<View style={styles.vwListItem}>
							<Image
								style={styles.imgAccomodationLA}
								source={require('./assets/img/hospedaje3.jpg')}
							>
							</Image>
						</View>
						<View style={styles.vwListItem}>
							<Image
								style={styles.imgAccomodationLA}
								source={require('./assets/img/hospedaje4.jpg')}
							>
							</Image>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	vwBanner: {
		flexDirection: 'row'
	},
	imgBanner: {
		height: 250,
		flex: 1
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 20
	},
	vwContainer: {
		marginHorizontal: 10
	},
	imgScroll: {
		width: 250,
		height: 300,
		marginRight: 10
	},
	imgAccomodation: {
		width: '100%',
		height: 200,
		marginVertical: 5
	},
	vwListAccomodationsLA: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	vwListItem: {
		flexBasis: '49%'
	},
	imgAccomodationLA: {
		width: '100%',
		height: 200,
		marginVertical: 5
	}

});

export default App;
