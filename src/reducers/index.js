import { combineReducers } from 'redux';
import 'typeface-roboto';
import searchUser from './searchUser';


const allReducers = combineReducers({
    user: searchUser
})
export default allReducers;