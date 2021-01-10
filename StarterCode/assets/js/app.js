//app.js//
//Chart diminsions 
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 30,
  right: 40,
  bottom: 50,
  left: 40
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//SVG  appending to 
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Import CSV and choosing variables from data set
d3.csv("assets/data/data.csv").then(function(CensusData) {
  CensusData.forEach(function(data) {
    data.age = +data.age;
    data.obesity = +data.obesity;
    console.log(data.age);
    console.log(data.obesity);
  });
  
});
