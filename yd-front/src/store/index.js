import {createStore,applyMiddleware} from 'redux'
import {cart} from '../reducer/cart'
import thunk from 'redux-thunk';

const store = createStore(cart,applyMiddleware(thunk));
export default store;