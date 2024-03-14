
import {render, screen} from  '@testing-library/react';
import WafflesCooking from '../../pages/cookingModepages/wafflesCooking.js';

test('renders without crashing', () => {
  render(<WafflesCooking />);
});

test('displays the correct titles', () => {
  render(<WafflesCooking />);
  
  const preheatTitle = screen.getByText(/Preheat Iron/i);
  expect(preheatTitle).toBeInTheDocument();

  const mixTitle = screen.getByText(/Mix Together/i);
  expect(mixTitle).toBeInTheDocument();

  const mixMoreTitle = screen.getByText(/Mix Some More/i);
  expect(mixMoreTitle).toBeInTheDocument();

  const combineTitle = screen.getByText(/Combine ingredients/i);
  expect(combineTitle).toBeInTheDocument();

  const greaseTitle = screen.getByText(/Grease Iron/i);
  expect(greaseTitle).toBeInTheDocument();

  const makeTitle = screen.getByText(/Make Waffles/i);
  expect(makeTitle).toBeInTheDocument();

  const addTitle = screen.getByText(/Add Toppings/i);
  expect(addTitle).toBeInTheDocument();

});
