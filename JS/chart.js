var codeLines = {
    vehicleRegular : [
                        "public class Vehicle {", 
                        " ", 
                        "String producer;", 
                        "String type;", 
                        "int topSpeed;", 
                        "int currentSpeed;", 
                        " ",
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
                        "}",
                        " ",
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
                        "}",
                        ""
                    ],
    studentStride : [
                        "class Student",
                        "private String name;",
                        "private ArrayList<String> courses;",
                        "private int credits;",
                        "public Student(String name, ArrayList<String> courses, int credits) {",
                        "this.name = name;",
                        "this.courses = courses;",
                        "this.credits = credits;",
                        "public boolean isEligibleForDiploma() {",
                        "return credits > 240;",
                        "public String listCourses() {",
                        "String courseString = \"\";",
                        "int i = 0;",
                        "while (i < this.courses.size()) {",
                        "courseString =  courseString + courses.get(i) + \" \";",
                        "i = i + 1;",
                        "return courseString;",
                        "public static void main(String[] args) {",
                        "ArrayList<String> currentCourses = new ArrayList<String>(Arrays.asList(\"Information Visualization\", \"Service Oriented Design\"));",
                        "Student s1 = new Student(\"Sepp Tanson\", currentCourses, 300);",
                        "if (s1.isEligibleForDiploma()) {",
                        "System.out.println(\"This student can graduate!\");",
                        " else {",
                        "System.out.println(\"Still need points. Current courses: \" + s1.listCourses());",
                        "} }",
                        ""
                    ],
    vehicleStride: [
                        "public class Vehicle",
                        "{",
                        "protected String producer;",
                        "protected String type;",
                        "protected int topSpeed;",
                        "protected int currentSpeed;",
                        " ",
                        "public Vehicle(String producer, String type, int topSpeed)",
                        "{",
                        "this.producer = producer;",
                        "this.type = type;",
                        "this.topSpeed = topSpeed;",
                        "this.currentSpeed = 0;",
                        "",
                        "public int accelerate(int kmH) {",
                        "if(this.currentSpeed + kmH > this.topSpeed)",
                        "{",
                        "this.currentSpeed = this.topSpeed;",
                        "}",
                        "else",
                        "{",
                        "this.currentSpeed += kmH;",
                        "}",
                        "return this.currentSpeed;",
                        "}",
                        "",
                        "public static void main(String[] args) {",
                        "{",
                        "Vehicle v = new Vehicle(\"Volvo\", \"C30\", 230);",
                        "System.out.println(v.accelerate(50));",
                        "}",
                        "}",
                        "",
                        "",
                        ""
                    ]
    


}

// Student first, then Vehicle, matches dropdown
var files = { 
                "student" :
                    [
                        "AAAA_R-S-SV1_studentClass_PARSED.csv",
                        "AAAA_R-S-SV2_studentClass_PARSED.csv",

                        "AAAA_R-S-VS1_studentClassStrideJava_PARSED.csv",
                        "AAAA_R-S-VS2_studentClassStrideJava_PARSED.csv",

                        "AAAA_N-S-SV1_studentClass-noSH_PARSED.csv",
                        "AAAA_N-S-SV2_studentClass-noSH_PARSED.csv",

                        "AAAA_N-S-VS1_studentClassStrideJava_PARSED.csv"
                    ],

                "vehicle" :
                    [
                        "AAAA_R-S-VS1_vehicleClass_PARSED.csv",
                        "AAAA_R-S-VS2_vehicleClass_PARSED.csv",

                        "AAAA_R-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_R-S-SV2_vehicleClassStrideJava_PARSED.csv",

                        "AAAA_N-S-VS1_vehicleClass-noSH_PARSED.csv",

                        "AAAA_N-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_N-S-SV2_vehicleClassStrideJava_PARSED.csv"
                    ],

                "regular" :
                    [
                        "AAAA_R-S-SV1_studentClass_PARSED.csv",
                        "AAAA_R-S-SV2_studentClass_PARSED.csv",
                        "AAAA_R-S-VS1_vehicleClass_PARSED.csv",
                        "AAAA_R-S-VS2_vehicleClass_PARSED.csv"
                    ],

                "none" : 
                    [
                        "AAAA_N-S-SV1_studentClass-noSH_PARSED.csv",
                        "AAAA_N-S-SV2_studentClass-noSH_PARSED.csv",
                        "AAAA_N-S-VS1_vehicleClass-noSH_PARSED.csv"

                    ],

                "block" :
                    [
                        "AAAA_R-S-VS1_studentClassStrideJava_PARSED.csv",
                        "AAAA_R-S-VS2_studentClassStrideJava_PARSED.csv",
                        "AAAA_N-S-VS1_studentClassStrideJava_PARSED.csv",
                        "AAAA_R-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_R-S-SV2_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_N-S-SV1_vehicleClassStrideJava_PARSED.csv",
                        "AAAA_N-S-SV2_vehicleClassStrideJava_PARSED.csv"    
                    ]
                };


