import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/store';
import Products from '../components/Products';

test('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Products />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Products />
    </Provider>,
  );
  const container = getByTestId('productsPage');
  expect(container).toBeInTheDocument();
});
