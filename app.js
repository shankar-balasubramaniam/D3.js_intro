const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA' },
  { id: 'd2', value: 11, region: 'India' },
  { id: 'd3', value: 13, region: 'China' },
  { id: 'd4', value: 8, region: 'Germany' },
];

// d3.select('div') // select - allows to select an element in the DOM
//   .selectAll('p') // selectAll - select all elements specified by the selector
//   .data(DUMMY_DATA) // data - typically an array
//   .enter() // tells which elements are missing to which the data is bound
//   .append('p') // append a paragraph for each missing paragraph
//   .text((dta) => dta.region); // add text to the paragraphs

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((data) => data.region))
  .rangeRound([0, 300])
  .padding(0.1); // CReate the scale for the x-axis (horizontal)
const yScale = d3.scaleLinear().domain([0, 15]).range([250, 0]);
const container = d3.select('svg').classed('container', true);

const bars = container
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 250 - yScale(data.value))
  .attr('x', (data) => xScale(data.region))
  .attr('y', (data) => yScale(data.value));

setTimeout(() => {
  bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
}, 2000);
