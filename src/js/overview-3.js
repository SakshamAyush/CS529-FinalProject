scatter = async (type) => {

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



  var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


  var x = d3.scaleLinear()
    .domain([0, 10])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 110])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(finalData)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.HourlyWage); } )
      .attr("cy", function (d) { return y(d.HoursWorked); } )
      .attr("r", 1.5)
      .style("fill", "#bc2a66")


    return finalData



}

scatter(2)