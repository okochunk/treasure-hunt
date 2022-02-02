function find_treasure_path(treasure_map) {
    // start point
    let x = 4;
    let a = [];
    let b = [];
    let c = [];

    // up
    for (let i = x; i > 0; i--) {
        if (treasure_map[i][1] == '.') {
            a.push([i,1]);
        }
    }

    let b_path = treasure_map[1].length;
    // right
    for (let i = 0; i < b_path; i++) {
       if (treasure_map[1][i] == '.') {
            b.push([1, i]);
       };
    }

    // down
    let last_b_coordinate = b.pop();
    for (let i = 1; i < treasure_map.length; i++) {
        if (treasure_map[i][last_b_coordinate[1]] == '#') { break; }

        if (treasure_map[i][last_b_coordinate[1]] == '.') {
            c.push([i,6]);
        }
    }

    // down
    let last_b2_coordinate = b[4][1];
    for (let i = 1; i < treasure_map.length; i++) {
        if (treasure_map[i][last_b2_coordinate] == '.') {
            c.push([i,5]);
        }
    }

    // left
    for (let i = b_path; i > 2; i--) {
        if (treasure_map[3][i] == '.') {
            b.push([4, i]);
       };
    }

    // up
    let last_b4_coordinate = b.pop()[0];
    for (let i = last_b4_coordinate; i > 0; i--) {
        if (treasure_map[i][3] == '#') { break; }

        if (treasure_map[i][3] == '.') {
            a.push([i,3]);
        }
    }

    // left
    let last_a_coordinate = a.pop()[0];

    for (i=last_a_coordinate; i > 0; i--) {
        if (treasure_map[3][i] == '#') { break; }

        if (treasure_map[3][i] == '.') {
            b.push([3,i]);
        }
    }

    let result = [...new Set([...a, ...b, ...c])];

    console.log(result);

}


// input
const treasure_map = [
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '.', '.', '#'],
    ['#', '.', '.', '.', '#', '.', '#', '#'],
    ['#', 'X', '#', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
];

find_treasure_path(treasure_map);