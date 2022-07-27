import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import theme from './theme/theme';
import details from './details/details';
import country from './country/country';
import search from './search/search';

const rootReducer = combineReducers({
  countries,
  theme,
  details,
  country,
  search,
});

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export default store;
