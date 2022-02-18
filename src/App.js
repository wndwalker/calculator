import Calculator from './components/Smart/Calculator';
import ContextProvider from './components/ContextProvider';

const App = () => {
	return (
		<div className="App">
			<ContextProvider>
				<Calculator />
			</ContextProvider>
		</div>
	);
}

export default App;