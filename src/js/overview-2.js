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

  var Veteran = d3.group(ethnicity, d => d.Veteran);
  var VeteranF = (Veteran.get(1)).length
  //console.log(VeteranF)

  var Student = d3.group(ethnicity, d => d.Student);
  var StudentF = (Student.get(1)).length+(Student.get(2)).length+(Student.get(3)).length
  //console.log(StudentF)

  const EthArray = [
      {Ethnicity : 'AmericanIndian', Frequency : 0},
      {Ethnicity : 'Asian', Frequency : 0},
      {Ethnicity : 'Black', Frequency : 0},
      {Ethnicity : 'Hawaiian', Frequency : 0},
      {Ethnicity : 'White', Frequency : 0},
      {Ethnicity : 'Hispanic', Frequency : 0},
      {Ethnicity : 'Veteran', Frequency : 0},
      {Ethnicity : 'Student', Frequency : 0}
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
    if (i.Ethnicity == 'Veteran') {
    i.Frequency = VeteranF;
    }
  if (i.Ethnicity == 'Student') {
    i.Frequency = StudentF;
    }
  }

//console.log(EthArray)

var PrimDis = d3.group(ethnicity, d => d.Disability);

var NoDis = (PrimDis.get(0)).length
//console.log(NoDis)

var Sensory = (PrimDis.get(1)).length+(PrimDis.get(2)).length+(PrimDis.get(3)).length
              +(PrimDis.get(4)).length+(PrimDis.get(5)).length+(PrimDis.get(6)).length 
              +(PrimDis.get(7)).length+(PrimDis.get(8)).length+(PrimDis.get(9)).length
//console.log(Sensory)

var Physical = (PrimDis.get(10)).length+(PrimDis.get(11)).length
              +(PrimDis.get(12)).length+(PrimDis.get(13)).length
              +(PrimDis.get(14)).length+(PrimDis.get(15)).length 
              +(PrimDis.get(16)).length
//console.log(Physical)

var Cognitive = (PrimDis.get(17)).length
//console.log(Cognitive)

var Mental = (PrimDis.get(18)).length+(PrimDis.get(19)).length
//console.log(Mental)


const DisablDist = [
      {Type : 'Sensory', Count : 0},
      {Type : 'Physical', Count : 0},
      {Type : 'Cognitive', Count : 0},
      {Type : 'Mental', Count : 0}
      ];

for (const j of DisablDist) {
  if (j.Type == 'Sensory') {
    j.Count = Sensory;
    }
  if (j.Type == 'Physical') {
    j.Count = Physical;
    }
  if (j.Type == 'Cognitive') {
    j.Count = Cognitive;
    }
  if (j.Type == 'Mental') {
    j.Count = Mental;
    }
  }

 console.log(DisablDist)
  console.log(EthArray)


// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz1")
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
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 280000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Bars
  svg.selectAll("mybar")
    .data(EthArray)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Ethnicity); })
      .attr("y", function(d) { return y(d.Frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Frequency); })
      .attr("fill", "Red")


  var svg1 = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var x1 = d3.scaleBand()
    .range([ 0, width ])
    .domain(DisablDist.map(function(d) { return d.Type; }))
    .padding(0.2);
  svg1.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x1))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

  // Add Y axis
  var y1 = d3.scaleLinear()
    .domain([0, 150000])
    .range([ height, 0]);
  svg1.append("g")
    .call(d3.axisLeft(y1));

  // Bars
  svg1.selectAll("rect")
    .data(DisablDist)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x1(d.Type); })
      .attr("y", function(d) { return y1(d.Count); })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return height - y1(d.Count); })
      .attr("fill", "SteelBlue")

}

ethnicity()