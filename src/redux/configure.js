import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DocumentationReducer from './documentation';

function createReducer() {
  const rootReducer = combineReducers({
    documentation: DocumentationReducer,
  });
  return rootReducer;
}

export default function configureStore(props) {
  const store = createStore(
    createReducer(),
    props.initialState,
    composeWithDevTools()
  );
  return store;
}
