import { createContext } from 'react';
import { Toggle, Actions, initialState } from './reducer';

export type ContextState = {
    stateToggle: Toggle;
    dispatchToggle: React.Dispatch<Actions>;
};

const contextDefaultValues: ContextState = {
    stateToggle: initialState,
    dispatchToggle: () => undefined,
};

export const ToggleContext = createContext<ContextState>(contextDefaultValues);