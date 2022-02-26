import { ToggleContext } from './context';
import { useReducer } from 'react';
import { initialState, toggleReducer } from './reducer';

const ToggleContextProvider = ({ children }: any) => {
    const [stateToggle, dispatchToggle] = useReducer(toggleReducer, initialState);

    return (
        <ToggleContext.Provider value={{ stateToggle, dispatchToggle }}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleContextProvider;