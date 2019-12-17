let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let interval = new Interval(draw, 30);
let track = new Array()
const CELL_SIZE = 20;

let x_cells = parseInt(canvas.width / CELL_SIZE);
let y_cells = parseInt(canvas.height / CELL_SIZE);

let grid = createGrid(x_cells, y_cells);
let current = grid[0][0]

function createGrid(x_no, y_no) {
    let a = [];
    for (let i = 0; i < y_no; i++) {
        let b = [];
        for (let j = 0; j < x_no; j++) {
            let cell = new Cell(i, j);
            b.push(cell);
        }
        a.push(b);
    }
    return a;
}
if (1 == 2) {
    console.log("okay");
}

function drawGrid(grid, CELL_SIZE) {
    for (let i = 0; i < y_cells; i++) {
        for (let j = 0; j < x_cells; j++) {
            column = grid[i][j]
            if (column.visited) {
                ctx.fillStyle = 'rgba(0, 0, 255, 0.2)'
                ctx.fillRect(column.i * CELL_SIZE, column.j * CELL_SIZE, CELL_SIZE, CELL_SIZE)
            }
            if (column.backtracked) {
                ctx.fillStyle = 'rgba(0, 255, 0, 0.4)'
                ctx.fillRect(column.i * CELL_SIZE, column.j * CELL_SIZE, CELL_SIZE, CELL_SIZE)
            }
            let x, y, dx, dy, line_width = 2
            //top
            if (!column.blocked[0]) {
                x = column.i * CELL_SIZE
                y = column.j * CELL_SIZE
                dx = x + CELL_SIZE
                dy = y
                line(ctx, 'black', line_width, x, y, dx, dy);
            }
            //right
            if (!column.blocked[1]) {
                x = column.i * CELL_SIZE
                x += CELL_SIZE
                y = column.j * CELL_SIZE
                dx = x
                dy = y + CELL_SIZE
                line(ctx, 'black', line_width, x, y, dx, dy);
            }
            //bottom
            if (!column.blocked[2]) {
                x = column.i * CELL_SIZE
                y = column.j * CELL_SIZE
                y += CELL_SIZE
                dx = x + CELL_SIZE
                dy = y
                line(ctx, 'black', line_width, x, y, dx, dy);
            }
            //left
            if (!column.blocked[3]) {
                x = column.i * CELL_SIZE
                y = column.j * CELL_SIZE
                dx = x
                dy = y + CELL_SIZE
                line(ctx, 'black', line_width, x, y, dx, dy);
            }
        }
    }
}
let neibhour
let i
let tf = true

function draw() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawGrid(grid, CELL_SIZE)
    //STEP 1
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
    ctx.fillRect(current.i * CELL_SIZE, current.j * CELL_SIZE, CELL_SIZE, CELL_SIZE)
    //STEP 2
    current.visited = true
    //STEP 3
    neibhour = current.getneighbour(grid)
    //STEP 4
    if (neibhour) {
        track.push(current)
        i = track.length - 1
        // console.log(neibhour.i - current.i, neibhour.j - current.j)
        if (neibhour.i - current.i == 1) {
            current.blocked[1] = true
            neibhour.blocked[3] = true
        } else if (neibhour.i - current.i == -1) {
            current.blocked[3] = true
            neibhour.blocked[1] = true
        } else if (neibhour.j - current.j == 1) {
            current.blocked[2] = true
            neibhour.blocked[0] = true

        } else if (neibhour.j - current.j == -1) {
            current.blocked[0] = true
            neibhour.blocked[2] = true
        }
        current = neibhour
    } else {
        current = track[i]
        track[i].backtracked = true
        i--
        if (i == 0) {
            interval.stop()
            console.log('done')
            tf = false
        }
    }

}
interval.start()



