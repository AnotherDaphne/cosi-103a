import React from 'react';
import CookingMode from './cookingModeData';

const CinnamonrollsCooking = () => {
    const slides = [
      {
        imageUrl: 'https://whitneybond.com/2015/04/15/baked-puff-pastry-monte-cristo/img_0175-3/',
        heading: 'Ingredients/ Prepare',
        caption: [
            'Preheat your oven according to the puff pastry package instructions.',
            'Roll out the puff pastry sheet on a lightly floured surface. Brush the melted butter over the entire surface of the pastry.',
            'Sprinkle brown sugar evenly over the buttered pastry.  Dust the cinnamon over the sugar layer.'],
      },
      {
        imageUrl: 'https://www.thepalatablelife.com/wp-content/uploads/2022/12/brown-butter-cinnamon-rolls-scaled.jpg',
        heading: 'Prepare',
        caption: [
            'Roll the pastry sheet tightly into a log.',
            'Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.'],
      },
      {
        imageUrl: 'https://www.ndtv.com/cooks/images/cinnamon.rolls.2.jpg',
        heading: 'Bake',
        caption: [
            'Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.',
            '(Optional) Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.'],
      },
      {
        imageUrl: 'https://www.seriouseats.com/thmb/gyEKwPkXpvas4zeUCIvnMG498Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-bravetart-homemade-cinnamon-rolls-recipe-hero-04-df109d751ac34d1e8ee91a2a9e15dd9e.jpg',
        heading: 'Enjoy!',
        caption: [
            'Dig into your warm cinnamon rolls!'],
      },
    ];
  
    return (
      <div>
        <h1>Cinnamon Rolls Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default CinnamonrollsCooking;