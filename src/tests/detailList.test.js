import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store/configureStore';
import DetailsList from '../components/detailList';

describe('Country Component test', () => {
  it('Renders Deatils', () => {
    const app = renderer.create(
      <Provider store={store}>
        <DetailsList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
