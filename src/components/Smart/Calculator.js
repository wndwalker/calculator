import Display from '../Dumb/Display';
import Keypad from './Keypad';

const Calculator =({value, handleClick, ...props}) => {
    
    return (
        <div className="calculator">
			<Display />
			<Keypad />
		</div>
    )
}

export default Calculator;