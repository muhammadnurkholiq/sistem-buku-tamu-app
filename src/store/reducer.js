// third-party
import { combineReducers } from 'redux';

// reducer
import menuReducer from './slices/menu';
import snackbarReducer from './slices/snackbar';

const reducer = combineReducers({
    menu: menuReducer,
    snackbar: snackbarReducer
});

export default reducer;
