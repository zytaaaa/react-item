import {cart}  from './cart'
import product  from './product'
import user from './login'
import  { combineReducers } from 'redux'
export default combineReducers({
    cart,
    product,
    user
})