import { createStore, combineReducers } from 'redux'

import user from './reducers/user';
import notes from './reducers/notes';
import style from './reducers/style';

const rootReducer = combineReducers({
  user,
  notes,
  style
});

const store = createStore(rootReducer);

export default store;
