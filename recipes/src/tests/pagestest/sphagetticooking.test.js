import { render, screen } from '@testing-library/react';
import SpaghettiCooking from '../../pages/cookingModepages/spaghettiCooking.js';


describe('SpaghettiCooking', () => {
  test('renders without crashing', () => {
    render(<SpaghettiCooking />);
    const title = screen.getByText(/Spaghetti Aglio e Olio with Shrimp Recipe/i);
    expect(title).toBeInTheDocument();
  });

  test('renders correct captions', () => {
    render(<SpaghettiCooking />);
    const caption1 = screen.getByText(/Cook spaghetti according to package instructions, then drain and set aside/i);
    const caption2 = screen.getByText(/In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant/i);
    expect(caption1).toBeInTheDocument();
    expect(caption2).toBeInTheDocument();
  });

  test('renders carousel', () => {
    render(<SpaghettiCooking />);
    const carouselElement = screen.getByRole('button', { name: /Slide 1/i });
    expect(carouselElement).toBeInTheDocument();
  });

  test('renders slide buttons', () => {
    render(<SpaghettiCooking />);
    const slideButton1 = screen.getByRole('button', { name: /Slide 1/i });
    const slideButton2 = screen.getByRole('button', { name: /Slide 2/i });
    expect(slideButton1).toBeInTheDocument();
    expect(slideButton2).toBeInTheDocument();
  });
});