//created maze
function draw0() {
    function draw1(img) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    let path = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [4, 1],
        [5, 1],
        [6, 1],
        [7, 1],
        [7, 2],
        [8, 2],
        [8, 3],
        [9, 3],
        [9, 2],
        [10, 2],
        [10, 1],
        [10, 0],
        [11, 0],
        [12, 0],
        [12, 1],
        [12, 2],
        [13, 2],
        [14, 2],
        [14, 3],
        [15, 3],
        [16, 3],
        [17, 3],
        [17, 4],
        [18, 4],
        [18, 3],
        [18, 2],
        [19, 2],
        [19, 3],
        [20, 3],
        [21, 3],
        [22, 3],
        [22, 2],
        [22, 1],
        [21, 1],
        [21, 2],
        [20, 2],
        [20, 1],
        [19, 1],
        [19, 0],
        [20, 0],
        [21, 0],
        [22, 0],
        [23, 0],
        [24, 0],
        [24, 1],
        [23, 1],
        [23, 2],
        [24, 2],
        [24, 3],
        [23, 3],
        [23, 4],
        [22, 4],
        [21, 4],
        [21, 5],
        [20, 5],
        [19, 5],
        [19, 6],
        [20, 6],
        [20, 7],
        [19, 7],
        [18, 7],
        [17, 7],
        [16, 7],
        [15, 7],
        [15, 8],
        [16, 8],
        [17, 8],
        [17, 9],
        [16, 9],
        [16, 10],
        [15, 10],
        [15, 9],
        [14, 9],
        [14, 8],
        [13, 8],
        [13, 9],
        [13, 10],
        [12, 10],
        [11, 10],
        [10, 10],
        [10, 9],
        [11, 9],
        [12, 9],
        [12, 8],
        [12, 7],
        [12, 6],
        [11, 6],
        [11, 5],
        [12, 5],
        [13, 5],
        [13, 6],
        [14, 6],
        [15, 6],
        [16, 6],
        [16, 5],
        [15, 5],
        [14, 5],
        [14, 4],
        [13, 4],
        [13, 3],
        [12, 3],
        [12, 4],
        [11, 4],
        [10, 4],
        [10, 5],
        [10, 6],
        [9, 6],
        [9, 7],
        [9, 8],
        [8, 8],
        [8, 9],
        [9, 9],
        [9, 10],
        [8, 10],
        [8, 11],
        [7, 11],
        [6, 11],
        [5, 11],
        [4, 11],
        [4, 12],
        [4, 13],
        [4, 14],
        [3, 14],
        [3, 13],
        [3, 12],
        [3, 11],
        [3, 10],
        [3, 9],
        [2, 9],
        [2, 10],
        [2, 11],
        [1, 11],
        [1, 10],
        [1, 9],
        [1, 8],
        [1, 7],
        [0, 7],
        [0, 8],
        [0, 9],
        [0, 10],
        [0, 11],
        [0, 12],
        [1, 12],
        [2, 12],
        [2, 13],
        [1, 13],
        [1, 14],
        [0, 14],
        [0, 15],
        [0, 16],
        [0, 17],
        [1, 17],
        [1, 16],
        [1, 15],
        [2, 15],
        [2, 16],
        [3, 16],
        [4, 16],
        [4, 15],
        [5, 15],
        [6, 15],
        [6, 16],
        [6, 17],
        [7, 17],
        [7, 18],
        [8, 18],
        [8, 19],
        [8, 20],
        [9, 20],
        [9, 21],
        [10, 21],
        [10, 20],
        [10, 19],
        [9, 19],
        [9, 18],
        [9, 17],
        [8, 17],
        [8, 16],
        [9, 16],
        [10, 16],
        [11, 16],
        [11, 15],
        [12, 15],
        [12, 14],
        [11, 14],
        [10, 14],
        [10, 13],
        [10, 12],
        [10, 11],
        [11, 11],
        [11, 12],
        [12, 12],
        [12, 11],
        [13, 11],
        [13, 12],
        [13, 13],
        [14, 13],
        [14, 12],
        [15, 12],
        [16, 12],
        [16, 13],
        [15, 13],
        [15, 14],
        [14, 14],
        [14, 15],
        [15, 15],
        [16, 15],
        [16, 16],
        [16, 17],
        [16, 18],
        [17, 18],
        [17, 17],
        [17, 16],
        [17, 15],
        [17, 14],
        [18, 14],
        [18, 13],
        [17, 13],
        [17, 12],
        [18, 12],
        [18, 11],
        [18, 10],
        [18, 9],
        [19, 9],
        [19, 8],
        [20, 8],
        [21, 8],
        [21, 9],
        [22, 9],
        [23, 9],
        [23, 8],
        [24, 8],
        [24, 9],
        [24, 10],
        [23, 10],
        [23, 11],
        [22, 11],
        [21, 11],
        [20, 11],
        [20, 10],
        [19, 10],
        [19, 11],
        [19, 12],
        [20, 12],
        [21, 12],
        [22, 12],
        [23, 12],
        [23, 13],
        [22, 13],
        [22, 14],
        [21, 14],
        [21, 13],
        [20, 13],
        [19, 13],
        [19, 14],
        [20, 14],
        [20, 15],
        [21, 15],
        [22, 15],
        [23, 15],
        [23, 16],
        [23, 17],
        [23, 18],
        [24, 18],
        [24, 19],
        [24, 20],
        [24, 21],
        [24, 22],
        [24, 23],
        [24, 24]
    ]
    let img = new Image()
    img.src = './created.png'
    img.onload = () => {
        draw1(img)
        for (let i = 0; i < path.length; i++) {
            ctx.fillStyle = 'rgba(0, 0, 255, 0.2)'
            ctx.fillRect(path[i][1] * CELL_SIZE, path[i][0] * CELL_SIZE, CELL_SIZE, CELL_SIZE)
        }
    }
}