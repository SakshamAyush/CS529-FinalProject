parseData = async () => {
    let finalData = {d1: {}, d2: {}, d3: {}, d4: {}};
    
    let raw = await d3.csv("Data/final_data.csv");

    data = raw.map(d => ({
        'Disability': parseInt(d['PrimDisability']),
        'HourlyWage': parseFloat(d['ipeHourlyWage']),
        'HoursWorked': parseFloat(d['ipeWeeklyHoursWorked'])
    }))

    dataf = data.filter(i => i.HourlyWage && i.HourlyWage != NaN)

    finalData.d1 = dataf.filter(({
                Disability,
            }) =>
            Disability > 0 && Disability <= 9
        )
    finalData.d1 = finalData.d1.map(
        ({
            Disability,
            HourlyWage,
            HoursWorked
        }) => ({
            HourlyWage,
            HoursWorked
        })
    )

    finalData.d2 = dataf.filter(({
                Disability,
            }) =>
            Disability > 9 && Disability <= 16
        )
    finalData.d2 = finalData.d2.map(
        ({
            Disability,
            HourlyWage,
            HoursWorked
        }) => ({
            HourlyWage,
            HoursWorked
        })
    )

    finalData.d3 = dataf.filter(({
                Disability,
            }) =>
            Disability == 17
        )
    finalData.d3 = finalData.d3.map(
        ({
            Disability,
            HourlyWage,
            HoursWorked
        }) => ({
            HourlyWage,
            HoursWorked
        })
    )

    finalData.d4 = dataf.filter(({
                Disability,
            }) =>
            Disability >= 18 && Disability <= 19
        )
    finalData.d4 = finalData.d4.map(
        ({
            Disability,
            HourlyWage,
            HoursWorked
        }) => ({
            HourlyWage,
            HoursWorked
        })
    )

    //console.log(finalData.d1[0].HourlyWage)
    //console.log(finalData.d2)
    //console.log(finalData.d3)
    //console.log(finalData.d4)
    //console.log(finalData)



    //circlesvg = [{X:10,Y:50},{X:10,Y:60},{X:30,Y:70},{X:100,Y:80}]

    /*let circle1 = d3.select("#circle1")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle1.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                scatterPlot(finalData.d1);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle2 = d3.select("#circle2")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle2.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                scatterPlot(finalData.d2);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle3 = d3.select("#circle3")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle3.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                scatterPlot(finalData.d3);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle4 = d3.select("#circle4")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle4.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                scatterPlot(finalData.d4);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });


    let circle5 = d3.select("#circle5")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle5.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                heatmap(finalData.d1);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle6 = d3.select("#circle6")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle6.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                heatmap(finalData.d2);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle7 = d3.select("#circle7")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle7.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                heatmap(finalData.d3);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle8 = d3.select("#circle8")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle8.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                heatmap(finalData.d4);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });
*/
    

    return finalData;

};

heatmap = function(dat){

    let numPoints = dat.length
    //console.log(numPoints);
    //size = 300,
    numRows = 5,
    numCols = 5,
    data = null,
    cells = null,
    color = d3.interpolateRgb("#fff", "#063");

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
    }

    let clearCells = function() {
        for (let rowNum = 0; rowNum < numRows; rowNum++) {
            for (let colNum = 0; colNum < numCols; colNum++) {
                cells[rowNum][colNum].density = 0;
                cells[rowNum][colNum].points = [];
            }
        }
    }


    data = [];

    if (cells === null) {
        cells = getEmptyCells();
    }
    else {
        clearCells();
    }

    let x, y, col, row;
    for (let i = 0; i < numPoints; i++) {
        x = dat[i].HourlyWage;
        y = dat[i].HoursWorked;
        col = Math.min(Math.floor(x /  numCols), numCols - 1);
        row = Math.min(Math.floor(y /  numRows), numRows - 1);
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

    //console.log(cells)
    //console.log(data)

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

    let margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    let heatchart = d3.select("#heatchart")
                      .append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                      .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");



    heatchart.selectAll("g")
    .data(cells)
    .enter()
    .append("g")
    .selectAll("rect")
    .data(function(d) {
        return d;
    }).enter().append("rect")
        .attr("x", function(d, i) {
        return d.col * (width / numCols);
    }).attr("y", function(d, i) {
        return d.row * (height / numRows);
    }).attr("width", width / numCols).attr("height", height / numRows).attr("fill", function(d, i) {
        return color((d.points.length - min) / (max - min));
    }).attr("stroke", "#fff").attr("cell", function(d) {
        return "r" + d.row + "c" + d.col;
    });

    //console.log(1)

};

//heatmap();

let scatterPlot = function(data) {
    d3.selectAll("#scatterplot > *").remove();
    let margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    const xLabel = 'Hourly Wage';
    const yLabel = 'Hours Worked in a Week';

    let scatterplot = d3.select("#scatterplot")
                .append("svg")
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


    //Add X Axis
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
            .attr("cx", function (d) { return x(d.HourlyWage); } )
            .attr("cy", function (d) { return y(d.HoursWorked); } )
            .attr("r", 1.5)
            .style("fill", "#bc2a66");
  

};


parseData();