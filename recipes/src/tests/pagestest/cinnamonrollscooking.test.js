
import { render, screen } from '@testing-library/react';
import CinnamonrollsCooking from '../../pages/cookingModepages/cinnamonrollsCooking.js';


describe('CinnamonrollsCooking', () => {
  test('renders without crashing', () => {
    render(<CinnamonrollsCooking />);
    const title = screen.getByText(/Cinnamon Rolls Recipe/i);
    expect(title).toBeInTheDocument();
  });

  
  test('renders CookingMode component', () => {
    render(<CinnamonrollsCooking />);
    const carouselElement = screen.getByRole('button', { name: /Slide 1/i });
    expect(carouselElement).toBeInTheDocument();
  });

  test('renders correct captions', () => {
    render(<CinnamonrollsCooking />);
    const caption1 = screen.getByText(/Preheat your oven according to the puff pastry package instructions./i);
    const caption2 = screen.getByText(/Roll out the puff pastry sheet on a lightly floured surface. Brush the melted butter over the entire surface of the pastry./i);
    expect(caption1).toBeInTheDocument();
    expect(caption2).toBeInTheDocument();
  });
});