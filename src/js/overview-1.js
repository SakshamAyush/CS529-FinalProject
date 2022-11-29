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
 
  temp = {}
  gender = {}
  eth = {}
  disab = {}
  for(let i=0; i<data.length; i++)
  {
    //Getting counts for each state
    if(temp.hasOwnProperty(data[i].AgencyCode))
    {
      temp[data[i].AgencyCode] = temp[data[i].AgencyCode] + 1;
    }
    if(!(temp.hasOwnProperty(data[i].AgencyCode)))
    {
      temp[data[i].AgencyCode] = 1;
    }

    //Getting counts of gender for each state
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

    //Getting counts of ethnicity for each state
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

    //Getting counts of disability groups for each state
    if(disab.hasOwnProperty(data[i].AgencyCode))
    {
      if(data[i].PrimDisability==1 || data[i].PrimDisability==2 || data[i].PrimDisability==3 || data[i].PrimDisability==4 || data[i].PrimDisability==5
        || data[i].PrimDisability==6 || data[i].PrimDisability==7 || data[i].PrimDisability==8 || data[i].PrimDisability==9)
      {
        disab[data[i].AgencyCode].SensoryImpairments = disab[data[i].AgencyCode].SensoryImpairments + 1;
      }
      else if(data[i].PrimDisability==10 || data[i].PrimDisability==11 || data[i].PrimDisability==12 || data[i].PrimDisability==13 || data[i].PrimDisability==14
        || data[i].PrimDisability==15 || data[i].PrimDisability==16)
      {
        disab[data[i].AgencyCode].PhysicalImpairments = disab[data[i].AgencyCode].PhysicalImpairments + 1;
      }
      else if(data[i].PrimDisability == 17)
      {
        disab[data[i].AgencyCode].CognitiveImpairments = disab[data[i].AgencyCode].CognitiveImpairments + 1;
      }
      else if(data[i].PrimDisability == 18 || data[i].PrimDisability == 19)
      {
        disab[data[i].AgencyCode].MentalImpairments = disab[data[i].AgencyCode].MentalImpairments + 1;
      }
      else{
        disab[data[i].AgencyCode].NoImpairments = disab[data[i].AgencyCode].NoImpairments + 1;
      }
    }
    if(!(disab.hasOwnProperty(data[i].AgencyCode)))
    {
      if(data[i].PrimDisability==1 || data[i].PrimDisability==2 || data[i].PrimDisability==3 || data[i].PrimDisability==4 || data[i].PrimDisability==5
        || data[i].PrimDisability==6 || data[i].PrimDisability==7 || data[i].PrimDisability==8 || data[i].PrimDisability==9)
      {
        disab[data[i].AgencyCode] = { SensoryImpairments:1, PhysicalImpairments:0, MentalImpairments:0, CognitiveImpairments:0, NoImpairments: 0}
      }
      else if(data[i].PrimDisability==10 || data[i].PrimDisability==11 || data[i].PrimDisability==12 || data[i].PrimDisability==13 || data[i].PrimDisability==14
        || data[i].PrimDisability==15 || data[i].PrimDisability==16)
      {
        disab[data[i].AgencyCode] = { SensoryImpairments:0, PhysicalImpairments:1, MentalImpairments:0, CognitiveImpairments:0, NoImpairments: 0}
      }
      else if(data[i].PrimDisability == 17)
      {
        disab[data[i].AgencyCode] = { SensoryImpairments:0, PhysicalImpairments:0, MentalImpairments:0, CognitiveImpairments:1, NoImpairments: 0}
      }
      else if(data[i].PrimDisability == 18 || data[i].PrimDisability == 19)
      {
        disab[data[i].AgencyCode] = { SensoryImpairments:0, PhysicalImpairments:0, MentalImpairments:1, CognitiveImpairments:0, NoImpairments: 0}
      }
      else
      {
        disab[data[i].AgencyCode] = { SensoryImpairments:0, PhysicalImpairments:0, MentalImpairments:0, CognitiveImpairments:0, NoImpairments: 1}
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
      //Showing other Viz for selected State
      selectedState = d.properties.NAME
      svg.selectAll("path").style("stroke-width", "1")
      d3.select(this).style("stroke-width","5")
      gender_plot(gender,selectedState)
      ethnicity_plot(eth,selectedState)
      disability_plot(disab, selectedState)
      })
     .on('mouseover',function(d){
        tooltip.html("<b>State: </b>"+d.properties.NAME+"</br>"+"<b>VR Applicant Count: </b>"+d.properties.value);
        return tooltip.style("visibility", "visible");
      } )
     .on('mousemove',function(d){
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on('mouseout', function(d){
        return tooltip.style("visibility", "hidden");
      });


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


//Plot for gender distribution
function gender_plot(gender,selectedState)
{
  let gender_data = []
  let gval=[]
  for(let i=0;i<3;i++)
  {
    //Creating a dictionary of gender counts
    const gtemp = {"Key": Object.keys(gender[selectedState])[i], "Value": parseInt(Object.values(gender[selectedState])[i]) }
    if(gtemp.Value!==0)
    {
      gender_data.push(gtemp)
      gval.push(parseInt(Object.values(gender[selectedState])[i]))
    }
    
  }
  let gmargin = {top: 30, right: 40, bottom: 70, left:65}
  let gwidth = 440 
  let gheight = 200-30
  let svg_gender = d3.select("#viz3")
  d3.selectAll("#viz3 > *").remove(); 

  //Creating tooltip
  let gen_tooltip = d3.select("body")
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

  let x = d3.scaleBand()
            .range([65,gwidth-40])
            .domain(gender_data.map(function(dg) {return dg.Key}))
            .padding(0.6);

  //Creating X-Axis
  svg_gender.append("g")
            .attr("transform", "translate(0," + gheight + ")")
            .call(d3.axisBottom(x));

  let y = d3.scaleLinear()
            .domain([0, Math.max(...gval)+100])
            .range([ gheight, 10]);

  //Creating Y-Axis
  svg_gender.append('g')
            .call(d3.axisLeft(y))
            .attr('transform', `translate(${gmargin.left},0)`)

  //Creating Y-label          
  svg_gender.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x", -60)
            .attr("y", 20)
            .attr("transform", "rotate(-90)")
            .text("Count");

  //Creating Bar Chart
  svg_gender.selectAll("bar")
            .data(gender_data)
            .enter()
            .append("rect")
            .attr("x", function(dg) { return x(dg.Key); })
            .attr("y", function(dg)  {
              if(dg.Key=="DidNotIdentify")
              {
                //Adding dummy value to make the bar visible on the plot
                return y(dg.Value+20);
              }
              else
              {
                return y(dg.Value);
              }
            })
            .attr("width", x.bandwidth())
            .attr("height", function(dg) { 
              if(dg.Key=="DidNotIdentify")
              {
                //Adding dummy value to make the bar visible on the plot
                return gheight - y(dg.Value+20);
              }
              else
              {
                return gheight - y(dg.Value);
              }
             })
            .attr("fill", "#bc2a66")
            .on('mouseover',function(dg){
              gen_tooltip.html("<b>Count: </b>"+dg.Value);
              return gen_tooltip.style("visibility", "visible");
            })
           .on('mousemove',function(dg){
              return gen_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
           .on('mouseout', function(){
              return gen_tooltip.style("visibility", "hidden");
            });

  //Adding title
  svg_gender.append("text")
            .text("Gender")
            .attr("x", 410)
            .attr("y",80)
            .style("font","30px times");

  svg_gender.append("text")
            .text("Distribution")
            .attr("x", 380)
            .attr("y",110)
            .style("font","30px times");



}

//Plot for ethnicity distribution
function ethnicity_plot(eth,selectedState)
{
  let eth_features = ["AmerIndian","Asian","Black","Hawaiian","White","Hispanic"]
  let eth_data = []
  let eval=[]
  for(let i=0;i<6;i++)
  {
    //Creating a dictionary of ehtnicity counts
    const etemp = {"Key": Object.keys(eth[selectedState])[i], "Value": parseInt(Object.values(eth[selectedState])[i]) }
    if(etemp.Value!==0)
    {
      eth_data.push(etemp)
      eval.push(parseInt(Object.values(eth[selectedState])[i]))
    }
  }
  let svg_eth = d3.select("#viz2");
  d3.selectAll("#viz2 > *").remove(); 

  //Creating tooltip
  let eth_tooltip = d3.select("body")
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
                    
  let radialScale = d3.scaleLinear()
                      .domain([0,10])
                      .range([0,90]);

  let ticks = [1,2,4,6,8,10];

  //Creating circles for the plot
  ticks.forEach(t =>
    svg_eth.append("circle")
           .attr("cx", 180)
           .attr("cy", 110)
           .attr("fill", "none")
           .attr("stroke", "gray")
           .attr("r", radialScale(t))
  );

  function angleToCoordinate(angle, value){
    let x = Math.cos(angle) * radialScale(value);
    let y = Math.sin(angle) * radialScale(value);
    return {"x": 180 + x, "y": 110 - y};
  }

  for (let i = 0; i < Object.keys(eth[selectedState]).length; i++) {
    let ft_name = Object.keys(eth[selectedState])[i];
    let angle = (Math.PI / 2) + (2 * Math.PI * i / Object.keys(eth[selectedState]).length);
    let line_coordinate = angleToCoordinate(angle, 10);
    let label_coordinate = angleToCoordinate(angle, 10.5);

    //Draw axis line
    svg_eth.append("line")
           .attr("x1", 180)
           .attr("y1", 110)
           .attr("x2", line_coordinate.x)
           .attr("y2", line_coordinate.y)
           .attr("stroke","black");

    //Creating and positioning axis label for each individual label
    if(ft_name=="Black")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x-40)
             .attr("y", label_coordinate.y+10)
             .text(ft_name)
             .on('mouseover',function(){
                eth_tooltip.html("<b>Count: </b>"+eth[selectedState].Black);
                return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
                return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
                return eth_tooltip.style("visibility", "hidden");
              });
    }

    if(ft_name=="Asian")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x-40)
             .attr("y", label_coordinate.y)
             .text(ft_name)
             .on('mouseover',function(){
                eth_tooltip.html("<b>Count: </b>"+eth[selectedState].Asian);
                return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
                return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
                return eth_tooltip.style("visibility", "hidden");
              });
    }

    if(ft_name=="AmerIndian")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x-55)
             .attr("y", label_coordinate.y)
             .text("American Indian")
             .on('mouseover',function(){
               eth_tooltip.html("<b>Count: </b>"+eth[selectedState].AmerIndian);
               return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
                return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
                return eth_tooltip.style("visibility", "hidden");
              });
    }

    if(ft_name=="White")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x)
             .attr("y", label_coordinate.y+10)
             .text(ft_name)
             .on('mouseover',function(){
               eth_tooltip.html("<b>Count: </b>"+eth[selectedState].White);
                return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
               return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
                return eth_tooltip.style("visibility", "hidden");
              });
    }

    if(ft_name=="Hawaiian")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x-25)
             .attr("y", label_coordinate.y+10)
             .text(ft_name)
             .on('mouseover',function(){
                eth_tooltip.html("<b>Count: </b>"+eth[selectedState].Hawaiian);
                return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
               return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
               return eth_tooltip.style("visibility", "hidden");
              });
    }

    if(ft_name=="Hispanic")
    {
      svg_eth.append("text")
             .attr("x", label_coordinate.x)
             .attr("y", label_coordinate.y)
             .text(ft_name)
             .on('mouseover',function(){
               eth_tooltip.html("<b>Count: </b>"+eth[selectedState].Hispanic);
                return eth_tooltip.style("visibility", "visible");
              })
             .on('mousemove',function(){
               return eth_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
              })
             .on('mouseout', function(){
               return eth_tooltip.style("visibility", "hidden");
              });
    }
    
  }

  let line = d3.line()
                .x(d => d.x)
                .y(d => d.y);

  let colors = ["#bc2a66"];

  //Mapping data values to ticks
  function ethval_pos(value){
    let tick_pos = [1,2,4,6,8,10]
    let sort_eval = eval;
    sort_eval.sort(function(a, b){return a - b});
    return tick_pos[sort_eval.indexOf(value)]
  }

  //Creating the path for plot
  function getPathCoordinates(data_point){
    let coordinates = [];
    for (let i = 0; i < Object.keys(data_point).length; i++){
        let ft_name = Object.keys(data_point)[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / Object.keys(data_point).length);
        coordinates.push(angleToCoordinate(angle, ethval_pos(Object.values(data_point)[i])));
    }
    return coordinates;
  }


  let d = eth[selectedState];
  let color = colors;
  let coordinates = getPathCoordinates(d);

  //Draw the path element
  svg_eth.append("path")
         .datum(coordinates)
         .attr("d",line)
         .attr("stroke-width", 3)
         .attr("stroke", color)
         .attr("fill", color)
         .attr("stroke-opacity", 1)
         .attr("opacity", 0.8);
  
  //Creating a line for Viz separation
  svg_eth.append("line")
         .attr("x1", 0)
         .attr("y1", 225)
         .attr("x2", 540)
         .attr("y2", 225)
         .attr("stroke","black")
         .attr("stroke-width","3");

  //Adding plot title       
  svg_eth.append("text")
         .text("Ethnicity")
         .attr("x", 400)
         .attr("y",80)
         .style("font","30px times");

  svg_eth.append("text")
         .text("Distribution")
         .attr("x", 380)
         .attr("y",110)
         .style("font","30px times");

}

