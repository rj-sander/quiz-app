import Papa from "papaparse";
import React from "react";
import * as d3 from "d3";
import questions from "./questions";

function PieChart(props) {
  const { data, outerRadius, innerRadius } = props;
  const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  };
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  React.useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    d3.select("#pie-container").select("svg").remove();

    // Create new svg
    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateCool)
      .domain([0, data.length]);

    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .text(questions[0].question);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();
    svg
      //   .append("g")
      //   .attr("transform", `translate(${width / 2 - 120},20)`)
      .append("text")
      .text(questions[0].question);
    //   .attr("class", "title");
    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);

    // Append text labels
    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.label)
      .style("fill", (_, i) => colorScale(data.length - i))
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

  return <div id="pie-container" />;
}

export default function Results() {
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch("/test.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: false }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
    }
    getData();
  }, []);
  console.log(rows);
  console.log(questions);

  let question1 = [
    { label: questions[0].answers[0].text, value: 0 },
    { label: questions[0].answers[1].text, value: 0 },
    { label: questions[0].answers[2].text, value: 0 },
    { label: questions[0].answers[3].text, value: 0 },
  ];
  let question2 = [
    { label: questions[1].answers[0].text, value: 0 },
    { label: questions[1].answers[1].text, value: 0 },
  ];
  let question3 = [
    { label: questions[2].answers[0].text, value: 0 },
    { label: questions[2].answers[1].text, value: 0 },
  ];
  let question4 = [
    { label: questions[3].answers[0].text, value: 0 },
    { label: questions[3].answers[1].text, value: 0 },
  ];
  let question5 = [
    { label: questions[4].answers[0].text, value: 0 },
    { label: questions[4].answers[1].text, value: 0 },
  ];
  let question6 = [
    { label: questions[5].answers[0].text, value: 0 },
    { label: questions[5].answers[1].text, value: 0 },
  ];
  let question7 = [
    { label: questions[6].answers[0].text, value: 0 },
    { label: questions[6].answers[1].text, value: 0 },
  ];
  let question8 = [
    { label: questions[7].answers[0].text, value: 0 },
    { label: questions[7].answers[1].text, value: 0 },
  ];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] == "a") question1[0].value++;
    if (rows[i][0] == "b") question1[1].value++;
    if (rows[i][0] == "c") question1[2].value++;
    if (rows[i][0] == "d") question1[3].value++;
    if (rows[i][1] == "e") question2[0].value++;
    if (rows[i][1] == "f") question2[1].value++;
    if (rows[i][2] == "g") question3[0].value++;
    if (rows[i][2] == "h") question3[1].value++;
    if (rows[i][3] == "i") question4[0].value++;
    if (rows[i][3] == "j") question4[1].value++;
    if (rows[i][4] == "k") question5[0].value++;
    if (rows[i][4] == "l") question5[1].value++;
    if (rows[i][5] == "m") question6[0].value++;
    if (rows[i][5] == "n") question6[1].value++;
    if (rows[i][6] == "o") question7[0].value++;
    if (rows[i][6] == "p") question7[1].value++;
    if (rows[i][7] == "q") question8[0].value++;
    if (rows[i][7] == "r") question8[1].value++;
  }
  console.log(question1);
  console.log(question2);
  console.log(question3);

  return (
    <body class="bg-gradient-to-r from-indigo-200 to-blue-100">
      <div class="h-screen py-6 snap-y">
        <div class="bg-red-300 lg:w-2/3 w-3/4 p-6 m-auto rounded-xl shadow-lg grid grid-cols-1m-6 justify-items-center h-full text-slate-50 leading-loose snap-center">
          {/* <button onclick={() => (props.data = question1)}>Question1</button>
      <button onclick={() => (data = question2)}>Question2</button> */}
          <PieChart data={question1} outerRadius={200} innerRadius={20} />
        </div>
      </div>
    </body>
  );
}
