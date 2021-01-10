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

//Plot Scales 
const xScale = d3.scaleLinear()
.domain(d3.extent(CensusData, d => d.age))
.range([0, width])
.nice(); //Used to round anomaly values in the domain

const yScale = d3.scaleLinear()
.domain([6,d3.max(CensusData, d => d.obesity])
.range([height, 0])
.nice();

//Plot Axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);


});
