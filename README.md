### `Tenzies App`
This is a simple web app built with React and Bootstrap that allows users to play a game of Tenzies. The app features a dice roller and allows players to click on each die to freeze it at its current value between rolls.

### `Getting Started`
To run the app, simply clone the repository and run `npm start` in the root directory. This will start the development server and open the app in your default web browser.

### `How to Play`
Roll the dice by clicking the "Roll" button.
Click on each die to freeze it at its current value between rolls.
Roll again until all dice are the same value.
Code Overview
The app consists of two main components:

### `App`
This is the main component that handles the game logic and renders the UI. It uses the `useState` and `useEffect` hooks to manage state and update the UI as necessary. 
The `generatenewDie`, `allNewDice`, `rollDice`, `holdDice`, and `newGame` functions handle the game logic for generating new dice, rolling the dice, freezing dice, and starting a new game.

### `Die`
This is a simple stateless functional component that renders a single die. It takes in an array of dice data and a callback function for handling clicks on the dice. The component uses the Row and Col components from Bootstrap to render the dice in a grid layout.

### `Conclusion`
This app is a simple example of how React and Bootstrap can be used to build a web app with dynamic user interactions. 