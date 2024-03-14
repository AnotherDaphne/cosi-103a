import {render} from  '@testing-library/react';
import {screen} from '@testing-library/react';
import CheesecakeCooking from '../../pages/cookingModepages/cheesecakeCooking.js';

test('renders without crashing', () => {
  render(<CheesecakeCooking />);
});

test('displays the correct titles', () => {
  render(<CheesecakeCooking />);
  
  const ingredientsTitle = screen.getByText(/Ingredients\/ Mix/i);
  expect(ingredientsTitle).toBeInTheDocument();

  const prepareTitle = screen.getByText(/Prepare/i);
  expect(prepareTitle).toBeInTheDocument();

  const bakeTitles = screen.getAllByText(/Bake/i);
  bakeTitles.forEach(title => {
    expect(title).toBeInTheDocument();
  });

  const serveTitles = screen.getAllByText(/Serve/i);
  serveTitles.forEach(title => {
    expect(title).toBeInTheDocument();
  });

  const enjoyTitle = screen.getByText(/Enjoy!/i);
  expect(enjoyTitle).toBeInTheDocument();
});