//Plot for disability distribution
function disability_plot(disab, selectedState)
{
  let dis_data = []
  let dval=[]
  let disb_total = 0
  let disx = [155,65,275,155,155]
  let disy = [230,135,135,55,145]
  let dis_color = ["#bc2a66","#d64c86","#e382aa","#f1c1d5","#fbeef4"]
  for(let i=0;i<5;i++)
  {
    //Creating a dictionary of disability distribution counts
    const dtemp = {"Key": Object.keys(disab[selectedState])[i], "Value": Object.values(disab[selectedState])[i], "X": disx[i], "Y": disy[i] }
    if(dtemp.Value!==0)
    {
      dis_data.push(dtemp)
      dval.push(Object.values(disab[selectedState])[i])
      disb_total = disb_total + Object.values(disab[selectedState])[i]
    }
  }

  let svg_dis = d3.select("#viz1");
  d3.selectAll("#viz1 > *").remove(); 

  //Creating tooltip
  let dis_tooltip = d3.select("body")
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

  //Creating circles
  svg_dis.selectAll("circle")
      .data(dis_data)
      .enter()
      .append("circle")
      .attr("cx", function(dd) {return dd.X})
      .attr("cy", function(dd) {return dd.Y})
      .attr("r", function(dd) {
        return Math.pow(dd.Value,0.45)
      })
      .style("stroke","black")
      .attr("fill", function(dd) {
        //Color coding the circles based on the value
        let sort_dval = dval;
        sort_dval.sort(function(a, b){return b - a});
        return dis_color[sort_dval.indexOf(dd.Value)];
      })
      .on('mouseover',function(dd){
        function getKey(key)
        {
          if(key=="SensoryImpairments")
          {
            return "Sensory Impairments"
          }
          if(key=="PhysicalImpairments")
          {
            return "Physical Impairments"
          }
          if(key=="MentalImpairments")
          {
            return "Mental Impairments"
          }
          if(key=="CognitiveImpairments")
          {
            return "Cognitive Impairments"
          }
          if(key=="NoImpairments")
          {
            return "No Impairments"
          }
        }
        dis_tooltip.html("<b>Disability Type: </b>"+getKey(dd.Key) +"</br>"+"<b>Count: </b>"+dd.Value +"</br>"+"<b>Percentage: </b>"+((dd.Value*100)/disb_total).toFixed(2)+"%");
        return dis_tooltip.style("visibility", "visible");
      } )
     .on('mousemove',function(d){
        return dis_tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on('mouseout', function(d){
        return dis_tooltip.style("visibility", "hidden");
      });

  //Creating plot title
  svg_dis.append("text")
        .text("Disability")
        .attr("x", 390)
        .attr("y",50)
        .style("font","30px times");

  svg_dis.append("text")
        .text("Distribution")
        .attr("x", 380)
        .attr("y",80)
        .style("font","30px times");

  //Creating legends
  svg_dis.append("circle")
        .attr("cx",370)
        .attr("cy",130)
        .attr("r", 4)
        .style("fill", function()
        {
          let sort_dval2 = dval;
          sort_dval2.sort(function(a, b){return b - a});
          return dis_color[sort_dval2.indexOf(disab[selectedState].CognitiveImpairments)]; 
        })

  svg_dis.append("text")
        .attr("x", 390)
        .attr("y", 130)
        .text("Cognitive Impairments")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle")

  svg_dis.append("circle")
        .attr("cx",370)
        .attr("cy",150)
        .attr("r", 4)
        .style("fill", function()
        {
          let sort_dval2 = dval;
          sort_dval2.sort(function(a, b){return b - a});
          return dis_color[sort_dval2.indexOf(disab[selectedState].SensoryImpairments)]; 
        })

  svg_dis.append("text")
        .attr("x", 390)
        .attr("y", 150)
        .text("Sensory Impairments")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle")

  svg_dis.append("circle")
        .attr("cx",370)
        .attr("cy",170)
        .attr("r", 4)
        .style("fill", function()
        {
          let sort_dval2 = dval;
          sort_dval2.sort(function(a, b){return b - a});
          return dis_color[sort_dval2.indexOf(disab[selectedState].PhysicalImpairments)]; 
        })

  svg_dis.append("text")
        .attr("x", 390)
        .attr("y", 170)
        .text("Physical Impairments")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle")

  svg_dis.append("circle")
        .attr("cx",370)
        .attr("cy",190)
        .attr("r", 4)
        .style("fill", function()
        {
          let sort_dval2 = dval;
          sort_dval2.sort(function(a, b){return b - a});
          return dis_color[sort_dval2.indexOf(disab[selectedState].MentalImpairments)]; 
        })

  svg_dis.append("text")
        .attr("x", 390)
        .attr("y", 190)
        .text("Mental Impairments")
        .style("font-size", "15px")
        .attr("alignment-baseline","middle")

  if(disab[selectedState].NoImpairments!=0)
  {
    svg_dis.append("circle")
          .attr("cx",370)
          .attr("cy",210)
          .attr("r", 4)
          .style("fill", function()
            {
              let sort_dval2 = dval;
              sort_dval2.sort(function(a, b){return b - a});
              return dis_color[sort_dval2.indexOf(disab[selectedState].NoImpairments)]; 
          })

    svg_dis.append("text")
          .attr("x", 390)
          .attr("y", 210)
          .text("No Impairments")
          .style("font-size", "15px")
          .attr("alignment-baseline","middle")
  }

  //Creating line to separate Viz
  svg_dis.append("line")
  .attr("x1", 0)
  .attr("y1", 285)
  .attr("x2", 540)
  .attr("y2", 285)
  .attr("stroke","black")
  .attr("stroke-width","3");
}