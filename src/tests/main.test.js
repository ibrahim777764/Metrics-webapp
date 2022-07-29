import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import Home from '../components/main';

describe('Main Component test', () => {
  it('Renders main Page', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
