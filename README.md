# Treasure Hunt Pathfinder

A small JavaScript project that finds the shortest route from a starting point to a treasure on a maze-like map using the Breadth-First Search (BFS) algorithm.

## Overview

The program reads a 2D grid where:

- `#` represents a wall
- `.` represents an open cell
- `X` represents the treasure location

It starts from a given coordinate and calculates the shortest valid path to the treasure, returning the route as a list of `[row, column]` coordinates.

## Features

- Finds the shortest path using BFS
- Handles wall boundaries and invalid map input
- Validates the map structure and starting position
- Returns `null` when the treasure cannot be reached
- Easy to run in any Node.js environment

## Project Structure

```text
treasure-hunt/
├── treasure.js
└── README.md
```

## How It Works

The solution uses BFS because it guarantees the shortest path in an unweighted grid.

At each step, the algorithm:

1. Starts from the provided position
2. Visits neighboring cells in all four directions
3. Skips walls and already visited cells
4. Stops when it reaches `X`
5. Reconstructs the path back to the start

## Example Map

```js
const treasureMap = [
  ['#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '#', '#', '#', '.', '.', '#'],
  ['#', '.', '.', '.', '#', '.', '#', '#'],
  ['#', 'X', '#', '.', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#'],
];

const start = [1, 1];
```

## Example Output

```bash
Treasure ditemukan!
Shortest path: [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 3, 3 ], [ 4, 3 ], [ 4, 4 ], [ 4, 5 ], [ 4, 6 ], [ 3, 6 ], [ 2, 6 ], [ 1, 6 ] ]
```

## Run the Program

Make sure you have Node.js installed, then run:

```bash
node treasure.js
```

## Algorithm Complexity

- Time complexity: O(R × C)
- Space complexity: O(R × C)

where `R` is the number of rows and `C` is the number of columns in the map.

## Notes

This project is a great example of:

- graph traversal
- shortest-path algorithms
- grid-based problem solving
- JavaScript implementation of BFS

If you want, you can also extend this project with:

- a command-line map input
- random treasure map generation
- a visual path rendering in the browser
- support for diagonal movement

