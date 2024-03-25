import {render, screen} from '@testing-library/react';
import Menemen from '../../pages/cookingModepages/menemenCooking.js';

test('renders without crashing', () => {
  render(<Menemen />);
});

test('displays the correct titles', () => {
  render(<Menemen />);
  
  const title = screen.getByText(/Menemen Recipe/i);
  expect(title).toBeInTheDocument();
  const ingredientsTitle = screen.getByText(/Heat olive oil in a large skillet over medium heat/i);
  expect(ingredientsTitle).toBeInTheDocument();
  
  const prepareTitle = screen.getByText(/Add finely chopped onions and cook until they become translucent/i);

  const bakeTitles = screen.getAllByText(/Add chopped green peppers to the skillet and sauté until they soften/i);
  bakeTitles.forEach(title => {
    expect(title).toBeInTheDocument();
  });

  const serveTitles = screen.getAllByText(/Stir in chopped tomatoes and cook until they release their juices and start to break down/i);

  const enjoyTitle = screen.getByText(/Enjoy your freshly made Turkish Menemen!/i);

  const parsleyTitle = screen.getByText(/Sprinkle chopped fresh parsley over the top and serve immediately/i);

  const eggsTitle = screen.getByText(/Make four wells in the vegetable mixture using a spoon/i);

  const saltTitle = screen.getByText(/Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy/i);

  const coverTitle = screen.getByText(/Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks/i);

  const crackTitle = screen.getByText(/Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny/i); 
  expect(prepareTitle).toBeInTheDocument();
  serveTitles.forEach(title => {
    expect(title).toBeInTheDocument();
  });


});