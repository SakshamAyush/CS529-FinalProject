scatter = async (type) => {

      d3.selectAll("div#scatterplot > *").remove();
      d3.selectAll("div#heatchart > *").remove();
    let raw = await d3.csv("Data/final_data.csv")

    data = raw.map(d => ({
        'Disability': parseInt(d['PrimDisability']),
        'HourlyWage': parseFloat(d['ipeHourlyWage']),
        'HoursWorked': parseFloat(d['ipeWeeklyHoursWorked'])
    }))

    //console.log(data)

    data = data.filter(i => i.HourlyWage && i.HourlyWage != NaN)
    let finalData = null

    if (type == 1) {
        finalData = data.filter(({
                Disability,
            }) =>
            Disability > 0 && Disability <= 9
        )
    } else if (type == 2) {
        finalData = data.filter(({
                Disability,
            }) =>
            Disability > 9 && Disability <= 16
        )
    } else if (type == 3) {
        finalData = data.filter(({
                Disability,
            }) =>
            Disability == 17
        )
    } else {
        finalData = data.filter(({
                Disability,
            }) =>
            Disability >= 18 && Disability <= 19
        )
    }

    finalData = finalData.map(
        ({
            Disability,
            HourlyWage,
            HoursWorked
        }) => ({
            HourlyWage,
            HoursWorked
        })
    )

    //console.log(finalData.slice(0, 5))
    //console.log(finalData[1].HourlyWage)

    let numPoints = finalData.length
    //console.log(numPoints)
    size = 300
    numRows = 16,
    numCols = 16,
    data = null,
    cells = null,
    color = d3.interpolateRgb("#fff", "#063")

    let getEmptyCells = function() {
    let emptyCells = [];
        for (let rowNum = 0; rowNum < numRows; rowNum++) {
            emptyCells.push([]);
            let row = emptyCells[emptyCells.length - 1];
            for (let colNum = 0; colNum < numCols; colNum++) {
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

    let clearCells = function() {
        for (let rowNum = 0; rowNum < numRows; rowNum++) {
            for (let colNum = 0; colNum < numCols; colNum++) {
                cells[rowNum][colNum].density = 0;
                cells[rowNum][colNum].points = [];
            }
        }
    };
    //console.log("hi")

    let parseData = function() {
    data = [];

    if (cells === null) {
        cells = getEmptyCells();
    }
    else {
        clearCells();
    }

    let x, y, col, row;
    for (let i = 0; i < numPoints; i++) {
        x = finalData[i].HourlyWage;
        y = finalData[i].HoursWorked;
        col = Math.min(Math.floor(x  * numCols), numCols - 1);
        row = Math.min(Math.floor(y  * numRows), numRows - 1);
        //console.log("here now")
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

    let margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    let createScatterplot = function() {
        const xLabel = 'Hourly Wage';
        const yLabel = 'Hours Worked in a Week';

        let scatterplot = d3.select("div#scatterplot")
            .append("svg:svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        const g = scatterplot.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        const xAxisG = g.append('g')
            .attr('transform', `translate(0, ${innerHeight})`);
        const yAxisG = g.append('g');

        xAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('x', innerWidth / 2 -70)
          .attr('y', 57)
          .text(xLabel);

        yAxisG.append('text')
          .attr('class', 'axis-label')
          .attr('x', -innerHeight / 2)
          .attr('y', -85)
          .attr('transform', `rotate(-90)`)
          .style('text-anchor', 'middle')
          .text(yLabel);

        let x = d3.scaleLinear()
            .domain([0, 100])
            .range([ 0, width ]);
        scatterplot.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, 75])
        .range([ height, 0]);
    scatterplot.append("g")
        .call(d3.axisLeft(y));

    scatterplot.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.x); } )
      .attr("cy", function (d) { return y(d.y); } )
      .attr("r", 1.5)
      .style("fill", "#bc2a66")
    };

    let createHeatchart = function() {
        let min = 999;
        let max = -999;
        let l;

        for (let rowNum = 0; rowNum < cells.length; rowNum++) {
            for (let colNum = 0; colNum < numCols; colNum++) {
                l = cells[rowNum][colNum].points.length;

                if (l > max) {
                    max = l;
                }
                if (l < min) {
                    min = l;
                }
            }
        }

    let heatchart = d3.select("div#heatchart")
                        .append("svg:svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom);

    heatchart.selectAll("g")
                .data(cells)
                .enter()
                .append("svg:g")
                .selectAll("rect")
                .data(function(d) {
                        return d;
                    }).enter().append("svg:rect").attr("x", function(d, i) {
                        return d.col * (size / numCols);
                    }).attr("y", function(d, i) {
                        return d.row * (size / numRows);
                    }).attr("width", size / numCols).attr("height", size / numRows).attr("fill", function(d, i) {
                        return color((d.points.length - min) / (max - min));
                    }).attr("stroke", "#fff").attr("cell", function(d) {
                        return "r" + d.row + "c" + d.col;
                    });
};


let init = function() {
    parseData();
    createScatterplot();
    createHeatchart();
};

init();



console.log('hey again')



    return finalData

}

scatter(1)

 circlesvg = [{X:10,Y:50,Value:"d1"},{X:10,Y:60,Value:"d2"},{X:30,Y:70,Value:"d3"},{X:100,Y:80,Value:"d4"}]

    let scattersvg = d3.select("radio")
                    .append("svg")
                    .attr("width",450)
                    .attr("height",100)

    scattersvg.selectAll("circle")
              //.data(circlesvg)
              .enter().append("circle")
              .attr("cx",50 /*function(d){return d.X}*/)
              .attr("cy", 50 /*function(d){return d.Y}*/)
              .attr("r",5)
              .style("fill","black")
              /*.on("click",function(d){
                scattersvg.selectAll("circle").style("fill","black")
                d3.select(this).style("fill","red")
                let temp = d.Value
                scatterplot(finalData.temp)
              })*/
    // create svg element:
var svg = d3.select("#circle").append("svg").attr("width", 200).attr("height", 200)

// Add the path using this helper function
svg.append('circle')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', 50)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');
