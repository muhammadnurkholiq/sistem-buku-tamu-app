// third-party
import { combineReducers } from 'redux';

// reducer
import snackbarReducer from './slices/snackbar';

const reducer = combineReducers({
    snackbar: snackbarReducer
});

export default reducer;
