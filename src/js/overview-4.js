parseData1 = async () => {

    let entryDate = {"All": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "AmericanIndian": {"Jan":0,"Feb":0,"Mar":0,"Apr":0,"May":0,"Jun":0,"Jul":0,"Aug":0,"Sept":0,"Oct":0,"Nov":0,"Dec":0},
                  "Asian": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Black": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Hawaiian": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "White":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Hispanic":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
                    };

    let exitDate = {"All": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "AmericanIndian": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Asian": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Black": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Hawaiian": {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "White":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},
                  "Hispanic":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
                    };
    
    let raw1 = await d3.csv("Data/final_data.csv");

    //let parseDate = d3.timeParse("%Y-%m-%d");

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
        entryDate["All"]["1"] += 1 
        entryDate["AmericanIndian"]["Jan"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["1"] += i.Asian == 1 ? 1:0
        entryDate["White"]["1"] +=i.White == 1 ? 1:0
        entryDate["Black"]["1"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["1"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["1"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "02":
        entryDate["All"]["2"] += 1
        entryDate["AmericanIndian"]["Feb"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["2"] += i.Asian == 1 ? 1:0
        entryDate["White"]["2"] +=i.White == 1 ? 1:0
        entryDate["Black"]["2"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["2"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["2"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "03":
        entryDate["All"]["3"] += 1
        entryDate["AmericanIndian"]["Mar"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["3"] += i.Asian == 1 ? 1:0
        entryDate["White"]["3"] +=i.White == 1 ? 1:0
        entryDate["Black"]["3"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["3"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["3"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "04":
        entryDate["All"]["4"] += 1
        entryDate["AmericanIndian"]["Apr"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["4"] += i.Asian == 1 ? 1:0
        entryDate["White"]["4"] +=i.White == 1 ? 1:0
        entryDate["Black"]["4"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["4"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["4"] += i.Hawaiian == 1 ? 1:0
        break;
        
        
        case "05":
        entryDate["All"]["5"] += 1
        entryDate["AmericanIndian"]["May"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["5"] += i.Asian == 1 ? 1:0
        entryDate["White"]["5"] +=i.White == 1 ? 1:0
        entryDate["Black"]["5"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["5"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["5"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "06":
        entryDate["All"]["6"] += 1
        entryDate["AmericanIndian"]["Jun"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["6"] += i.Asian == 1 ? 1:0
        entryDate["White"]["6"] +=i.White == 1 ? 1:0
        entryDate["Black"]["6"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["6"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["6"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "07":
        entryDate["All"]["7"] += 1
        entryDate["AmericanIndian"]["Jul"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["7"] += i.Asian == 1 ? 1:0
        entryDate["White"]["7"] +=i.White == 1 ? 1:0
        entryDate["Black"]["7"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["7"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["7"] += i.Hawaiian == 1 ? 1:0
        break;

        case "08":
        entryDate["All"]["8"] += 1
        entryDate["AmericanIndian"]["Aug"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["8"] += i.Asian == 1 ? 1:0
        entryDate["White"]["8"] +=i.White == 1 ? 1:0
        entryDate["Black"]["8"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["8"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["8"] += i.Hawaiian == 1 ? 1:0
        break;

        case "09":
        entryDate["All"]["9"] += 1
        entryDate["AmericanIndian"]["Sept"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["9"] += i.Asian == 1 ? 1:0
        entryDate["White"]["9"] +=i.White == 1 ? 1:0
        entryDate["Black"]["9"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["9"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["9"] += i.Hawaiian == 1 ? 1:0
        break;

        case "10":
        entryDate["All"]["10"] += 1
        entryDate["AmericanIndian"]["Oct"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["10"] += i.Asian == 1 ? 1:0
        entryDate["White"]["10"] +=i.White == 1 ? 1:0
        entryDate["Black"]["10"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["10"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["10"] += i.Hawaiian == 1 ? 1:0
        break;

        case "11":
        entryDate["All"]["11"] += 1
        entryDate["AmericanIndian"]["Nov"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["11"] += i.Asian == 1 ? 1:0
        entryDate["White"]["11"] +=i.White == 1 ? 1:0
        entryDate["Black"]["11"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["11"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["11"] += i.Hawaiian == 1 ? 1:0
        break;

        case "12":
        entryDate["All"]["12"] += 1
        entryDate["AmericanIndian"]["Dec"] += i.AmericanIndian == 1 ? 1:0
        entryDate["Asian"]["12"] += i.Asian == 1 ? 1:0
        entryDate["White"]["12"] +=i.White == 1 ? 1:0
        entryDate["Black"]["12"] += i.Black == 1 ? 1:0
        entryDate["Hispanic"]["12"] += i.Hispanic == 1 ? 1:0
        entryDate["Hawaiian"]["12"] += i.Hawaiian == 1 ? 1:0
        break;
        }
      
    })
    
    console.log(entryDate.AmericanIndian)

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
    console.log(newEntryDate.AmericanIndian)


    data2.map(i=>{
        switch(i.exitMonth){
        case "01":
        exitDate["All"]["1"] += 1
        exitDate["AmericanIndian"]["1"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["1"] += i.Asian == 1 ? 1:0
        exitDate["White"]["1"] +=i.White == 1 ? 1:0
        exitDate["Black"]["1"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["1"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["1"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "02":
        exitDate["All"]["2"] += 1
        exitDate["AmericanIndian"]["2"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["2"] += i.Asian == 1 ? 1:0
        exitDate["White"]["2"] +=i.White == 1 ? 1:0
        exitDate["Black"]["2"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["2"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["2"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "03":
        exitDate["All"]["3"] += 1
        exitDate["AmericanIndian"]["3"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["3"] += i.Asian == 1 ? 1:0
        exitDate["White"]["3"] +=i.White == 1 ? 1:0
        exitDate["Black"]["3"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["3"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["3"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "04":
        exitDate["All"]["4"] += 1
        exitDate["AmericanIndian"]["4"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["4"] += i.Asian == 1 ? 1:0
        exitDate["White"]["4"] +=i.White == 1 ? 1:0
        exitDate["Black"]["4"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["4"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["4"] += i.Hawaiian == 1 ? 1:0
        break;
        
        
        case "05":
        exitDate["All"]["5"] += 1
        exitDate["AmericanIndian"]["5"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["5"] += i.Asian == 1 ? 1:0
        exitDate["White"]["5"] +=i.White == 1 ? 1:0
        exitDate["Black"]["5"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["5"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["5"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "06":
        exitDate["All"]["6"] += 1
        exitDate["AmericanIndian"]["6"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["6"] += i.Asian == 1 ? 1:0
        exitDate["White"]["6"] +=i.White == 1 ? 1:0
        exitDate["Black"]["6"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["6"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["6"] += i.Hawaiian == 1 ? 1:0
        break;
        
        case "07":
        exitDate["All"]["7"] += 1
        exitDate["AmericanIndian"]["7"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["7"] += i.Asian == 1 ? 1:0
        exitDate["White"]["7"] +=i.White == 1 ? 1:0
        exitDate["Black"]["7"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["7"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["7"] += i.Hawaiian == 1 ? 1:0
        break;

        case "08":
        exitDate["All"]["8"] += 1
        exitDate["AmericanIndian"]["8"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["8"] += i.Asian == 1 ? 1:0
        exitDate["White"]["8"] +=i.White == 1 ? 1:0
        exitDate["Black"]["8"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["8"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["8"] += i.Hawaiian == 1 ? 1:0
        break;

        case "09":
        exitDate["All"]["9"] += 1
        exitDate["AmericanIndian"]["9"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["9"] += i.Asian == 1 ? 1:0
        exitDate["White"]["9"] +=i.White == 1 ? 1:0
        exitDate["Black"]["9"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["9"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["9"] += i.Hawaiian == 1 ? 1:0
        break;

        case "10":
        exitDate["All"]["10"] += 1
        exitDate["AmericanIndian"]["10"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["10"] += i.Asian == 1 ? 1:0
        exitDate["White"]["10"] +=i.White == 1 ? 1:0
        exitDate["Black"]["10"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["10"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["10"] += i.Hawaiian == 1 ? 1:0
        break;

        case "11":
        exitDate["All"]["11"] += 1
        exitDate["AmericanIndian"]["11"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["11"] += i.Asian == 1 ? 1:0
        exitDate["White"]["11"] +=i.White == 1 ? 1:0
        exitDate["Black"]["11"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["11"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["11"] += i.Hawaiian == 1 ? 1:0
        break;

        case "12":
        exitDate["All"]["12"] += 1
        exitDate["AmericanIndian"]["12"] += i.AmericanIndian == 1 ? 1:0
        exitDate["Asian"]["12"] += i.Asian == 1 ? 1:0
        exitDate["White"]["12"] +=i.White == 1 ? 1:0
        exitDate["Black"]["12"] += i.Black == 1 ? 1:0
        exitDate["Hispanic"]["12"] += i.Hispanic == 1 ? 1:0
        exitDate["Hawaiian"]["12"] += i.Hawaiian == 1 ? 1:0
        break;
        }
      
    })
    //console.log(exitDate)

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
    //console.log(newExitDate.All)


    let circle1 = d3.select("#circle1")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle1.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.All);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle2 = d3.select("#circle2")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle2.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.AmericanIndian);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle3 = d3.select("#circle3")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle3.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.Asian);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle4 = d3.select("#circle4")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle4.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.Black);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle5 = d3.select("#circle5")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle5.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.Hawaiian);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle6 = d3.select("#circle6")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle6.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.White);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    let circle7 = d3.select("#circle7")
                    .append("svg")
                    .attr("width",100)
                    .attr("heigth",100)

    circle7.append("circle")
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .on("click",function(){
                //d3.select("#my_dataviz > *").remove();
                lineChart(newEntryDate.Hispanic);
                d3.selectAll("circle").attr('fill', '#69a3b2');
                d3.select(this).attr('fill', '#fff');
            });

    //lineChart(newEntryDate.All)
   

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
    //d3.select("#my_dataviz > *").remove();

    var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 730 
    height = 360 

    // append the svg object to the body of the page
    var svg_line = d3.select("#viz_line")
                /*//.append("svg")
                .attr("width", width )
                .attr("height", height)
                .append("g")
                .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");*/


    d3.selectAll("#viz_line > *").remove();

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
        .attr("fill","#232323e8");

    console.log(data)
};