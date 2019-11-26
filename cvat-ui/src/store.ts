import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    Store,
    Reducer,
} from 'redux';

const middleware = [
    thunk,
];

let store: Store | null = null;

export default function createCVATStore(createRootReducer: () => Reducer): void {
    store = createStore(
        createRootReducer(),
        applyMiddleware(...middleware),
    );
}

export function getCVATStore(): Store {
    if (store) {
        return store;
    }

    throw new Error('First create a store');
}
