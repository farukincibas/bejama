import { createContext } from 'react';
import { Cart, Actions, initialState } from './reducer';

export type ContextState = {
    state: Cart[];
    dispatch: React.Dispatch<Actions>;
};

const contextDefaultValues: ContextState = {
    state: initialState,
    dispatch: () => undefined,
};

export const Context = createContext<ContextState>(contextDefaultValues);