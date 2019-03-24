
window.onload = function() {
    makeChart();
}


function makeChart() {

    // find svg
    var svg = d3.select("svg");

    // set margins of elements
    var margin = {
        top: 20,
        right: 20,
        bottom: 50,
        left: 30
    };

    // determine size of drawable element within svg
    var width = +svg.attr("width") - margin.left - margin.right;
    var height = +svg.attr("height") - margin.top - margin.bottom;

    // g element that we will append the rest to within the svg
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1);

    var x2 = d3.scaleLinear()
        .range([0, width])

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    d3.csv("testbar.csv").then(function (data) {
        x.domain(data.map(function (d) {
                return d.TS;
            }));

        x2.domain([0, d3.max(data, function(d) { 
            return d.TS 
        })]);
            
        // y axis ranging from first to max line number (might have to be reversed?)
        y.domain([d3.max(data, function (d) {
                    return Number(d.LN);
                }), 0]);

        g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x2).ticks(20));

        // rotate x axis text
        g.selectAll(".x text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start");

        g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Line");

        // divide height by amount of lines so bar height fits?
        // console.log(data);
 
        var barHeight = (+svg.attr("height") - (margin.top + margin.bottom)) / d3.max(data, function (d) {
            return Number(d.LN);
        });

        // console.log(barHeight);

        g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.TS);
        })

        // correct for height of bars when positioning since we reversed the order of the y axis
        .attr("y", function (d) {
            return y(Number(d.LN)) - barHeight;
        })

        // width is determined by the duration of the fixation for that point in time
        .attr("width", function(d) {
            return d.DUR / 100;
        })

        // how far do the bars have to reach
        // fixed height but needs to be adjusted for height of chart?
        .attr("height", barHeight)
    });


}