codeLines = {
    vehicleRegular : [
                        "public class Vehicle {", 
                        " ", 
                        "String producer;", 
                        "String type;", 
                        "int topSpeed;", 
                        "int currentSpeed;", 
                        "public Vehicle(String producer, String type, int topSpeed) {",
                        "this.producer = producer;", 
                        "this.type = type;", 
                        "this.topSpeed = topSpeed;", 
                        "this.currentSpeed = 0;", 
                        "}", 
                        " ", 
                        "public int accelerate(int kmH) {", 
                        "if(this.currentSpeed + kmH > this.topSpeed) {", 
                        "this.currentSpeed = this.topSpeed;", 
                        "}", 
                        "else {", 
                        "this.currentSpeed += kmH;", 
                        "}", 
                        "return this.currentSpeed;", 
                        "}", 
                        " ", 
                        "public static void main(String[] args) {", 
                        " ", 
                        "Vehicle v = new Vehicle(\"Volvo\", \"C30\", 230);", 
                        "System.out.println(v.accelerate(50));",
                        "}",
                        "}"
                    ],
    studentRegular : [ 
                        "public class Student {", 
                        "private String name;", 
                        "private ArrayList<String> courses;", 
                        "private int credits;", 
                        " ", 
                        "public Student(String name, ArrayList<String> courses, int credits) {", 
                        "this.name = name;", 
                        "this.courses = courses;", 
                        "this.credits = credits;", 
                        "}", 
                        " ", 
                        "public boolean isEligibleForDiploma() {", 
                        "return credits > 240;", 
                        "}", 
                        " ", 
                        "public String listCourses() {", 
                        "String courseString = \"\";", 
                        "int i = 0;", 
                        " ", 
                        "while (i < this.courses.size()) {", 
                        "courseString =  courseString + courses.get(i) + \" \";", 
                        "i = i + 1;", 
                        "}", 
                        "return courseString;", 
                        "}", 
                        " ", 
                        "public static void main(String[] args) {", 
                        " ", 
                        "ArrayList<String> currentCourses = new ArrayList<String>(Arrays.asList(\"Information Visualization\", \"Service Oriented Design\"));", 
                        "Student s1 = new Student(\"Sepp Tanson\", currentCourses, 300);", 
                        " ", 
                        "if (s1.isEligibleForDiploma()) {", 
                        "System.out.println(\"This student can graduate!\");", 
                        "}", 
                        "else {", 
                        "System.out.println(\"Still need points. Current courses: \" + s1.listCourses());", 
                        "}", 
                        "}", 
                        "}"
                    ],
    studentStride : [],
    vehicleStride: []
    


}


window.onload = function() {
    makeChart();
}

function makeChart() {

    // find svg
    var svg = d3.select("svg");

    // set margins of elements
    var margin = {
        top: 40,
        right: 20,
        bottom: 150,
        left: 150
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

        // grab CSV
        d3.csv("Data/AAAA_R-S-SV2_studentClass_PARSED.csv").then(function (data) {

        // get maximum of timestamp
        maxRec = d3.max(data, function(d) { 
            return +d.CorrectedRecordingTimestamp; 
        });
        x2.domain([0, maxRec]);
            
        // y axis ranging from first to max line number
        y.domain([d3.max(data, function (d) {
                    return Number(d.LineNumber);
                }), 0]);

        // make x axis
        g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height + 20) + ")")
        .call(d3.axisBottom(x2).ticks(20));

        // rotate x axis text
        g.selectAll(".x text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start");

        g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y).ticks(d3.max(data, function (d) {
            return Number(d.LineNumber);
        })).tickFormat(function(d){
            return codeLines.studentRegular[d] + " " + d;
         }))
        
        // y axis label
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("x", 26)
        .attr("text-anchor", "end")
        .text("Line");

        // add line number te
        g.selectAll("y axis")
        .attr("fill", "#000")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("safkafksahsfkah")

        // divide height by amount of lines so bar height fits?
        var barHeight = (+svg.attr("height") - (margin.top + margin.bottom)) / d3.max(data, function (d) {
            return Number(d.LineNumber);
        });

        g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            // console.log(d.CorrectedRecordingTimestamp)
            return x2(d.CorrectedRecordingTimestamp);
        })

        // correct for height of bars when positioning since we reversed the order of the y axis
        .attr("y", function (d) {
            return y(Number(d.LineNumber)) - (barHeight * 1.5);
        })

        // width is determined by the duration of the fixation for that point in time
        .attr("width", function(d) {
            return d.GazeEventDuration / (maxRec / 100);
        })

        // adjusted for chart height divided by line n umbers
        .attr("height", barHeight)

        // don't show unclassified lines (but investigate why they occur)
        .style("opacity", function(d) {
            if(d.LineNumber == 0){
                return 0;
            }
        })
    });
}