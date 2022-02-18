import { useContext, useCallback } from 'react';
import Key from '../Dumb/Key';
import {ResultContext, ResultUpdateContext, ValueContext, ValueUpdateContext } from '../ContextProvider';

const Keypad =() => {

    const result = useContext(ResultContext);
    const setResult = useContext(ResultUpdateContext);
    const value = useContext(ValueContext);
    const setValue = useContext(ValueUpdateContext);

	const operators = ['/', '*', '+', '-', '.']
    
    const clear = () => {
		const items = '';
		setValue(items);
		setResult(items);
    }

    const updateValue = items => {
		if (operators.includes(items) && value == '' || operators.includes(items) && operators.includes(value.slice(-1))) {
			return;
		}
		setValue(value + items);
	}

	const calculate = useCallback(() => {
		setResult(eval(value).toString())
	}, [value]);

	const removeLastDigit = () => {
		if (value == '') {
			return;
		}
		const items = value.slice(0, -1);
		setValue(items);
	}

	const percentage = () => {
		setResult((result / 100).toString())
	}

	const toggleSign = () => {
		setValue(value * -1);
	}
	
    return (
        <div className="keypad">
            <div className="left">
                <div className="function-keys">
                    <Key className='top-button' onClick={clear}>AC</Key>
                    <Key className='top-button' onClick={toggleSign}>+/-</Key>
                    <Key className='top-button' onClick={percentage}>%</Key>
                </div>
                <div className="digit-keys">
                    <Key onClick={() => updateValue('7')}>7</Key>
                    <Key onClick={() => updateValue('8')}>8</Key>
                    <Key onClick={() => updateValue('9')}>9</Key>
                    <Key onClick={() => updateValue('4')}>4</Key>
                    <Key onClick={() => updateValue('5')}>5</Key>
                    <Key onClick={() => updateValue('6')}>6</Key>
                    <Key onClick={() => updateValue('3')}>3</Key>
                    <Key onClick={() => updateValue('2')}>2</Key>
                    <Key onClick={() => updateValue('1')}>1</Key>
                    <Key onClick={() => updateValue('0')}>0</Key>
                    <Key onClick={() => updateValue('.')}>.</Key>
                    <Key onClick={removeLastDigit}>DEL</Key>
                </div>
            </div>
            <div className="right">
                <div className="operator-keys">
                    <Key className='operator' onClick={() => updateValue('/')}>/</Key>
                    <Key className='operator' onClick={() => updateValue('*')}>*</Key>
                    <Key className='operator' onClick={() => updateValue('-')}>-</Key>
                    <Key className='operator' onClick={() => updateValue('+')}>+</Key>
                    <Key className='operator' value="=" onClick={calculate}>=</Key>
                </div>
            </div>
        </div>
    )
}

export default Keypad;