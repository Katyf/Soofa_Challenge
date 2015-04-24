/*global d3:false*/
var allston=0,boston=0,brighton=0,charlestown=0,chestnuthill=0,dorchester=0,eastboston=0,fenway=0,financialdistrict=0,hydepark=0,jamaicaplain=0,mattapan=0,missionhill=0,roslindale=0,roxbury=0,southboston=0,westroxbury=0;

d3.json('https://data.cityofboston.gov/resource/hda6-fnsh.json', function(data){
    console.log('moop');
    data.forEach(function(d) {
        d.city = d.city;
        if (d.city === 'Allston') {
            allston = allston +1;
        } else if (d.city === 'Boston'){
            boston = boston +1;
        }else if (d.city === 'Brighton'){
            brighton = brighton +1;
        }else if (d.city === 'Charlestown'){
            charlestown = charlestown +1;
        }else if (d.city === 'Chestnut Hill'){
            chestnuthill = chestnuthill +1;
        }else if (d.city === 'Dorchester'){
            dorchester = dorchester +1;
        }else if (d.city === 'East Boston'){
            eastboston = eastboston +1;
        }else if (d.city === 'Fenway'){
            fenway = fenway +1;
        }else if (d.city === 'Financial District'){
            financialdistrict = financialdistrict +1;
        }else if (d.city === 'Hyde Park'){
            hydepark = hydepark +1;
        }else if (d.city === 'Jamaica Plain'){
            jamaicaplain = jamaicaplain +1;
        }else if (d.city === 'Mattapan'){
            mattapan = mattapan +1;
        }else if (d.city === 'Mission Hill'){
            missionhill = missionhill +1;
        }else if (d.city === 'Roslindale'){
            roslindale = roslindale +1;
        }else if (d.city === 'Roxbury'){
            roxbury = roxbury +1;
        }else if (d.city === 'South Boston'){
            southboston = southboston +1;
        }else if (d.city === 'West Roxbury'){
            westroxbury = westroxbury +1;
        }
    });

    var w = 700,
    h = 500,
    cw = 5;

    var nodes = [
          { name: 'Boston', num: boston},
          { name: 'Allston', num: allston},
          { name: 'Brighton', num: brighton},
          { name: 'Charlestown', num: charlestown},
          { name: 'Chestnut Hill', num: chestnuthill},
          { name: 'Dorchester', num: dorchester},
          { name: 'East Boston', num: eastboston},
          { name: 'Fenway', num: fenway},
          { name: 'Financial District', num: financialdistrict},
          { name: 'Hyde Park', num: hydepark},
          { name: 'Jamaica Plain', num: jamaicaplain},
          { name: 'Mattapan', num: mattapan},
          { name: 'Mission Hill', num: missionhill},
          { name: 'Roslindale', num: roslindale},
          { name: 'Roxbury', num: roxbury},
          { name: 'South Boston', num: southboston},
          { name: 'West Roxbury', num: westroxbury}
    ];

    var links = [];

    for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].target !== undefined) {
                for (var x = 0; x < nodes[i].target.length; x ++) {
                      links.push({
                            source: nodes[i],
                            target: nodes[nodes[i].target[x]]
                      });
                }
          }
    }

    var myChart = d3.select('#liquormap').append('svg')
          .attr('width', w)
          .attr('height', h);

    var force = d3.layout.force()
          .nodes(nodes)
          .links([])
          .gravity(0.09)
          .charge(-200)
          .size([w,h]);

    var link = myChart.selectAll('line')
          .data(links).enter().append('line')
          .attr('stroke', 'gray');

    var node = myChart.selectAll('circle')
          .data(nodes).enter()
          .append('g')
          .call(force.drag);

    node.append('circle')
          .attr('cx', function(d){ return d.x; })
          .attr('cy', function(d){ return d.y; })
          .attr('r', function(d,i){
            return (d.num)/3;
          })
          .attr('fill', function(d,i){
                if (i>0){ return 'yellow'; }
                else { return 'green'; }
          });

    node.append('text')
          .text(function(d){
            if (d.num>0){return d.name; }
          })
          .attr('fill', function(d,i){
                if (i>0){ return 'gray'; }
                else { return 'white'; }
          })
          .attr('x', function(d,i){
                if (i>0){ return cw + 4; }
                else { return cw -15; }
          }).attr('y', function(d,i){
                if (i>0){ return cw; }
                else { return 8; }
          })
          .attr('text-anchor', function(d,i){
                if (i>0){return 'beginning';}
                else{ return 'end';}
          })
          .attr('font-size', function(d,i){
                if (i>0){return '1em';}
                else{ return '1.8em';}
          });

    force.on('tick', function(e){
          node.attr('transform', function(d,i){
                return 'translate('+ d.x +',' + d.y + ')';
          });
          link
                .attr('x1', function(d){ return d.source.x; })
                .attr('y1', function(d){ return d.source.y; })
                .attr('x2', function(d){ return d.target.x; })
                .attr('y2', function(d){ return d.target.y; });
    });

    force.start();
});
