import { useState, createContext } from 'react';

export const ResultContext = createContext();
export const ResultUpdateContext = createContext();
export const ValueContext = createContext();
export const ValueUpdateContext = createContext();

const ContextProvider = (props) => {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    
    return (

        <ValueContext.Provider value={value}>
            <ResultContext.Provider value={result}>
                <ValueUpdateContext.Provider value={setValue}>
                    <ResultUpdateContext.Provider value={setResult}>
                        {props.children}
                    </ResultUpdateContext.Provider>
                </ValueUpdateContext.Provider>
            </ResultContext.Provider>
        </ValueContext.Provider>

    )
} 

export default ContextProvider;