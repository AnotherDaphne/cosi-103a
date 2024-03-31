
import { render, screen } from '@testing-library/react';
import WafflesCooking from '../../pages/cookingModepages/wafflesCooking.js';

describe('WafflesCooking', () => {
  test('renders without crashing', () => {
    render(<WafflesCooking />);
    const title = screen.getByText(/Waffle Recipe/i);
    expect(title).toBeInTheDocument();
  });

  test('renders correct captions', () => {
    render(<WafflesCooking />);
    const caption1 = screen.getByText(/Preheat your waffle iron according to the manufacturer's instructions/i);
    const caption2 = screen.getByText(/In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt/i);
    expect(caption1).toBeInTheDocument();
    expect(caption2).toBeInTheDocument();
  });

  test('renders carousel', () => {
    render(<WafflesCooking />);
    const carouselElement = screen.getByRole('button', { name: /Slide 1/i });
    expect(carouselElement).toBeInTheDocument();
  });

  test('renders slide buttons', () => {
    render(<WafflesCooking />);
    const slideButton1 = screen.getByRole('button', { name: /Slide 1/i });
    const slideButton2 = screen.getByRole('button', { name: /Slide 2/i });
    expect(slideButton1).toBeInTheDocument();
    expect(slideButton2).toBeInTheDocument();
  });
});