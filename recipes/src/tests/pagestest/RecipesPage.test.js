import { render, screen } from '@testing-library/react';
import Recipe from '../../pages/recipesData.js';

test('displays the correct recipe data', () => {
  const title = 'Test Recipe';
  const heading = 'Test Heading';
  const image = 'test.jpg';
  const ingredients = ['ingredient1', 'ingredient2'];
  const instructions = ['instruction1', 'instruction2'];
  const buttonLink = '/test';

  render(
    <Recipe
      title={title}
      heading={heading}
      image={image}
      ingredients={ingredients}
      instructions={instructions}
      buttonLink={buttonLink}
    />
  );

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(heading)).toBeInTheDocument();
  expect(screen.getByAltText(title)).toHaveAttribute('src', image);
  ingredients.forEach((ingredient) => {
    expect(screen.getByText(ingredient)).toBeInTheDocument();
  });
  instructions.forEach((instruction) => {
    expect(screen.getByText(instruction)).toBeInTheDocument();
  });
  expect(screen.getByText('Cooking Mode')).toHaveAttribute('href', buttonLink);
});