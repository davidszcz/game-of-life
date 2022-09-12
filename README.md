# Game of Life

## Description

**Conway's Game of Life web version!**  

Conway's Game of Life is a zero-player game and and cellular automotan initially created by John Horton in 1970.
It functions by allowing a 'player' to input a starting configuration in a square grid, which contains cells that are alive or dead. Cells grow automatically by following a set of rules that are dependent on the state of itself and its neighbors, meaning the pattern will grow in a unique way corresponding to each initial state, without any further input needed. Try it for yourself and see if any interesting patterns can be made!

It is also turing complete which means it can simulate a universal constructor and other turing machines.

Learn more about Conway's Game of Life and its complete set of rules [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)  

This repository aims to provide an effective web based Lab on Conway's Game of Life, allowing users to view various patterns and starting conditions.
Most of the code has been written in HTML with Javascript/Typescript.


## Installation

To install and run on dev server, follow these steps in your project folder:

Please make sure you have Node.js installed. Download page can be found [here](https://nodejs.org/en/download/)

1. Run command npm install

2. Run command npm run start

3. Open localhost:1234 in your browser

## Contribution

Contributions are welcome from developers of all skill levels! Please follow the steps that are outlined [here](https://github.com/TroyTae/game-of-life/blob/main/.github/CONTRIBUTING.md)

Here is a [good starting point](https://github.com/TroyTae/game-of-life/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) for first-time contributors. This links to 'issues' that have been indentified as open and needing contributors. These could be new features that need implementing or any bugs that have been found.

## Usage

This project's main use case is to allow users to explore various patterns in Conway's Game of Life. From a large selection, users are able to observe various patterns that arise from a known starting configuration and see how the cells automatically change. 

This should prove to be especially useful for experimentation and observation, and serves the purpose as a lab tool on Conway's Game of Life very well.

This is especially helpful for those interested in computational patterns and being able to directly observe a turing complete cellular automotan.

## Demo

Here is a demo of the 'favicon' pattern:

![Demo](./src/static/favicon.gif)  

In this demo, a specific pattern of Conway's Game of Life is demonstrated. The grid starts with a specific starting configuration of squares.
Starting with that configuration, the square grid will change in accordance to the rules of Conway's Game of Life.
The demo cycles through several changes before resetting to the starting grid so that the overall pattern can be observed.

For the complete collection of pattterns defined in this repository, please see [here](https://troytae.github.io/game-of-life/)
Use the drop down menu to select different patterns. Each pattern has a different starting configuration that will affect how the overall square grid changes.

## Contributors

<a href="https://github.com/TroyTae/game-of-life/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=TroyTae/game-of-life" />
</a>

Made with [contributors-img](https://contributors-img.firebaseapp.com)
