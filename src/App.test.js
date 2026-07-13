import { render, screen } from '@testing-library/react';
import MoviesGrid from './components/MoviesGrid';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: 'Dark Storm',
            image: '1.jpg',
            genre: 'drama',
            rating: '8.3',
          },
        ]),
    }),
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('shows movies on initial load', async () => {
  render(<MoviesGrid />);

  expect(await screen.findByText('Dark Storm')).toBeInTheDocument();
});
