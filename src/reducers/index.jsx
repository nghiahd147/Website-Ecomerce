import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import CategoryReducer from './CategoryReducer'
import CartReducer from './CartReducer'

const AllReducers = combineReducers({
    LoginReducer,
    CategoryReducer,
    CartReducer
})

export default AllReducers
