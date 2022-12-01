parseData1 = async () => {

    let entryDate = {"All": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "AmericanIndian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Asian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Black": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Hawaiian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "White":{"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Hispanic":{"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0}
                    };

    let exitDate = {"All": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "AmericanIndian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Asian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Black": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Hawaiian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "White":{"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Hispanic":{"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0}
                    };
    
    let raw1 = await d3.csv("Data/final_data.csv");

    data1 = raw1.map(d=>({
    'AmericanIndian' : parseInt(d['AmerIndian']),
    'Asian' : parseInt(d['Asian']),
    'Black' : parseInt(d['Black']),
    'Hawaiian' : parseInt(d['Hawaiian']),
    'White' : parseInt(d['White']),
    'Hispanic' : parseInt(d['Hispanic']),
    //'Veteran' : parseInt(d['Veteran']),
    //'Student' : parseInt(d['Student']),
    //'Disability' : parseInt(d['PrimDisability']),
    'Entry' : parseInt(d['ApplicationDate']),
    'Exit' : parseInt(d['exitDate'])
    }))


    data2 = data1.map(i=>({...i, entryMonth : String(i.Entry).slice(4,6), exitMonth : String(i.Exit).slice(4,6),}))
    //console.log(data[0].entryMonth, data[0].exitMonth)

    data2.map(i=>{
        switch(i.entryMonth){
        case "01":
        entryDate["All"]["Jan"] += 1 
        entryDate["AmericanIndian"]["Jan"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Jan"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Jan"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Jan"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Jan"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Jan"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "02":
        entryDate["All"]["Feb"] += 1
        entryDate["AmericanIndian"]["Feb"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Feb"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Feb"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Feb"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Feb"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Feb"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "03":
        entryDate["All"]["Mar"] += 1
        entryDate["AmericanIndian"]["Mar"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Mar"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Mar"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Mar"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Mar"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Mar"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "04":
        entryDate["All"]["Apr"] += 1
        entryDate["AmericanIndian"]["Apr"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Apr"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Apr"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Apr"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Apr"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Apr"] += i.Hawaiian == 1 ? 1:0
        break;
        
        
        case "05":
        entryDate["All"]["May"] += 1
        entryDate["AmericanIndian"]["May"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["May"] += i.Asian == 1 ? 1:0
        entryDate["White"]["May"] +=i.White == 1 ? 1:0
        entryDate["Black"]["May"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["May"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["May"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "06":
        entryDate["All"]["Jun"] += 1
        entryDate["AmericanIndian"]["Jun"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Jun"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Jun"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Jun"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Jun"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Jun"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "07":
        entryDate["All"]["Jul"] += 1
        entryDate["AmericanIndian"]["Jul"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Jul"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Jul"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Jul"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Jul"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Jul"] += i.Hawaiian == 1 ? 1:0
        break;

        case "08":
        entryDate["All"]["Aug"] += 1
        entryDate["AmericanIndian"]["Aug"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Aug"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Aug"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Aug"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Aug"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Aug"] += i.Hawaiian == 1 ? 1:0
        break;

        case "09":
        entryDate["All"]["Sept"] += 1
        entryDate["AmericanIndian"]["Sept"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Sept"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Sept"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Sept"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Sept"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Sept"] += i.Hawaiian == 1 ? 1:0
        break;

        case "10":
        entryDate["All"]["Oct"] += 1
        entryDate["AmericanIndian"]["Oct"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Oct"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Oct"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Oct"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Oct"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Oct"] += i.Hawaiian == 1 ? 1:0
        break;

        case "11":
        entryDate["All"]["Nov"] += 1
        entryDate["AmericanIndian"]["Nov"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Nov"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Nov"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Nov"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Nov"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Nov"] += i.Hawaiian == 1 ? 1:0
        break;

        case "12":
        entryDate["All"]["Dec"] += 1
        entryDate["AmericanIndian"]["Dec"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["Dec"] += i.Asian == 1 ? 1:0
        entryDate["White"]["Dec"] +=i.White == 1 ? 1:0
        entryDate["Black"]["Dec"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["Dec"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["Dec"] += i.Hawaiian == 1 ? 1:0
        break;
        }
      
    })
    
    //console.log(entryDate.AmericanIndian)

    let newEntryDate = {}
    for(let i in entryDate){
        newEntryDate[i]=[]
        //console.log(typeof entryDate[i])
        for(let j of Object.keys(entryDate[i]))
        {
            //console.log(j, entryDate[i][j])
            newEntryDate[i].push({"Month" : j,"Count" : entryDate[i][j]})
        }
    }
    //console.log(newEntryDate)
    //console.log(newEntryDate.AmericanIndian)


    data2.map(i=>{
        switch(i.exitMonth){
        case "01":
        exitDate["All"]["Jan"] += 1
        exitDate["AmericanIndian"]["Jan"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Jan"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Jan"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Jan"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Jan"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Jan"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "02":
        exitDate["All"]["Feb"] += 1
        exitDate["AmericanIndian"]["Feb"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Feb"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Feb"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Feb"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Feb"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Feb"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "03":
        exitDate["All"]["Mar"] += 1
        exitDate["AmericanIndian"]["Mar"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Mar"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Mar"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Mar"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Mar"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Mar"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "04":
        exitDate["All"]["Apr"] += 1
        exitDate["AmericanIndian"]["Apr"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Apr"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Apr"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Apr"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Apr"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Apr"] += i.Hawaiian == 1 ? 1:0
        break;
        
        
        case "05":
        exitDate["All"]["May"] += 1
        exitDate["AmericanIndian"]["May"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["May"] += i.Asian == 1 ? 1:0
        exitDate["White"]["May"] +=i.White == 1 ? 1:0
        exitDate["Black"]["May"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["May"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["May"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "06":
        exitDate["All"]["Jun"] += 1
        exitDate["AmericanIndian"]["Jun"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Jun"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Jun"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Jun"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Jun"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Jun"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "07":
        exitDate["All"]["Jul"] += 1
        exitDate["AmericanIndian"]["Jul"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Jul"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Jul"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Jul"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Jul"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Jul"] += i.Hawaiian == 1 ? 1:0
        break;

        case "08":
        exitDate["All"]["Aug"] += 1
        exitDate["AmericanIndian"]["Aug"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Aug"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Aug"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Aug"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Aug"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Aug"] += i.Hawaiian == 1 ? 1:0
        break;

        case "09":
        exitDate["All"]["Sept"] += 1
        exitDate["AmericanIndian"]["Sept"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Sept"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Sept"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Sept"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Sept"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Sept"] += i.Hawaiian == 1 ? 1:0
        break;

        case "10":
        exitDate["All"]["Oct"] += 1
        exitDate["AmericanIndian"]["Oct"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Oct"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Oct"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Oct"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Oct"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Oct"] += i.Hawaiian == 1 ? 1:0
        break;

        case "11":
        exitDate["All"]["Nov"] += 1
        exitDate["AmericanIndian"]["Nov"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Nov"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Nov"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Nov"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Nov"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Nov"] += i.Hawaiian == 1 ? 1:0
        break;

        case "12":
        exitDate["All"]["Dec"] += 1
        exitDate["AmericanIndian"]["Dec"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["Dec"] += i.Asian == 1 ? 1:0
        exitDate["White"]["Dec"] +=i.White == 1 ? 1:0
        exitDate["Black"]["Dec"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["Dec"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["Dec"] += i.Hawaiian == 1 ? 1:0
        break;
        }
      
    })
    
    //console.log(exitDate.AmericanIndian)

    let newExitDate = {}
    for(let i in exitDate){
        newExitDate[i]=[]
        //console.log(typeof exitDate[i])
        for(let j of Object.keys(exitDate[i]))
        {
            //console.log(j, exitDate[i][j])
            newExitDate[i].push({"Month" : j,"Count" : exitDate[i][j]})
        }
    }
    //console.log(newExitDate.AmericanIndian)


    let circle1 = d3.select("#circle1")

    circle1.append("circle")
            .attr("id", "circleE")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.All);
                lineChart1(newExitDate.All);
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleH").attr('fill','#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle2 = d3.select("#circle2")

    circle2.append("circle")
            .attr("id", "circleF")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.AmericanIndian);
                lineChart1(newExitDate.AmericanIndian);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleH").attr('fill','#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle3 = d3.select("#circle3")

    circle3.append("circle")
            .attr("id", "circleG")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.Asian);
                lineChart1(newExitDate.Asian);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleH").attr('fill','#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle4 = d3.select("#circle4")

    circle4.append("circle")
            .attr("id", "circleH")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.Black);
                lineChart1(newExitDate.Black);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle5 = d3.select("#circle5")

    circle5.append("circle")
            .attr("id", "circleH")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.Hawaiian);
                lineChart1(newExitDate.Hawaiian);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle6 = d3.select("#circle6")

    circle6.append("circle")
            .attr("id", "circleI")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.White);
                lineChart1(newExitDate.White);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleH").attr('fill', '#2C3333');
                d3.selectAll("#circleJ").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });

    let circle7 = d3.select("#circle7")

    circle7.append("circle")
            .attr("id", "circleJ")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#2C3333')
            .on("click",function(){
                lineChart(newEntryDate.Hispanic);
                lineChart1(newExitDate.Hispanic);
                d3.selectAll("#circleE").attr('fill','#2C3333');
                d3.selectAll("#circleF").attr('fill','#2C3333');
                d3.selectAll("#circleG").attr('fill','#2C3333');
                d3.selectAll("#circleH").attr('fill', '#2C3333');
                d3.selectAll("#circleI").attr('fill', '#2C3333');
                d3.select(this).attr('fill', '#fff');
            });


let svg_text = d3.select("#viz_line1");
  svg_text.append("text")
          .text("Select an ethnicity to get details")
          .attr("x", 150)
          .attr("y",200)
          .style("font","25px times");

};

parseData1();


lineChart = function(data){
    let month = []
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    for(let i=0;i<12;i++)
    {
        month.push(data[i].Month)
        if(max<data[i].Count)
        {
            max = data[i].Count
        }
        if(min>data[i].Count)
        {
            min = data[i].Count
        }
    }

    var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 730 
    height = 350 

    // append the svg object to the body of the page
    var svg_line = d3.select("#viz_line1")

    d3.selectAll("#viz_line1> *").remove();

    // Initialise a X axis:
    let x = d3.scaleBand()
    .padding(1)
    .range([margin.left, width - margin.right])
    .domain(month)

    svg_line.append('g').call(d3.axisBottom(x)).attr('transform', `translate(0,${height - margin.bottom})`)

    // Add Y axis
    let y = d3.scaleLinear()
      .domain([min-Math.round(10/100 * min),max+Math.round(10/100 * max)])
      .range([ height - margin.bottom, margin.top ]);

    svg_line.append('g').call(d3.axisLeft(y)).attr('transform', `translate(${margin.left},0)`)

    svg_line.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x", -145)
            .attr("y", 5)
            .attr("transform", "rotate(-90)")
            .text("Count");

    // Add the line
    svg_line.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#bc2a66")
      .attr("stroke-width", 2.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Month) })
        .y(function(d) { return y(d.Count) })
        )

    svg_line.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(dd) {return x(dd.Month)})
        .attr("cy", function(dd) {return y(dd.Count)})
        .attr("r", 5)
        .attr("fill","#2C3333");

    svg_line.append("text")
            .text("Entry Distribution")
            .attr("x", 550)
            .attr("y", 30)
            .style("font","20px times");

    svg_line.append("text")
            .text("by Ethnicity")
            .attr("x", 565)
            .attr("y", 55)
            .style("font","20px times");

    svg_line.append("line")
         .attr("x1", 0)
         .attr("y1", 360)
         .attr("x2", 720)
         .attr("y2", 360)
         .attr("stroke","black")
         .attr("stroke-width","2");

    console.log(data)
};

lineChart1 = function(data){

    let month = []
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    for(let i=0;i<12;i++)
    {
        month.push(data[i].Month)
        if(max<data[i].Count)
        {
            max = data[i].Count
        }
        if(min>data[i].Count)
        {
            min = data[i].Count
        }
    }
    //d3.select("#my_dataviz > *").remove();

    var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 730 
    height = 320 

    // append the svg object to the body of the page
    var svg_line1 = d3.select("#viz_line2")

    d3.selectAll("#viz_line2 > *").remove();

    // Initialise a X axis:
    let x = d3.scaleBand()
    .padding(1)
    .range([margin.left, width - margin.right])
    .domain(month)

    svg_line1.append('g').call(d3.axisBottom(x)).attr('transform', `translate(0,${height - margin.bottom})`)

    // Add Y axis
    let y = d3.scaleLinear()
      .domain([min-Math.round(10/100 * min),max+Math.round(10/100 * max)])
      .range([ height - margin.bottom, margin.top ]);

    svg_line1.append('g').call(d3.axisLeft(y)).attr('transform', `translate(${margin.left},0)`)

    svg_line1.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x", -145)
            .attr("y", 5)
            .attr("transform", "rotate(-90)")
            .text("Count");

    // Add the line
    svg_line1.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#bc2a66")
      .attr("stroke-width", 2.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Month) })
        .y(function(d) { return y(d.Count) })
        )

    svg_line1.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(dd) {return x(dd.Month)})
    .attr("cy", function(dd) {return y(dd.Count)})
    .attr("r", 5)
    .attr("fill","#2C3333");

    svg_line1.append("text")
            .text("Exit Distribution")
            .attr("x", 550)
            .attr("y", 30)
            .style("font","20px times");

    svg_line1.append("text")
            .text("by Ethnicity")
            .attr("x", 565)
            .attr("y", 55)
            .style("font","20px times");

    console.log(data)
};