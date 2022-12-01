ethnicity =  async () => {

  let data = await d3.csv("Data/final_data.csv")

  ethnicity = data.map(d=>({
    'AmericanIndian' : parseInt(d['AmerIndian']),
    'Asian' : parseInt(d['Asian']),
    'Black' : parseInt(d['Black']),
    'Hawaiian' : parseInt(d['Hawaiian']),
    'White' : parseInt(d['White']),
    'Hispanic' : parseInt(d['Hispanic']),
    'Veteran' : parseInt(d['Veteran']),
    'Student' : parseInt(d['Student']),
    'Disability' : parseInt(d['PrimDisability'])
  }))

  //console.log(ethnicity[0].Black)

  let amerInd = d3.group(ethnicity, d => d.AmericanIndian);
  let amerIndF = (amerInd.get(1)).length
  console.log(amerInd)
  console.log(amerIndF)

  let asian = d3.group(ethnicity, d => d.Asian);
  let asianF = (asian.get(1)).length
  //console.log(asianF)

  let black = d3.group(ethnicity, d => d.Black);
  let blackF = (black.get(1)).length
  //console.log(blackF)

  let hawaiian = d3.group(ethnicity, d => d.Hawaiian);
  let hawaiianF = (hawaiian.get(1)).length
  //console.log(hawaiianF)

  let white = d3.group(ethnicity, d => d.White);
  let whiteF = (white.get(1)).length
  //console.log(whiteF)
  
  let hispanic = d3.group(ethnicity, d => d.Hispanic);
  let hispanicF = (hispanic.get(1)).length
  //console.log(hispanicF)

  let veteran = d3.group(ethnicity, d => d.Veteran);
  let veteranF = (veteran.get(1)).length
  //console.log(veteranF)

  let student = d3.group(ethnicity, d => d.Student);
  let studentF = (student.get(1)).length+(student.get(2)).length+(student.get(3)).length
  //console.log(studentF)

  const ethArray = [
      {Ethnicity : 'AmericanIndian', Frequency : 0},
      {Ethnicity : 'Asian', Frequency : 0},
      {Ethnicity : 'Black', Frequency : 0},
      {Ethnicity : 'Hawaiian', Frequency : 0},
      {Ethnicity : 'White', Frequency : 0},
      {Ethnicity : 'Hispanic', Frequency : 0},
      {Ethnicity : 'Veteran', Frequency : 0},
      {Ethnicity : 'Student', Frequency : 0}
      ];

for (const i of ethArray) {
  if (i.Ethnicity == 'AmericanIndian') {
    i.Frequency = amerIndF;
    }
  if (i.Ethnicity == 'Asian') {
    i.Frequency = asianF;
    }
  if (i.Ethnicity == 'Black') {
    i.Frequency = blackF;
    }
  if (i.Ethnicity == 'Hawaiian') {
    i.Frequency = hawaiianF;
    }
  if (i.Ethnicity == 'White') {
    i.Frequency = whiteF;
    }
  if (i.Ethnicity == 'Hispanic') {
    i.Frequency = hispanicF;
    }
    if (i.Ethnicity == 'Veteran') {
    i.Frequency = veteranF;
    }
  if (i.Ethnicity == 'Student') {
    i.Frequency = studentF;
    }
  }

//console.log(ethArray)

let primDis = d3.group(ethnicity, d => d.Disability);

let noDis = (primDis.get(0)).length
//console.log(noDis)

let sensory = (primDis.get(1)).length+(primDis.get(2)).length+(primDis.get(3)).length
              +(primDis.get(4)).length+(primDis.get(5)).length+(primDis.get(6)).length 
              +(primDis.get(7)).length+(primDis.get(8)).length+(primDis.get(9)).length
//console.log(sensory)

let physical = (primDis.get(10)).length+(primDis.get(11)).length
              +(primDis.get(12)).length+(primDis.get(13)).length
              +(primDis.get(14)).length+(primDis.get(15)).length 
              +(primDis.get(16)).length
//console.log(physical)

let cognitive = (primDis.get(17)).length
//console.log(cognitive)

let mental = (primDis.get(18)).length+(primDis.get(19)).length
//console.log(mental)


const disablDist = [
      {Type : 'Sensory', Count : 0},
      {Type : 'Physical', Count : 0},
      {Type : 'Cognitive', Count : 0},
      {Type : 'Mental', Count : 0}
      ];

for (const j of disablDist) {
  if (j.Type == 'Sensory') {
    j.Count = sensory;
    }
  if (j.Type == 'Physical') {
    j.Count = physical;
    }
  if (j.Type == 'Cognitive') {
    j.Count = cognitive;
    }
  if (j.Type == 'Mental') {
    j.Count = mental;
    }
  }

//console.log(disablDist)
//console.log(ethArray)


// set the dimensions and margins of the graph
let margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
let svg = d3.select("#my_dataviz1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

let x = d3.scaleBand()
    .range([ 0, width ])
    .domain(ethArray.map(function(d) { return d.Ethnicity; }))
    .padding(0.2);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  let y = d3.scaleLinear()
    .domain([0, 280000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Bars
  svg.selectAll("mybar")
    .data(ethArray)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Ethnicity); })
      .attr("y", function(d) { return y(d.Frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Frequency); })
      .attr("fill", "#bc2a66")


  let svg1 = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

let x1 = d3.scaleBand()
    .range([ 0, width ])
    .domain(disablDist.map(function(d) { return d.Type; }))
    .padding(0.2);
  svg1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x1))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  let y1 = d3.scaleLinear()
    .domain([0, 150000])
    .range([ height, 0]);
  svg1.append("g")
    .call(d3.axisLeft(y1));

  // Bars
  svg1.selectAll("rect")
    .data(disablDist)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x1(d.Type); })
      .attr("y", function(d) { return y1(d.Count); })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return height - y1(d.Count); })
      .attr("fill", "#bc2a66")

}

ethnicity()