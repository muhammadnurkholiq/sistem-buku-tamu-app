// third-party
import { combineReducers } from 'redux';

// reducer
import menuReducer from './slices/menu';
import snackbarReducer from './slices/snackbar';
import summaryReducer from './slices/summary';
import userReducer from './slices/user';

const reducer = combineReducers({
    menu: menuReducer,
    snackbar: snackbarReducer,
    summary: summaryReducer,
    user: userReducer
});

export default reducer;
