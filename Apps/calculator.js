//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SegmentedControlTab from 'react-native-segmented-control-tab'

// create a component
class Calculator extends Component {
	constructor() {
		super()
		this.state = {
			selectedIndex: 0,
			billAmount: 0,
			result: 0,
			tipAmount: 0
		}
	}

	segmentValues = () => {
		return ['10%', '15%', '50%']
	}
	
	handleSegmentChange = (index) => {
		this.setState({
			selectedIndex: index
		})
		this.handleBillAmountChange(this.state.billAmount, index)
	}
 
	handleBillAmountChange = (bill, index) => {
		if(!index && !index !== 0) {
			index = this.state.selectedIndex
		}

		bill = parseFloat(bill)
		var percent = this.segmentValues()[index] // 10%, 15%, 50%
		percent = parseFloat(percent)/100
		var result = bill + (bill * percent)
		var tipAmount = bill * percent

		this.setState({
			billAmount: bill,
			tipAmount: tipAmount,
			result: result
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginBottom: 30 }}>
					<Text onPress={ Actions.settingPage }>>>> Go to setting</Text>
				</View>
				
				<View>
					<Text>Bill Amount</Text>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
						placeholder="Type here"
						onChangeText={(billAmount => this.handleBillAmountChange(billAmount))}
						keyboardType='numeric'
						maxLength={10}
					/>
				</View>

				<View>
					<Text>Tip Amount: 0</Text>
				</View>

				<View>
					<Text>Segment Control</Text>
					<SegmentedControlTab
						values={this.segmentValues()}
						selectedIndex={this.state.selectedIndex}
						onTabPress={index => this.handleSegmentChange(index)}
					/>
				</View>

				<View>
					<Text>Bill input: {this.state.billAmount}</Text>
					<Text>Tip amount: {this.state.tipAmount}</Text>
					<Text>Segment control: {this.segmentValues()[this.state.selectedIndex]}</Text>
				</View>

				<View>
					<Text>Result: {this.state.result}</Text>
				</View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
		marginTop: 80,
	},
});

//make this component available to the app
export default Calculator;
