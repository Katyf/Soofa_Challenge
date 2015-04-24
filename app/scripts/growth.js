var yr06 = 0, lyr06 = 0,
    yr07 = 0, lyr07 = 0,
    yr08 = 0, lyr08 = 0,
    yr09 = 0, lyr09 = 0,
    yr10 = 0, lyr10 = 0,
    yr11 = 0, lyr11 = 0,
    yr12 = 0, lyr12 = 0,
    yr13 = 0, lyr13 = 0,
    yr14 = 0, lyr14 = 0,
    yr15 = 0, lyr15 = 0;

d3.json('https://data.cityofboston.gov/resource/gb6y-34cq.json', function(data){
    console.log('moop');

    console.log(data[0].licenseadddttm);
    data.forEach(function(d) {
        d.year = d.licenseadddttm.substring(0, 4);
        if (d.year === '2006') {
            yr06 = yr06 +1;
        } else if (d.year === '2007'){
            yr07 = yr07 +1;
        }else if (d.year === '2008'){
            yr08 = yr08 +1;
        }else if (d.year === '2009'){
            yr09 = yr09 +1;
        }else if (d.year === '2010'){
            yr10 = yr10 +1;
        }else if (d.year === '2011'){
            yr11 = yr11 +1;
        }else if (d.year === '2012'){
            yr12 = yr12 +1;
        }else if (d.year === '2013'){
            yr13 = yr13 +1;
        }else if (d.year === '2014'){
            yr14 = yr14 +1;
        }else if (d.year === '2015'){
            yr15 = yr15 +1;
        }
    });

var bardata = [yr06,yr07,yr08,yr09,yr10,yr11,yr12,yr13,yr14,yr15];

var margin = { top: 30, right:50 , bottom:40, left:50 };

var height = 400 -margin.top - margin.bottom,
    width = 700 -margin.left - margin.right;
var colors = d3.scale.linear()
.domain([0, bardata.length*0.33, bardata.length*0.66, bardata.length])
.range(['#C61C6F', '#268BD2']);

var yScale = d3.scale.linear()
        .domain([0, 1056])
        .range([0, height]);

var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length))
        .rangeBands([0, width], 0.6);

var toolTip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', 0);

var myChart = d3.select('#change').append('svg')
    .attr('class', 'changesvg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate('+ margin.left+','+ margin.top +')')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand())
        .attr('height', 0)
        .attr('x', function(d,i) {
            return xScale(i);
        })
        .attr('y', height)
    .on('mouseover', function(d){

        toolTip.transition()
            .style('opacity', 0.9);
        toolTip.html(d)
            .style('left', (d3.event.pageX-30) + 'px')
            .style('top', (d3.event.pageY-30) + 'px');

        tempColor = this.style.fill;
        d3.select(this)
            .style('opacity', 0.5)
            .style('fill', 'yellow');
    })
    .on('mouseout', function(d){
        d3.select(this)
            .style('opacity', 1)
            .style('fill', tempColor);
    });

myChart.transition()
    .attr('height', function(d){
        return yScale(d);
    })
    .attr('y', function(d){
        return height - yScale(d);
    })
    .delay(function(d,i){
        return i * 10;
    })
    .duration(1000)
    .ease('elastic');

var vGuideScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([height,0]);

var vAxis = d3.svg.axis()
    .scale(vGuideScale)
    .orient('left')
    .ticks(10);

var vGuide = d3.select('.changesvg').append('g');
    vAxis(vGuide);

    vGuide.attr('transform', 'translate('+margin.left+','+margin.top+')');
    vGuide.selectAll('path')
        .style({fill: 'none', stroke: '#000'});
    vGuide.selectAll('line')
        .style({ stroke: '#000'});

var hAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .tickValues(xScale.domain().filter(function(d,i){
        return !(i%(bardata.length/10));
    }));
var hGuide = d3.select('.changesvg').append('g');
    hAxis(hGuide);
    hGuide.attr('transform', 'translate('+margin.left+','+ (height + margin.top) +')');
    hGuide.selectAll('path')
        .style({fill: 'none', stroke: '#000'});
    hGuide.selectAll('line')
        .style({ stroke: '#000'});


});

d3.json('https://data.cityofboston.gov/resource/hda6-fnsh.json', function(data){
    console.log('doop');

    console.log(data[0].issdttm);
    data.forEach(function(d) {
        d.year = d.issdttm.substring(0, 4);
        if (d.year === '2006') {
            yr06 = yr06 +1;
        } else if (d.year === '2007'){
            yr07 = yr07 +1;
        }else if (d.year === '2008'){
            yr08 = yr08 +1;
        }else if (d.year === '2009'){
            yr09 = yr09 +1;
        }else if (d.year === '2010'){
            yr10 = yr10 +1;
        }else if (d.year === '2011'){
            yr11 = yr11 +1;
        }else if (d.year === '2012'){
            yr12 = yr12 +1;
        }else if (d.year === '2013'){
            yr13 = yr13 +1;
        }else if (d.year === '2014'){
            yr14 = yr14 +1;
        }else if (d.year === '2015'){
            yr15 = yr15 +1;
        }
    });
    var bardata = [yr06,yr07,yr08,yr09,yr10,yr11,yr12,yr13,yr14,yr15];

var margin = { top: 30, right:30 , bottom:40, left:70 };

var height = 400 -margin.top - margin.bottom,
    width = 700 -margin.left - margin.right;
var colors = d3.scale.linear()
.domain([0, bardata.length*0.33, bardata.length*0.66, bardata.length])
.range(['#85992C']);

var yScale = d3.scale.linear()
        .domain([0, d3.max(bardata)])
        .range([0, height]);

var xScale = d3.scale.ordinal()
        .domain(d3.range(0, bardata.length))
        .rangeBands([0, width], 0.6);

var toolTip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', 0);

var myChart = d3.select('.changesvg')
    .append('g')
    .attr('transform', 'translate('+ 73 +','+ margin.top +')')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', function(d,i) {
            return colors(i);
        })
        .attr('width', xScale.rangeBand())
        .attr('height', 0)
        .attr('x', function(d,i) {
            return xScale(i);
        })
        .attr('y', height)
    .on('mouseover', function(d){

        toolTip.transition()
            .style('opacity', 0.9);
        toolTip.html(d)
            .style('left', (d3.event.pageX-30) + 'px')
            .style('top', (d3.event.pageY-30) + 'px');

        tempColor = this.style.fill;
        d3.select(this)
            .style('opacity', 0.5)
            .style('fill', 'red');
    })
    .on('mouseout', function(d){
        d3.select(this)
            .style('opacity', 1)
            .style('fill', tempColor);
    });

myChart.transition()
    .attr('height', function(d){
        return yScale(d);
    })
    .attr('y', function(d){
        return height - yScale(d);
    })
    .delay(function(d,i){
        return i * 10;
    })
    .duration(1000)
    .ease('elastic');

});


