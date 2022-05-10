import React from 'react';
import { useState } from 'react/cjs/react.production.min';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };
    return{
        state,
        addToCart
    };
}

export default useInitialState;