// maps the filename to the right index of lines dict
var fileToLine = {

        "AAAA_R-S-SV1_studentClass_PARSED.csv" : "studentRegular",
        "AAAA_R-S-SV2_studentClass_PARSED.csv" : "studentRegular",
        "AAAA_R-S-VS1_studentClassStrideJava_PARSED.csv" : "studentStride",
        "AAAA_R-S-VS2_studentClassStrideJava_PARSED.csv" : "studentStride",
        "AAAA_R-S-VS1_vehicleClass_PARSED.csv" : "vehicleRegular",
        "AAAA_R-S-VS2_vehicleClass_PARSED.csv" : "vehicleRegular",
        "AAAA_R-S-SV1_vehicleClassStrideJava_PARSED.csv" : "vehicleStride",
        "AAAA_R-S-SV2_vehicleClassStrideJava_PARSED.csv"  : "vehicleStride",
        "AAAA_N-S-SV1_studentClass-noSH_PARSED.csv" : "studentRegular",
        "AAAA_N-S-VS1_studentClassStrideJava_PARSED.csv" : "studentStride",
        "AAAA_N-S-VS1_vehicleClass-noSH_PARSED.csv" : "vehicleRegular",
        "AAAA_N-S-SV1_vehicleClassStrideJava_PARSED.csv" : "vehicleStride",
        "AAAA_N-S-SV2_vehicleClassStrideJava_PARSED.csv" : "vehicleStride",
        "AAAA_N-S-SV2_studentClass-noSH_PARSED.csv" : "studentRegular"
}

var blockLines = {
    "studentRegular" : [4, 10, 14, 18, 25],
    "studentStride" : [3.5, 7.5, 9.5, 16.5],
    "vehicleRegular" : [6, 13, 23],
    "vehicleStride" : [6, 13, 25]
}


window.onload = function() {
    // standard call with student
    // changeFile(0);
}

function clickHandler() {

    // get the selected things from the dropdown
    var treshold = document.getElementById("treshold").value;
    var dataName = document.getElementById("data").value;
    var blocks = document.getElementById("blocks").value;

    changeFile(dataName, treshold, Number(blocks));
}

function changeFile(dataSubset, treshold, blocks) {
    
    // clear previous graphs and images
    d3.select("#svgdiv").selectAll(".datasvg").remove();
    d3.select("#svgdiv").selectAll(".graphtitle").remove();
    d3.select("#svgdiv").selectAll(".overlay").remove();

    files[dataSubset].forEach(function(file) {
        makeChart(file, treshold, blocks);
    })
}

