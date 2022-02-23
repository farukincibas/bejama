export interface Cart {
    productId: number;
    name: string;
    image: string;
    price: number;
}

export const initialState: Cart[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

export enum ActionTypes {
    addCart,
}
export interface AddCartAction {
    type: ActionTypes.addCart;
    payload: Cart;
}

export type Actions = AddCartAction;

export const reducer = (state: Cart[], action: Actions) => {
    switch (action.type) {
        case ActionTypes.addCart:
            return [...state, action.payload];
        default:
            return state;
    }
};