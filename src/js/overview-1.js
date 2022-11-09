choropleth = async () => {
  let usData = await d3.json("https://unpkg.com/us-atlas@3/counties-10m.json");
  let data = await d3.csv("Data/final_data.csv")
  let svg = d3.select("#map")
              .attr("margin-left","00px")
  let projection = d3.geoAlbersUsa();
  let path = d3.geoPath(projection);
  var lowColor = '#f9f9f9'
  var highColor = '#bc2a66'

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

  var minValue = Number.POSITIVE_INFINITY
  var maxValue = Number.NEGATIVE_INFINITY
  let mapdata = await d3.json("Data/us-states.geojson")
  
  for(var i=0;i<Object.keys(temp).length;i++)
  {
    var state = Object.keys(temp)[i]
    var value = Object.values(temp)[i]

    for(var j=0;j<mapdata.features.length; j++)
    {
      var mapState = mapdata.features[j].properties.NAME
      if(state==mapState)
      { 
        if(value<minValue)
        {
          minValue = value
        }
        if(value>maxValue)
        {
          maxValue = value
        }
        mapdata.features[j].properties.value = value
        break;
      }
    }
  }
  var ramp = d3.scaleLinear().domain([minValue,maxValue]).range([lowColor,highColor])

  var tooltip = d3.select("body")
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

  svg.selectAll("path")
     .data(mapdata.features)
     .enter()
     .append("path")
     .attr("d", path)
     .style("stroke", "#000")
     .style("stroke-width", "1")
     .style("fill", function(d) { return ramp(d.properties.value) })
     .on('mouseover',function(d){
        tooltip.html("<b>State: </b>"+d.properties.NAME+"</br>"+"<b>Count: </b>"+d.properties.value)
        return tooltip.style("visibility", "visible");
      } )
     .on('mousemove',function(d){
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on('mouseout', function(d){
        return tooltip.style("visibility", "hidden");
      });

		var w = 140, h = 300;

		var key = d3.select("#map")
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
              .domain([minValue, maxValue]);

		var yAxis = d3.axisRight(y);

		key.append("g")
			 .attr("class", "y axis")
			 .attr("transform", "translate(41,10)")
			 .call(yAxis)

}
choropleth()
