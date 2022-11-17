choropleth = async () => {
  //Adding the dataset
  let data = await d3.csv("Data/final_data.csv");
  //Creating svg for the map
  let svg = d3.select("#map");
  let projection = d3.geoAlbersUsa();
  let path = d3.geoPath(projection);
  //Setting colors for the scale
  let lowColor = '#f9f9f9';
  let highColor = '#bc2a66';
  let selectedState = "None"

  //Getting counts for each state
  temp = {}
  gender = {}
  eth = {}
  for(let i=0; i<data.length; i++)
  {
    if(temp.hasOwnProperty(data[i].AgencyCode))
    {
      temp[data[i].AgencyCode] = temp[data[i].AgencyCode] + 1;
    }
    if(!(temp.hasOwnProperty(data[i].AgencyCode)))
    {
      temp[data[i].AgencyCode] = 1;
    }


    if(gender.hasOwnProperty(data[i].AgencyCode))
    {
      if(data[i].Sex==1)
      {
        gender[data[i].AgencyCode].Male = gender[data[i].AgencyCode].Male + 1;
      }
      if(data[i].Sex==2)
      {
        gender[data[i].AgencyCode].Female = gender[data[i].AgencyCode].Female + 1;
      }
      if(data[i].Sex==9 || data[i].Sex==0)
      {
        gender[data[i].AgencyCode].DidNotIdentify = gender[data[i].AgencyCode].DidNotIdentify + 1;
      }
    }
    if(!(gender.hasOwnProperty(data[i].AgencyCode)))
    {
      if(data[i].Sex==1)
      {
        gender[data[i].AgencyCode] = {Male:1, Female:0, DidNotIdentify:0}
      }
      if(data[i].Sex==2)
      {
        gender[data[i].AgencyCode] = {Male:0, Female:1, DidNotIdentify:0}
      }
      if(data[i].Sex==9 || data[i].Sex==0)
      {
        gender[data[i].AgencyCode] = {Male:0, Female:0, DidNotIdentify:1}
      }
    }


    if(eth.hasOwnProperty(data[i].AgencyCode))
    {
      if(data[i].AmerIndian==1)
      {
        eth[data[i].AgencyCode].AmerIndian = eth[data[i].AgencyCode].AmerIndian + 1;
      }
      if(data[i].Asian==1)
      {
        eth[data[i].AgencyCode].Asian = eth[data[i].AgencyCode].Asian + 1;
      }
      if(data[i].Black==1)
      {
        eth[data[i].AgencyCode].Black = eth[data[i].AgencyCode].Black + 1;
      }
      if(data[i].Hawaiian==1)
      {
        eth[data[i].AgencyCode].Hawaiian = eth[data[i].AgencyCode].Hawaiian + 1;
      }
      if(data[i].White==1)
      {
        eth[data[i].AgencyCode].White = eth[data[i].AgencyCode].White + 1;
      }
      if(data[i].Hispanic==1)
      {
        eth[data[i].AgencyCode].Hispanic = eth[data[i].AgencyCode].Hispanic + 1;
      }
    }
    if(!(eth.hasOwnProperty(data[i].AgencyCode)))
    {
      if(data[i].AmerIndian==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:1, Asian:0, Black:0, Hawaiian:0, White:0, Hispanic:0}
      }
      if(data[i].Asian==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:0, Asian:1, Black:0, Hawaiian:0, White:0, Hispanic:0}
      }
      if(data[i].Black==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:0, Asian:0, Black:1, Hawaiian:0, White:0, Hispanic:0}
      }
      if(data[i].Hawaiian==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:0, Asian:0, Black:0, Hawaiian:1, White:0, Hispanic:0}
      }
      if(data[i].White==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:0, Asian:0, Black:0, Hawaiian:0, White:1, Hispanic:0}
      }
      if(data[i].Hispanic==1)
      {
        eth[data[i].AgencyCode] = {AmerIndian:0, Asian:0, Black:0, Hawaiian:0, White:0, Hispanic:1}
      }
    }

  }
  console.log(eth)

  let minValue = Number.POSITIVE_INFINITY;
  let maxValue = Number.NEGATIVE_INFINITY;
  //Adding US map data
  let mapdata = await d3.json("Data/us-states.geojson");
  
  //Matching state from the map data and our dataset
  for(let i=0;i<Object.keys(temp).length;i++)
  {
    let state = Object.keys(temp)[i];
    let value = Object.values(temp)[i];

    for(let j=0;j<mapdata.features.length; j++)
    {
      let mapState = mapdata.features[j].properties.NAME;
      if(state==mapState)
      { 
        if(value<minValue)
        {
          minValue = value;
        }
        if(value>maxValue)
        {
          maxValue = value;
        }
        mapdata.features[j].properties.value = value;
        break;
      }
    }
  }
  //To add color to the map
  let ramp = d3.scaleLinear().domain([minValue,maxValue]).range([lowColor,highColor]);

  //Creating tooltip
  let tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .style("background", "grey")
  .style("opacity",0.9)
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "10px")
  .style("padding", "15px")
  .text("a simple tooltip");

  //Creating the map
  svg.selectAll("path")
     .data(mapdata.features)
     .enter()
     .append("path")
     .attr("d", path)
     .style("stroke", "#000")
     .style("stroke-width", "1")
     .style("fill", function(d) { return ramp(d.properties.value) })
     .on("click", function (d) {
      //console.log(d.properties.NAME)
      selectedState = d.properties.NAME
      svg.selectAll("path").style("stroke-width", "1")
      d3.select(this).style("stroke-width","5")
      //gender_plot(gender,selectedState)
      //console.log(ethnicity)
      ethnicity_plot(eth,selectedState)
      })
     .on('mouseover',function(d){
        tooltip.html("<b>State: </b>"+d.properties.NAME+"</br>"+"<b>Count: </b>"+d.properties.value);
        return tooltip.style("visibility", "visible");
      } )
     .on('mousemove',function(d){
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on('mouseout', function(d){
        return tooltip.style("visibility", "hidden");
      });

  //Adding title


  //Adding legend
  let w = 140, h = 300;

  let key = d3.select("#map")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
              .attr("class", "legend");

  let legend = key.append("defs")
                  .append("svg:linearGradient")
                  .attr("id", "gradient")
                  .attr("x1", "100%")
                  .attr("y1", "0%")
                  .attr("x2", "100%")
                  .attr("y2", "100%")
                  .attr("spreadMethod", "pad");

	legend.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", highColor)
        .attr("stop-opacity", 1);
			
	legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", lowColor)
        .attr("stop-opacity", 1);

	key.append("rect")
			.attr("width", w - 100)
			.attr("height", h)
			.style("fill", "url(#gradient)")
			.attr("transform", "translate(0,10)");

	let y = d3.scaleLinear()
            .range([h, 0])
            .domain([minValue, maxValue]);

	let yAxis = d3.axisRight(y);

	key.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(41,10)")
			.call(yAxis);




}
choropleth()

/*function gender_plot(gender,selectedState)
{
  //console.log(gender[selectedState])
  let svg = d3.select("#viz1");
  const margin = 10;
  let width = svg.attr("width") - margin;
  let height = svg.attr("height") - margin;
  var xScale = d3.scaleBand().range ([0, width]).padding(0.4)
  //console.log(Object.keys(gender[selectedState]))
  const yScale = d3.scaleLinear().range ([height, 0]);
  var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");
}*/

function ethnicity_plot(eth,selectedState)
{
  //console.log(eth)
  console.log(eth[selectedState])
}