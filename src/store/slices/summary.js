// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import { dispatch } from '../index';
import axios from '@/utils/axios';

// ----------------------------------------------------------------------
const initialState = {
    loading: false,
    loadingGetGlobal: false,
    loadingReportTask: false,
    error: null,
    errorCreate: null,
    errorUpdate: null,
    errorDelete: null,
    summaryGlobal: [],
    reportTask: []
};

const slice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },
        hasErrorCreate(state, action) {
            state.errorCreate = action.payload;
        },
        hasErrorUpdate(state, action) {
            state.errorUpdate = action.payload;
        },
        hasErrorDelete(state, action) {
            state.errorDelete = action.payload;
        },

        // GET
        getSummaryGlobalSuccess(state, action) {
            state.summaryGlobal = action.payload;
        },
        getSummaryReportTaskSuccess(state, action) {
            state.reportTask = action.payload;
        },

        // loading
        loading(state, action) {
            state.loading = action.payload;
        },
        loadingGetGlobal(state, action) {
            state.loadingGetGlobal = action.payload;
        },
        loadingReportTask(state, action) {
            state.loadingReportTask = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getSummaryGlobal(param) {
    return async () => {
        try {
            dispatch(slice.actions.loading(true));
            dispatch(slice.actions.loadingGetGlobal(true));
            const response = await axios.get(`/summary${param || ''}`);
            dispatch(slice.actions.getSummaryGlobalSuccess(response.data.data));
            dispatch(slice.actions.loading(false));
            dispatch(slice.actions.loadingGetGlobal(false));
        } catch (error) {
            dispatch(slice.actions.loading(false));
            dispatch(slice.actions.loadingGetGlobal(false));
            dispatch(slice.actions.hasError(error));
        }
    };
}
