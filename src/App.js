import React, { Component } from 'react';
import './App.css';
import CalcButton from './components/CalcButton';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import { evaluate } from 'mathjs';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			operator: '',
		};
	}

	handleClear = () => {
		this.setState({
			input: '',
		});
	};

	concatInput = val => {
		this.setState({
			input: this.state.input + val,
		});
	};

	handleEqual = () => {
		this.setState({
			input: evaluate(this.state.input),
		});
	};

	render() {
		return (
			<div className='App'>
				<div className='calc-wrapper'>
					<Input input={this.state.input}></Input>
					<div className='row'>
						<CalcButton handleClick={this.concatInput}>7</CalcButton>
						<CalcButton handleClick={this.concatInput}>8</CalcButton>
						<CalcButton handleClick={this.concatInput}>9</CalcButton>
						<CalcButton handleClick={this.concatInput}>/</CalcButton>
					</div>
					<div className='row'>
						<CalcButton handleClick={this.concatInput}>4</CalcButton>
						<CalcButton handleClick={this.concatInput}>5</CalcButton>
						<CalcButton handleClick={this.concatInput}>6</CalcButton>
						<CalcButton handleClick={this.concatInput}>*</CalcButton>
					</div>
					<div className='row'>
						<CalcButton handleClick={this.concatInput}>1</CalcButton>
						<CalcButton handleClick={this.concatInput}>2</CalcButton>
						<CalcButton handleClick={this.concatInput}>3</CalcButton>
						<CalcButton handleClick={this.concatInput}>-</CalcButton>
					</div>
					<div className='row'>
						<CalcButton handleClick={this.concatInput}>.</CalcButton>
						<CalcButton handleClick={this.concatInput}>0</CalcButton>
						<CalcButton handleClick={this.handleEqual}>=</CalcButton>
						<CalcButton handleClick={this.concatInput}>+</CalcButton>
					</div>
					<div className='row'>
						<ClearButton handleClear={this.handleClear} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
