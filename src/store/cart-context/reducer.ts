export interface Cart {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export const initialState: Cart[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

export enum ActionTypes {
    addCart,
    clearCart
}
export interface AddCartAction {
    type: ActionTypes.addCart;
    payload: Cart;
}

export interface ClearCartAction {
    type: ActionTypes.clearCart;
    payload: [];
}

export type Actions = AddCartAction | ClearCartAction;

export const reducer = (state: Cart[], action: Actions) => {
    switch (action.type) {
        case ActionTypes.addCart:
            return [...state, action.payload];

        case ActionTypes.clearCart:
            return action.payload;

        default:
            return state;
    }
};