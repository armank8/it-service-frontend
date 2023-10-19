import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { reducer } from './rootReducer';
import { baseApi } from './api/baseApi';
import serviceSlice from './slices/services/serviceSlice';
import bookingSlice from './slices/booking/bookingSlice';

const rootReducer = combineReducers({
    service: serviceSlice,
    booking:bookingSlice,
    [baseApi.reducerPath]: baseApi.reducer,
});

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    // Save the relevant state to local storage
    const stateToPersist = {
        service: store.getState().service,
        booking: store.getState().booking,
        
    };

    localStorage.setItem('reduxState', JSON.stringify(stateToPersist));

    return result;
};

// Load the state from local storage when initializing the store
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const persistedState = loadStateFromLocalStorage();

// export const reducer={
//     service:serviceSlice,
//     [baseApi.reducerPath]: baseApi.reducer,
// };

const store = configureStore({
    // reducer,
    reducer: rootReducer,
    preloadedState: persistedState,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware,localStorageMiddleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export { store };