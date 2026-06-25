import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders the app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Jessica Organ/i);
  expect(headerElement).toBeInTheDocument();
});
