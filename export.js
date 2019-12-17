class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        //top, right, bottom, left
        this.blocked = [false, false, false, false]
        this.visited = false
        this.backtracked = false
    }
    getneighbour(grid) {
        let neighbours = []
        if (!(this.i + 1 > grid.length-1) && !grid[this.i + 1][this.j].visited) {
            neighbours.push(grid[this.i + 1][this.j])
        }
        if (!(this.j + 1 > grid[0].length-1) && !grid[this.i][this.j + 1].visited) {
            neighbours.push(grid[this.i][this.j + 1])
        }
        if (!(this.i - 1 < 0) && !grid[this.i - 1][this.j].visited) {
            neighbours.push(grid[this.i - 1][this.j])
        }
        if (!(this.j - 1 < 0) && !grid[this.i][this.j - 1].visited) {
            neighbours.push(grid[this.i][this.j - 1])
        }


        return neighbours[Math.floor(Math.random() * neighbours.length)]
    }


}





//draw line
function line(ctx, stroke, width, x, y, nx, ny) {
    ctx.beginPath()
    ctx.strokeStyle = stroke
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = width
    ctx.moveTo(x, y)
    ctx.lineTo(nx, ny)
    ctx.stroke()
}
//Ineterval control 
function Interval(fn, time) {
    var timer = false;
    this.start = function () {
        if (!this.isRunning())
            timer = setInterval(fn, time);
    };
    this.stop = function () {
        clearInterval(timer);
        timer = false;
    };
    this.isRunning = function () {
        return timer !== false;
    };
}