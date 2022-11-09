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
    'Student' : parseInt(d['Student'])
  }))

  //console.log(ethnicity[0].Black)

  var AmerInd = d3.group(ethnicity, d => d.AmericanIndian);
  var AmerIndF = (AmerInd.get(1)).length
  //console.log(AmerIndF)

  var Asian = d3.group(ethnicity, d => d.Asian);
  var AsianF = (Asian.get(1)).length
  //console.log(AsianF)

  var Black = d3.group(ethnicity, d => d.Black);
  var BlackF = (Black.get(1)).length
  //console.log(BlackF)

  var Hawaiian = d3.group(ethnicity, d => d.Hawaiian);
  var HawaiianF = (Hawaiian.get(1)).length
  //console.log(HawaiianF)

  var White = d3.group(ethnicity, d => d.White);
  var WhiteF = (White.get(1)).length
  //console.log(WhiteF)
  
  var Hispanic = d3.group(ethnicity, d => d.Hispanic);
  var HispanicF = (Hispanic.get(1)).length
  //console.log(HispanicF)

  const EthArray = [
      {Ethnicity : 'AmericanIndian', Frequency : 0},
      {Ethnicity : 'Asian', Frequency : 0},
      {Ethnicity : 'Black', Frequency : 0},
      {Ethnicity : 'Hawaiian', Frequency : 0},
      {Ethnicity : 'White', Frequency : 0},
      {Ethnicity : 'Hispanic', Frequency : 0},
      ];

for (const i of EthArray) {
  if (i.Ethnicity == 'AmericanIndian') {
    i.Frequency = AmerIndF;
    }
  if (i.Ethnicity == 'Asian') {
    i.Frequency = AsianF;
    }
  if (i.Ethnicity == 'Black') {
    i.Frequency = BlackF;
    }
  if (i.Ethnicity == 'Hawaiian') {
    i.Frequency = HawaiianF;
    }
  if (i.Ethnicity == 'White') {
    i.Frequency = WhiteF;
    }
  if (i.Ethnicity == 'Hispanic') {
    i.Frequency = HispanicF;
    }

  }

  var Veteran = d3.group(ethnicity, d => d.Veteran);
  var VeteranF = (Veteran.get(1)).length

  var Student = d3.group(ethnicity, d => d.Student);
  var StudentF = (Student.get(1)).length

const VetStu = [
      {Category : 'Veteran', Frequency : 0},
      {Category : 'Student', Frequency : 0},
      ];

for (const j of VetStu) {
  if (j.Category == 'Veteran') {
    j.Frequency = VeteranF;
    }
  if (j.Category == 'Student') {
    j.Frequency = StudentF;
    }

  }
  
//console.log(VetStu)

// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg1 = d3.select("#my_dataviz1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(EthArray.map(function(d) { return d.Ethnicity; }))
    .padding(0.2);
  svg1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 280000])
    .range([ height, 0]);
  svg1.append("g")
    .call(d3.axisLeft(y));

  // Bars
  svg1.selectAll("mybar")
    .data(EthArray)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Ethnicity); })
      .attr("y", function(d) { return y(d.Frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Frequency); })
      .attr("fill", "#69b3a2")




var svg2 = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var x1 = d3.scaleBand()
    .range([ 0, width ])
    .domain(VetStu.map(function(d) { return d.Category; }))
    .padding(0.2);
  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x1))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y1 = d3.scaleLinear()
    .domain([0, 20000])
    .range([ height, 0]);
  svg2.append("g")
    .call(d3.axisLeft(y1));

  // Bars
  svg2.selectAll("mybar")
    .data(VetStu)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x1(d.Category); })
      .attr("y", function(d) { return y1(d.Frequency); })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return height - y1(d.Frequency); })
      .attr("fill", "SteelBlue")

}

ethnicity()