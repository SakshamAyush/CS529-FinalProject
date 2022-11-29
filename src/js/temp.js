heatmap  = function() {

var numPoints = 1500,
    size = 300,
    numRows = 16,
    numCols = 16,
    showingScatter = true,
    scatterDirty = false,
    data = null,
    cells = null,
    color = d3.interpolateRgb("#fff", "#063");

var getEmptyCells = function() {
    var emptyCells = [];
    for (var rowNum = 0; rowNum < numRows; rowNum++) {
        emptyCells.push([]);
        var row = emptyCells[emptyCells.length - 1];
        for (var colNum = 0; colNum < numCols; colNum++) {
            row.push({
                row: rowNum,
                col: colNum,
                density: 0,
                points: []
            });
        }
    }
    return emptyCells;
};

var clearCells = function() {
    for (var rowNum = 0; rowNum < numRows; rowNum++) {
        for (var colNum = 0; colNum < numCols; colNum++) {
            cells[rowNum][colNum].density = 0;
            cells[rowNum][colNum].points = [];
        }
    }
};

var randomizeData = function() {
    data = [];

    if (cells === null) {
        cells = getEmptyCells();
    }
    else {
        clearCells();
    }

    var x, y, col, row;
    for (var i = 0; i < numPoints; i++) {
        x = Math.random() * size;
        y = Math.random() * size;
        col = Math.min(Math.floor(x / size * numCols), numCols - 1);
        row = Math.min(Math.floor(y / size * numRows), numRows - 1);

        data.push({
            x: x,
            y: y,
            col: col,
            row: row,
            cell: cells[row][col],
            ind: i
        });

        cells[row][col].points.push(data[data.length - 1]);
    }
};

console.log(data)


var createHeatchart = function() {
    var min = 999;
    var max = -999;
    var l;

    for (var rowNum = 0; rowNum < cells.length; rowNum++) {
        for (var colNum = 0; colNum < numCols; colNum++) {
            l = cells[rowNum][colNum].points.length;

            if (l > max) {
                max = l;
            }
            if (l < min) {
                min = l;
            }
        }
    }

    var heatchart = d3.select("#heatchart").append("svg").attr("width", size).attr("height", size);

    heatchart.selectAll("g").data(cells).enter().append("g").selectAll("rect").data(function(d) {
        return d;
    }).enter().append("rect").attr("x", function(d, i) {
        return d.col * (size / numCols);
    }).attr("y", function(d, i) {
        return d.row * (size / numRows);
    }).attr("width", size / numCols).attr("height", size / numRows).attr("fill", function(d, i) {
        return color((d.points.length - min) / (max - min));
    }).attr("stroke", "#fff").attr("cell", function(d) {
        return "r" + d.row + "c" + d.col;
    });
};


console.log('chal raha')
var init = function() {
    randomizeData();
    //createScatterplot();
    createHeatchart();
};

init();
};
heatmap();
console.log('heat')