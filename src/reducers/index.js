import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authedUser from './authUser';
import users from './users';
import questions from './questions';

export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer
});
