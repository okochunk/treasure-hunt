/**
 * Find the shortest path from a starting cell to the treasure (`X`).
 *
 * Cells marked with `#` are walls. Every other cell is traversable.
 * Coordinates are represented as [row, column].
 *
 * @param {string[][]} treasureMap
 * @param {[number, number]} start
 * @returns {Array<[number, number]>|null}
 */
function findTreasurePath(treasureMap, start) {
    validateMap(treasureMap);

    const [startRow, startColumn] = start;
    assertInBounds(treasureMap, startRow, startColumn);

    if (treasureMap[startRow][startColumn] === '#') {
        return null;
    }

    const queue = [[startRow, startColumn]];
    const visited = new Set([toKey(startRow, startColumn)]);
    const previous = new Map();
    let queueIndex = 0;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1],  // right
    ];

    while (queueIndex < queue.length) {
        const [row, column] = queue[queueIndex++];

        if (treasureMap[row][column] === 'X') {
            return buildPath(previous, [row, column]);
        }

        for (const [rowOffset, columnOffset] of directions) {
            const nextRow = row + rowOffset;
            const nextColumn = column + columnOffset;

            if (!isInBounds(treasureMap, nextRow, nextColumn)) {
                continue;
            }

            if (treasureMap[nextRow][nextColumn] === '#') {
                continue;
            }

            const nextKey = toKey(nextRow, nextColumn);

            if (visited.has(nextKey)) {
                continue;
            }

            visited.add(nextKey);
            previous.set(nextKey, [row, column]);
            queue.push([nextRow, nextColumn]);
        }
    }

    return null;
}

function buildPath(previous, treasure) {
    const path = [];
    let current = treasure;

    while (current !== undefined) {
        path.push(current);
        current = previous.get(toKey(current[0], current[1]));
    }

    return path.reverse();
}

function toKey(row, column) {
    return `${row},${column}`;
}

function isInBounds(treasureMap, row, column) {
    return (
        row >= 0 &&
        row < treasureMap.length &&
        column >= 0 &&
        column < treasureMap[row].length
    );
}

function assertInBounds(treasureMap, row, column) {
    if (!isInBounds(treasureMap, row, column)) {
        throw new RangeError('The starting position is outside the map.');
    }
}

function validateMap(treasureMap) {
    if (!Array.isArray(treasureMap) || treasureMap.length === 0) {
        throw new TypeError('The treasure map must be a non-empty 2D array.');
    }

    const columnCount = treasureMap[0].length;

    if (columnCount === 0 || !treasureMap.every((row) => Array.isArray(row) && row.length === columnCount)) {
        throw new TypeError('The treasure map must be rectangular.');
    }
}

// Input
const treasureMap = [
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '.', '.', '#'],
    ['#', '.', '.', '.', '#', '.', '#', '#'],
    ['#', 'X', '#', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
];

const start = [1, 1];
const path = findTreasurePath(treasureMap, start);

if (path === null) {
    console.log('Treasure tidak ditemukan.');
} else {
    console.log('Treasure ditemukan!');
    console.log('Shortest path:', path);
}
