import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders RESTy', () => {
  render(<App />);
  const resty = screen.getByText(/RESTy/i);
  expect(resty).toBeInTheDocument();
});