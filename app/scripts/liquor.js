/*global d3:false*/
var parseDate = d3.time.format('%Y-%m-%d %H:%M:%S').parse;

d3.json('https://data.cityofboston.gov/resource/hda6-fnsh.json', function(data){
    console.log('drinks yo');

    console.log(data[0].issdttm);
    data.forEach(function(d) {
        d.issdttm = d.issdttm.replace('T', ' ');
        d.date = parseDate(d.issdttm);
    });

var margin = {top: 150, right: 20, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, 2]);

var tooltip = d3.select('body').append('div')
            .style('position', 'absolute')
            .style('padding', '0 10px')
            .style('background', 'white')
            .style('opacity', 0);

var svg = d3.select('svg')
    .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform',
              'translate(' + margin.left + ',' + margin.top + ')');

    svg.selectAll('dot')
        .data(data)
      .enter().append('circle')
        .attr('r', 3.5)
        .attr('cx', function(d) { return x(d.date); })
        .attr('cy', function(d) { return y(2); })
        .attr('fill', '#FF5255')

        .on('mouseover', function(d) {
            tooltip.transition()
                .style('opacity', 0.9);

            tooltip.html(d.businessname)
                .attr('class','bye')
                .style('left', (d3.event.pageX - 35) + 'px')
                .style('top',  (d3.event.pageY - 30) + 'px');

            tempColor = this.style.fill;
            d3.select(this)
                .style('opacity', 0.5)
                .style('fill', 'white');
        })

        .on('mouseout', function(d) {
            d3.select(this)
                .style('opacity', 1)
                .style('fill', tempColor);
            d3.select('.bye')
                .style('opacity', 0);
        });

});
