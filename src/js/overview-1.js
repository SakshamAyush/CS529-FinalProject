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
  for(let i=0; i<data.length; i++)
  {
    if(temp.hasOwnProperty(data[i].AgencyCode))
    {
      temp[data[i].AgencyCode] = temp[data[i].AgencyCode] + 1;
    }
    if(!(temp.hasOwnProperty(data[i].AgencyCode)))
    {
      temp[data[i].AgencyCode] = 1;
      //gender[data[i].AgencyCode] = {Male:0, Female:0}
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

  }

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
      console.log(gender[selectedState])
      svg.selectAll("path").style("stroke-width", "1")
      d3.select(this).style("stroke-width","5")
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
