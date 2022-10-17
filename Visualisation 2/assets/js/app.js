const vis1 = "assets/data/map.json";

vegaEmbed('#chart1', vis1).then(function (result) {
}).catch(console.error);

const vis2 = "assets/data/new_cases.json";

vegaEmbed('#chart2', vis2).then(function (result) {
}).catch(console.error);

const vis3 = "assets/data/total_deaths.json";

vegaEmbed('#chart3', vis3).then(function (result) {
}).catch(console.error);