function makeChart(fileName, treshold, blocks) {

    // title?
    d3.select("#svgdiv").append("h1").html(fileName).attr("class", "graphtitle");

    var subdiv = d3.select("#svgdiv").append("div")
        .attr("id", "div"+fileName)
        .attr("class", "svgclass");

    // find svg
    var svg = subdiv.append("svg");

    svg.attr("width", 1200)
        .attr("height", 700)
        .attr("class", "datasvg")
        .attr("id", fileName);


    // append block if needed 
    if(blocks == 1) {
        subdiv
            .append("img")
            .attr("width", 1200)
            .attr("height", 700)
            .attr("class", "overlay")
            .attr("src", fileName + ".png")
    }
    
    // set margins of elements
    var margin = {
        top: 40,
        right: 20,
        bottom: 80,
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

    // Create Tooltips
    var tip = d3.tip().attr('class', 'd3-tip').direction('e').offset([0,5])
    .html(function(d) {
        var content = "<span style='margin-left: 2.5px;'><b> Time:</b> " + d.CorrectedRecordingTimestamp + "ms" + " (" + d.CorrectedRecordingTimestamp / 1000 + "s)" + "</span><br>";
        content += "<span style='margin-left: 2.5px;'><b> Duration:</b> " + d.GazeEventDuration + "ms" + "</span><br>";
        content += "<span style='margin-left: 2.5px;'><b> Line:</b> " + d.LineNumber  + "</span><br>"
        content += "<span style='margin-left: 2.5px;'>" + codeLines[fileToLine[fileName]][d.LineNumber-1] + "</span>"
        return content;
    });
    svg.call(tip);

    // grab CSV
    d3.csv("Data/" + fileName).then(function (data) {

        var color = d3.scaleLinear()
        // .domain(d3.range[0, d3.max(data, function (d) {
        //     return Number(d.GazeEventDuration);
        // })])
        .domain([0, d3.max(data, function (d) {
                return Number(d.GazeEventDuration);
            })])
        .range(["#c0cadb", "#275fba"]);

        // get maximum of timestamp
        maxRec = d3.max(data, function(d) { 
            return +d.CorrectedRecordingTimestamp; 
        });
        x2.domain([0, maxRec]);
            
        // y axis ranging from first to max line number
        y.domain([d3.max(data, function (d) {
                    return Number(d.LineNumber);
                }), 0]);

        var widthBar = d3.scaleLinear()
        .range([0, maxRec])
        .domain([66, d3.max(data, function(d){
            return Number(d.GazeEventDuration);
        })]);

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
            return (codeLines[fileToLine[fileName]][d].length >= 25 ? codeLines[fileToLine[fileName]][d].substr(0, 25) + "..." : codeLines[fileToLine[fileName]][d])    
            + " " + (d + 1);
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

        // divide height by amount of lines so bar height fits?
        var barHeight = (+svg.attr("height") - (margin.top + margin.bottom)) / d3.max(data, function (d) {
            return Number(d.LineNumber);
        });

        // add lines for blocks
        g.selectAll(".blockline")
        .data(blockLines[fileToLine[fileName]])
        .enter().append("rect")
        .attr("class", "blockline")
        .attr("x", 0)
        .attr("y", function(d){ return y(d)})
        .attr("width", width)
        .attr("height", 1)
        .attr("fill", "#4c4c4c");

        g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            // console.log(d.CorrectedRecordingTimestamp)
            return x2(d.CorrectedRecordingTimestamp);
        })

        // correct for height of bars when positioning since we reversed the order of the y axis
        // perform additional correction where necessary
        .attr("y", function (d) {
            return y(Number(d.LineNumber) + 1) - (barHeight * 1.5);
        })

        // width is determined by the duration of the fixation for that point in time
        .attr("width", function(d) {
            return x2(d.GazeEventDuration);
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)


        // adjusted for chart height divided by line n umbers
        .attr("height", barHeight)
        // .style("fill", "#264270")
        .attr("fill", function(d) { 
            return color(d.GazeEventDuration); 
        })

        // don't show unclassified lines (but investigate why they occur)
        .style("opacity", function(d) {
            if(d.LineNumber == 0){
                return 0;
            }

            // check treshold
            else {
                if(d.GazeEventDuration >= +treshold) {
                    return .80;
                }
                else{
                    return 0;
                }
            }
        })
    // end of data scope
    });
}