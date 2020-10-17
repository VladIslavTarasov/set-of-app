import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/rootReducer';
import rootSaga from 'store/rootSaga';
import { RootState } from 'store/types';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: Partial<RootState> = {}): Store<RootState> => {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
