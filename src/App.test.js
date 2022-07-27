import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import country from './redux/country/country';
import search from './redux/search/search';
import countries from './redux/countries/countries';
import details from './redux/details/details';
import theme from './redux/theme/theme';
import App from './App';
import Header from './components/Header';
import Home from './components/Home';

const rootReducer = combineReducers({
  countries,
  country,
  search,
  details,
  theme,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Header component', () => {
  test('renders app title', () => {
    const theme = {
      hex: '#ffffff',
      hsl: 'hsl(360,50,',
    };

    render(
      <Provider store={Store}>
        <Router>
          <Header theme={theme} />
        </Router>
      </Provider>,
    );
    const appTitle = screen.getByText(/escape/i);
    expect(appTitle).toBeInTheDocument();
  });
});

describe('Home page component', () => {
  let countries;
  let theme;

  beforeEach(() => {
    countries = [
      { name: { common: 'congo', official: 'dr congo' }, cca2: 'cd', capital: ['kinshasa'] },
      { name: { common: 'rwanda', official: 'rwanda' }, cca2: 'rw', capital: ['kigali'] },
      { name: { common: 'burundi', official: 'burundi' }, cca2: 'bu', capital: ['bujumbura'] },
    ];
    theme = {
      hex: '#ffffff',
      hsl: 'hsl(360,50,',
    };
  });

  test('renders correctly', () => {
    const homePage = renderer.create(
      <Provider store={Store}>
        <Router>
          <App>
            <Home theme={theme} countries={countries} />
          </App>
        </Router>
      </Provider>,
    ).toJSON();
    expect(homePage).toMatchSnapshot();
  });

  test('renders  country  name', () => {
    render(
      <Provider store={Store}>
        <Router>
          <Home theme={theme} countries={countries} />
        </Router>
      </Provider>,
    );
    const countryName = screen.getAllByText(/congo/i);
    expect(countryName).toHaveLength(1);
  });

  test('Country Preview link', () => {
    const { container } = render(
      <Provider store={Store}>
        <Router>
          <Home theme={theme} countries={countries} />
        </Router>
      </Provider>,
    );

    const countryPreview = container.querySelector('a');
    userEvent.click(countryPreview);
    expect(screen.getByText(/congo/i)).toBeInTheDocument();
  });

  test('renders  country  capital', () => {
    render(
      <Provider store={Store}>
        <Router>
          <Home theme={theme} countries={countries} />
        </Router>
      </Provider>,
    );
    const countryCapital = screen.getAllByText(/kinshasa/i);
    expect(countryCapital).toHaveLength(1);
  });
});
