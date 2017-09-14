import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function setupStore() {
  console.log('setupStore');
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
