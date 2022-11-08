choropleth = async () => {
  let usData = await d3.json("https://unpkg.com/us-atlas@3/counties-10m.json");
  let data = await d3.csv("Data/final_data.csv")
  let svg = d3.select("#map")
              .attr("margin-left","100px")
  let projection = d3.geoAlbersUsa();
  let path = d3.geoPath(projection);
  temp = {}
  for(var i=0; i<data.length; i++)
  {
    if(temp.hasOwnProperty(data[i].AgencyCode))
    {
      temp[data[i].AgencyCode] = temp[data[i].AgencyCode] + 1;
    }
    else
    {
      temp[data[i].AgencyCode] = 1
    }
  }
  //console.log(Object.keys(temp))
  //console.log(Object.values(temp))

  let mapdata = await d3.json("Data/us-states.geojson")
  //console.log(mapdata.features[0].properties.NAME)
  console.log(Object.keys(temp).length)
  for(var i=0;i<Object.keys(temp).length;i++)
  {
    var state = Object.keys(temp)[i]
    var value = Object.values(temp)[i]

    for(var j=0;j<mapdata.features.length; j++)
    {
      var mapState = mapdata.features[j].properties.NAME
      if(state==mapState)
      { 
        mapdata.features[j].properties.value = value
        break;
      }
    }
  }
  console.log(mapdata.features)

  svg.selectAll("path")
    .data(mapdata.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("stroke", "#fff")
    .style("stroke-width", "1")
    .style("fill", function(d) { return ramp(d.properties.value) });

		// add a legend
		var w = 140, h = 300;

		var key = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h)
			.attr("class", "legend");

		var legend = key.append("defs")
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

		var y = d3.scaleLinear()
			.range([h, 0])
			.domain([0, 40000]);

		var yAxis = d3.axisRight(y);

		key.append("g")
			.attr("class", "y axis")
			.attr("transform", "translate(41,10)")
			.call(yAxis)

}
choropleth()
