import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//* Normalize for state with redux-persist

// export const filteredContacts = (contacts, filter) => {
//     const contactsArrey = Object.values(contacts);
//     contactsArrey.pop();
//     if (!filter) {
//         return contactsArrey;
//     }
//     return contactsArrey.filter((contact) => contact.name.toLowerCase().includes(filter))
// };

// const findContactForDelete = (dataObj, searchValue) => {
//      if (Object.keys(dataObj).includes(searchValue)) {
//          return searchValue;
//     }
// }

//*

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action) {
           state.cart = state.cart.filter(product => product.id !== action.payload.id)
        },
        removeAll(state, action) {
            state.cart = action.payload;
        }
    }
});

const persistConfig = {
    key: 'cart',
    storage,
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;