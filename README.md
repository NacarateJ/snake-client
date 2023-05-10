# Snake Client Project

Snake game is a classic video game where the player maneuvers a dot and grows it by eating pieces of food, while avoiding obstacles such as walls and the growing length of the snake itself.

This is a simply multiplayer take on the genre designed to practice networking and asynchronous programming using Node's net module. The game runs in the terminal and enables multiple players to compete against each other.

## Learning Outcomes

* How to connect a client to a server using TCP,
* How to create event handlers that respond to specific events such as data reception or connection establishment,
* How to write modular and asynchronous code.

Before you can run this client, you will need to be running the server side which you can clone from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Getting Started

- Follow steps inside the snek [server](https://github.com/lighthouse-labs/snek-multiplayer) repo to run the server side.
- Clone the [snake-client](https://github.com/NacarateJ/snake-client) repo.
- Run the development snake-client using the `node play.js` command.
- Press <kbd>Ctrl</kbd> + <kbd>c</kbd> to terminate the game.

## Move Commands Keys
- w = Move up
- a = Move left
- s = Move down
- d = Move right

## Sending Messages Keys
- g = Game over for you!
- h = Watch out for walls!
- j = Time to eat!

## Setting up your initials
In the constants.js file enter your initials here:
`const NAME = "Name: __"`

## Final Product

<div align="center">

https://user-images.githubusercontent.com/114256348/233805314-b06d9a7a-0c83-4ef7-baad-e2b654196594.mp4

  </div>

## Credit Where Credit Due
The server code for this game was written by [LHL](https://www.lighthouselabs.ca/) team. It is a heavily modified multi-player version of the single player game [Snek](https://github.com/taniarascia/snek) created by [Tania Rascia](https://github.com/taniarascia).
