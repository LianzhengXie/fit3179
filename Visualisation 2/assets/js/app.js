const vis1 = "https://raw.githubusercontent.com/LianzhengXie/fit3179/main/Visualisation%202/assets/js/map.json";

vegaEmbed('#chart1', vis1).then(function (result) {
}).catch(console.error);

const vis2 = "https://raw.githubusercontent.com/LianzhengXie/fit3179/main/Visualisation%202/assets/js/new_cases.json";

vegaEmbed('#chart2', vis2).then(function (result) {
}).catch(console.error);

const vis3 = "https://raw.githubusercontent.com/LianzhengXie/fit3179/main/Visualisation%202/assets/js/total_deaths.json";

vegaEmbed('#chart3', vis3).then(function (result) {
}).catch(console.error);
