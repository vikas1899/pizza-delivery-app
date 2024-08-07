import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correctly import thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import { addPizzaReducer, getAllPizzasReducer, getPizzaByIdReducer, editPizzaReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducer';
import { getAllOrdersReducer, getUserOrdersReducer, placeOrderReducer } from './reducers/orderReducer';

const rootReducer = combineReducers({
    getAllPizzas: getAllPizzasReducer,
    cart: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllOrdersReducer: getAllOrdersReducer,
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cart: { // Ensure it matches the key in rootReducer
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
