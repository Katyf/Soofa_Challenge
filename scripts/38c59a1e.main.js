var parseDate=d3.time.format("%Y-%m-%d %H:%M:%S").parse;d3.json("https://data.cityofboston.gov/resource/gb6y-34cq.json",function(a){console.log("yoyo"),console.log(a[0].licenseadddttm),a.forEach(function(a){a.licenseadddttm=a.licenseadddttm.replace("T"," "),a.date=parseDate(a.licenseadddttm)});var b={top:100,right:20,bottom:30,left:50},c=900-b.left-b.right,d=270-b.top-b.bottom,e=d3.time.scale().range([0,c]),f=d3.scale.linear().range([d,0]),g=d3.svg.axis().scale(e).orient("bottom").ticks(5),h=d3.select("#timeline").append("svg").attr("width",c+b.left+b.right).attr("height",d+b.top+b.bottom).append("g").attr("transform","translate("+b.left+","+b.top+")");e.domain(d3.extent(a,function(a){return a.date})),f.domain([0,1]),h.selectAll("dot").data(a).enter().append("circle").attr("r",3.5).attr("cx",function(a){return e(a.date)}).attr("cy",function(a){return f(1)}).attr("fill","blue"),h.append("g").attr("class","x axis").attr("transform","translate(0,"+d+")").call(g)});var parseDate=d3.time.format("%Y-%m-%d %H:%M:%S").parse;d3.json("https://data.cityofboston.gov/resource/hda6-fnsh.json",function(a){console.log("drinks yo"),console.log(a[0].issdttm),a.forEach(function(a){a.issdttm=a.issdttm.replace("T"," "),a.date=parseDate(a.issdttm)});var b={top:150,right:20,bottom:30,left:50},c=900-b.left-b.right,d=270-b.top-b.bottom,e=d3.time.scale().range([0,c]),f=d3.scale.linear().range([d,0]);e.domain(d3.extent(a,function(a){return a.date})),f.domain([0,2]);var g=d3.select("svg").append("svg").attr("width",c+b.left+b.right).attr("height",d+b.top+b.bottom).append("g").attr("transform","translate("+b.left+","+b.top+")");g.selectAll("dot").data(a).enter().append("circle").attr("r",3.5).attr("cx",function(a){return e(a.date)}).attr("cy",function(a){return f(2)}).attr("fill","red")});var yr06=0,lyr06=0,yr07=0,lyr07=0,yr08=0,lyr08=0,yr09=0,lyr09=0,yr10=0,lyr10=0,yr11=0,lyr11=0,yr12=0,lyr12=0,yr13=0,lyr13=0,yr14=0,lyr14=0,yr15=0,lyr15=0;d3.json("https://data.cityofboston.gov/resource/gb6y-34cq.json",function(a){console.log("moop"),console.log(a[0].licenseadddttm),a.forEach(function(a){a.year=a.licenseadddttm.substring(0,4),"2006"===a.year?yr06+=1:"2007"===a.year?yr07+=1:"2008"===a.year?yr08+=1:"2009"===a.year?yr09+=1:"2010"===a.year?yr10+=1:"2011"===a.year?yr11+=1:"2012"===a.year?yr12+=1:"2013"===a.year?yr13+=1:"2014"===a.year?yr14+=1:"2015"===a.year&&(yr15+=1)});var b=[yr06,yr07,yr08,yr09,yr10,yr11,yr12,yr13,yr14,yr15],c={top:30,right:50,bottom:40,left:50},d=400-c.top-c.bottom,e=700-c.left-c.right,f=d3.scale.linear().domain([0,.33*b.length,.66*b.length,b.length]).range(["#C61C6F","#268BD2"]),g=d3.scale.linear().domain([0,1056]).range([0,d]),h=d3.scale.ordinal().domain(d3.range(0,b.length)).rangeBands([0,e],.6),i=d3.select("body").append("div").style("position","absolute").style("padding","0 10px").style("background","white").style("opacity",0),j=d3.select("#change").append("svg").attr("class","changesvg").attr("width",e+c.left+c.right).attr("height",d+c.top+c.bottom).append("g").attr("transform","translate("+c.left+","+c.top+")").selectAll("rect").data(b).enter().append("rect").style("fill",function(a,b){return f(b)}).attr("width",h.rangeBand()).attr("height",0).attr("x",function(a,b){return h(b)}).attr("y",d).on("mouseover",function(a){i.transition().style("opacity",.9),i.html(a).style("left",d3.event.pageX-30+"px").style("top",d3.event.pageY-30+"px"),tempColor=this.style.fill,d3.select(this).style("opacity",.5).style("fill","yellow")}).on("mouseout",function(a){d3.select(this).style("opacity",1).style("fill",tempColor)});j.transition().attr("height",function(a){return g(a)}).attr("y",function(a){return d-g(a)}).delay(function(a,b){return 10*b}).duration(1e3).ease("elastic");var k=d3.scale.linear().domain([0,d3.max(b)]).range([d,0]),l=d3.svg.axis().scale(k).orient("left").ticks(10),m=d3.select(".changesvg").append("g");l(m),m.attr("transform","translate("+c.left+","+c.top+")"),m.selectAll("path").style({fill:"none",stroke:"#000"}),m.selectAll("line").style({stroke:"#000"});var n=d3.svg.axis().scale(h).orient("bottom").tickValues(h.domain().filter(function(a,c){return!(c%(b.length/10))})),o=d3.select(".changesvg").append("g");n(o),o.attr("transform","translate("+c.left+","+(d+c.top)+")"),o.selectAll("path").style({fill:"none",stroke:"#000"}),o.selectAll("line").style({stroke:"#000"})}),d3.json("https://data.cityofboston.gov/resource/hda6-fnsh.json",function(a){console.log("doop"),console.log(a[0].issdttm),a.forEach(function(a){a.year=a.issdttm.substring(0,4),"2006"===a.year?yr06+=1:"2007"===a.year?yr07+=1:"2008"===a.year?yr08+=1:"2009"===a.year?yr09+=1:"2010"===a.year?yr10+=1:"2011"===a.year?yr11+=1:"2012"===a.year?yr12+=1:"2013"===a.year?yr13+=1:"2014"===a.year?yr14+=1:"2015"===a.year&&(yr15+=1)});var b=[yr06,yr07,yr08,yr09,yr10,yr11,yr12,yr13,yr14,yr15],c={top:30,right:30,bottom:40,left:70},d=400-c.top-c.bottom,e=700-c.left-c.right,f=d3.scale.linear().domain([0,.33*b.length,.66*b.length,b.length]).range(["#85992C"]),g=d3.scale.linear().domain([0,d3.max(b)]).range([0,d]),h=d3.scale.ordinal().domain(d3.range(0,b.length)).rangeBands([0,e],.6),i=d3.select("body").append("div").style("position","absolute").style("padding","0 10px").style("background","white").style("opacity",0),j=d3.select(".changesvg").append("g").attr("transform","translate(73,"+c.top+")").selectAll("rect").data(b).enter().append("rect").style("fill",function(a,b){return f(b)}).attr("width",h.rangeBand()).attr("height",0).attr("x",function(a,b){return h(b)}).attr("y",d).on("mouseover",function(a){i.transition().style("opacity",.9),i.html(a).style("left",d3.event.pageX-30+"px").style("top",d3.event.pageY-30+"px"),tempColor=this.style.fill,d3.select(this).style("opacity",.5).style("fill","red")}).on("mouseout",function(a){d3.select(this).style("opacity",1).style("fill",tempColor)});j.transition().attr("height",function(a){return g(a)}).attr("y",function(a){return d-g(a)}).delay(function(a,b){return 10*b}).duration(1e3).ease("elastic")});var allston=0,boston=0,brighton=0,charlestown=0,chestnuthill=0,dorchester=0,eastboston=0,fenway=0,financialdistrict=0,hydepark=0,jamaicaplain=0,mattapan=0,missionhill=0,roslindale=0,roxbury=0,southboston=0,westroxbury=0;d3.json("https://data.cityofboston.gov/resource/gb6y-34cq.json",function(a){console.log("moop"),a.forEach(function(a){a.city=a.city,"Allston"===a.city?allston+=1:"Boston"===a.city?boston+=1:"Brighton"===a.city?brighton+=1:"Charlestown"===a.city?charlestown+=1:"Chestnut Hill"===a.city?chestnuthill+=1:"Dorchester"===a.city?dorchester+=1:"East Boston"===a.city?eastboston+=1:"Fenway"===a.city?fenway+=1:"Financial District"===a.city?financialdistrict+=1:"Hyde Park"===a.city?hydepark+=1:"Jamaica Plain"===a.city?jamaicaplain+=1:"Mattapan"===a.city?mattapan+=1:"Mission Hill"===a.city?missionhill+=1:"Roslindale"===a.city?roslindale+=1:"Roxbury"===a.city?roxbury+=1:"South Boston"===a.city?southboston+=1:"West Roxbury"===a.city&&(westroxbury+=1)});for(var b=700,c=500,d=5,e=[{name:"Boston",num:boston},{name:"Allston",num:allston},{name:"Brighton",num:brighton},{name:"Charlestown",num:charlestown},{name:"Chestnut Hill",num:chestnuthill},{name:"Dorchester",num:dorchester},{name:"East Boston",num:eastboston},{name:"Fenway",num:fenway},{name:"Financial District",num:financialdistrict},{name:"Hyde Park",num:hydepark},{name:"Jamaica Plain",num:jamaicaplain},{name:"Mattapan",num:mattapan},{name:"Mission Hill",num:missionhill},{name:"Roslindale",num:roslindale},{name:"Roxbury",num:roxbury},{name:"South Boston",num:southboston},{name:"West Roxbury",num:westroxbury}],f=[],g=0;g<e.length;g++)if(void 0!==e[g].target)for(var h=0;h<e[g].target.length;h++)f.push({source:e[g],target:e[e[g].target[h]]});var i=d3.select("#map").append("svg").attr("width",b).attr("height",c),j=d3.layout.force().nodes(e).links([]).gravity(.09).charge(-200).size([b,c]),k=i.selectAll("line").data(f).enter().append("line").attr("stroke","gray"),l=i.selectAll("circle").data(e).enter().append("g").call(j.drag);l.append("circle").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("r",function(a,b){return a.num/3}).attr("fill",function(a,b){return b>0?"blue":"pink"}),l.append("text").text(function(a){return a.num>0?a.name:void 0}).attr("fill",function(a,b){return b>0?"gray":"green"}).attr("x",function(a,b){return b>0?d+4:d-15}).attr("y",function(a,b){return b>0?d:8}).attr("text-anchor",function(a,b){return b>0?"beginning":"end"}).attr("font-size",function(a,b){return b>0?"1em":"1.8em"}),j.on("tick",function(a){l.attr("transform",function(a,b){return"translate("+a.x+","+a.y+")"}),k.attr("x1",function(a){return a.source.x}).attr("y1",function(a){return a.source.y}).attr("x2",function(a){return a.target.x}).attr("y2",function(a){return a.target.y})}),j.start()});var allston=0,boston=0,brighton=0,charlestown=0,chestnuthill=0,dorchester=0,eastboston=0,fenway=0,financialdistrict=0,hydepark=0,jamaicaplain=0,mattapan=0,missionhill=0,roslindale=0,roxbury=0,southboston=0,westroxbury=0;d3.json("https://data.cityofboston.gov/resource/hda6-fnsh.json",function(a){console.log("moop"),a.forEach(function(a){a.city=a.city,"Allston"===a.city?allston+=1:"Boston"===a.city?boston+=1:"Brighton"===a.city?brighton+=1:"Charlestown"===a.city?charlestown+=1:"Chestnut Hill"===a.city?chestnuthill+=1:"Dorchester"===a.city?dorchester+=1:"East Boston"===a.city?eastboston+=1:"Fenway"===a.city?fenway+=1:"Financial District"===a.city?financialdistrict+=1:"Hyde Park"===a.city?hydepark+=1:"Jamaica Plain"===a.city?jamaicaplain+=1:"Mattapan"===a.city?mattapan+=1:"Mission Hill"===a.city?missionhill+=1:"Roslindale"===a.city?roslindale+=1:"Roxbury"===a.city?roxbury+=1:"South Boston"===a.city?southboston+=1:"West Roxbury"===a.city&&(westroxbury+=1)});for(var b=700,c=500,d=5,e=[{name:"Boston",num:boston},{name:"Allston",num:allston},{name:"Brighton",num:brighton},{name:"Charlestown",num:charlestown},{name:"Chestnut Hill",num:chestnuthill},{name:"Dorchester",num:dorchester},{name:"East Boston",num:eastboston},{name:"Fenway",num:fenway},{name:"Financial District",num:financialdistrict},{name:"Hyde Park",num:hydepark},{name:"Jamaica Plain",num:jamaicaplain},{name:"Mattapan",num:mattapan},{name:"Mission Hill",num:missionhill},{name:"Roslindale",num:roslindale},{name:"Roxbury",num:roxbury},{name:"South Boston",num:southboston},{name:"West Roxbury",num:westroxbury}],f=[],g=0;g<e.length;g++)if(void 0!==e[g].target)for(var h=0;h<e[g].target.length;h++)f.push({source:e[g],target:e[e[g].target[h]]});var i=d3.select("#liquormap").append("svg").attr("width",b).attr("height",c),j=d3.layout.force().nodes(e).links([]).gravity(.09).charge(-200).size([b,c]),k=i.selectAll("line").data(f).enter().append("line").attr("stroke","gray"),l=i.selectAll("circle").data(e).enter().append("g").call(j.drag);l.append("circle").attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}).attr("r",function(a,b){return a.num/3}).attr("fill",function(a,b){return b>0?"yellow":"green"}),l.append("text").text(function(a){return a.num>0?a.name:void 0}).attr("fill",function(a,b){return b>0?"gray":"white"}).attr("x",function(a,b){return b>0?d+4:d-15}).attr("y",function(a,b){return b>0?d:8}).attr("text-anchor",function(a,b){return b>0?"beginning":"end"}).attr("font-size",function(a,b){return b>0?"1em":"1.8em"}),j.on("tick",function(a){l.attr("transform",function(a,b){return"translate("+a.x+","+a.y+")"}),k.attr("x1",function(a){return a.source.x}).attr("y1",function(a){return a.source.y}).attr("x2",function(a){return a.target.x}).attr("y2",function(a){return a.target.y})}),j.start()}),$(document).ready(function(){$("#change").hide(),$("#map").hide(),$("#liquormap").hide(),$("#map-btn").on("click",function(){console.log("map click"),$("#timeline").hide(),$("#change").hide(),$("#map").show()}),$("#timeline-btn").on("click",function(){console.log("timeline click"),$("#map").hide(),$("#change").hide(),$("#timeline").show()}),$("#change-btn").on("click",function(){console.log("timeline click"),$("#map").hide(),$("#timeline").hide(),$("#change").show()})});