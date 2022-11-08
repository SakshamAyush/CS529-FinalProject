choropleth = async () => {
  let usData = await d3.json("https://unpkg.com/us-atlas@3/counties-10m.json");
  let data = await d3.csv("Data/final_data.csv")
  let svg = d3.select("#map")
              .attr("margin-left","100px")
  let projection = d3.geoAlbersUsa();
  let path = d3.geoPath(projection);
  let state = topojson.feature(usData, usData.objects.states);
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
  console.log(Object.keys(temp))
  console.log(Object.values(temp))

}
choropleth()
