import { render, screen } from '@testing-library/react';
import Team from '../../pages/team.js';


test('renders Meet the Team text', () => {
    render(<Team />);
    const linkElement = screen.getByText(/Meet the Team!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders images', () => {
    render(<Team />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // change this to the number of images in your component
  });
  
  test('renders accordion', () => {
    render(<Team />);
    const accordionButtons = screen.getAllByText(/Meet/i);
    expect(accordionButtons).toHaveLength(5); // change this to the number of buttons in your accordion

  });