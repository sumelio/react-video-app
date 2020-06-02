import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers/videos';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
console.log(store);
export {store, persistor};
