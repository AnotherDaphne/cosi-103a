import cheesecake from "./images/cheesecake.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cheesecake = () => {
    return (
      <div>
        <h1>Cheesecake Recipe</h1>
          <img src={cheesecake} alt="cheesecake"width="300px"/>
          <h2>Ingredients:</h2>
          <ul>
            <li>2 cups graham cracker crumbs</li>
            <li>1/2 cup unsalted butter, melted</li>
            <li>4 packages (8 oz each) cream cheese, softened</li>
            <li>1 cup granulated sugar</li>
            <li>1 teaspoon vanilla extract</li>
            <li>4 large eggs</li>
            <li>1 cup sour cream</li>
          </ul>
          <h2>Instructions:</h2>
            <p>1. Preheat your oven to 325°F (163°C).</p>
            <p>2. Mix graham cracker crumbs and melted butter. Press the mixture into the bottom of a 9-inch springform pan to create the crust.</p>
            <p>3. Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.</p>
            <p>4. In a large mixing bowl, beat the softened cream cheese until smooth. Add sugar and vanilla extract, continue beating until well combined.</p>
            <p>5. Add eggs one at a time, beating well after each addition. Mix in the sour cream until the batter is smooth.</p>
            <p>6. Pour the cream cheese mixture over the cooled crust in the springform pan.</p>
            <p>7. Bake in the preheated oven for 50-60 minutes or until the center is set. The edges should be slightly golden, and the center should have a slight jiggle.</p>
            <p>8. Allow the cheesecake to cool in the oven with the door ajar for about an hour. Refrigerate for at least 4 hours or overnight before serving.</p>
            <p>9. Once chilled, run a knife around the edge of the pan before releasing the springform sides.</p>
            <p>10. Slice and serve your delicious homemade cheesecake!</p>
      </div>
    )
  };
  
  export default Cheesecake;