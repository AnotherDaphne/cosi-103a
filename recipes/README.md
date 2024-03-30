# How to Run the Recipes React App
After moving the deployment to a backend server, separate from the provided create-react-app server,
the following must be done to run the Recipes React App:

### `cd recipes`
This changes the directory to the recipes folder. Next, run:

### `npm install`
This installs node_modules and packages to run the pages.

### `npm run build`
This creates an optimized version of the code.

### `npm install express`
This installs express

### `npm install express http-proxy-middleware`
this installs the express middleware to run the proxy

### `cd ..`
This changes the directory to outside the recipes folder. Finally, run:

### `node server/index.js`
This will create a port for the Recipes React App to run on.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.


# Tasty Recipes Website

There is a main landing page that includes a navigation bar for 7 different recipes\
with an image, a short summary, and a button that takes you to the detail page for each recipe.\
A navigation bar can be found at the top of all the pages that can take you back to the\
landing page or our team page.

Each detail page includes an image of the dish, a list of ingredients, and step-by-step\
instructions on how to create the dish. On each recipe page, there is also an option for cooking\
mode which displays images and steps in a carousel bootstrap.

Our team page includes a profile picture and a quick description of us. 
