import { useContext  } from 'react';
import {ResultContext, ValueContext } from '../ContextProvider';

const Display = () => {

    const result = useContext(ResultContext);
    const value = useContext(ValueContext);
    
    return (
        <div className="display">
            {result ? <span className="result">{result}</span> : ''} <span className="value">{value || "0"}</span>
        </div>
    )
}

export default Display;