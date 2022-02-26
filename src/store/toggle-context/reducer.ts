export interface Toggle {
    showCart: Boolean;
}

export const initialState: Toggle = { showCart: false };

export enum ActionTypesToggle {
    showCart
}
export interface ShowCartAction {
    type: ActionTypesToggle.showCart;
    payload: Toggle
}

export type Actions = ShowCartAction;

export const toggleReducer = (state: Toggle, action: Actions) => {
    switch (action.type) {
        case ActionTypesToggle.showCart:
            return { ...state, showCart: action.payload.showCart };
        default:
            return state;
    }
};