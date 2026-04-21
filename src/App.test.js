import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading and resume action', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /yuvadhan l/i, level: 1 })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});
