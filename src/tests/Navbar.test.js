import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders NavBar component', () => {
  const { container } = render(<Navbar />);
  expect(container.innerHTML).toMatchSnapshot();
});
