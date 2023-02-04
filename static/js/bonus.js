
d3.json(url).then(function(data){

    let names = data.names;
    let meta = data.metadata;
    //let samples = data.samples;
    console.log(names[0])
    let data1 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: meta[0].wfreq,
            title: { text: "Belly Button Wash Frequency" },
            type: "indicator",
            mode: "gauge",
            gauge: {
                axis: { range: [0, 9] },
                steps: [
                    { range: [0, 1], color: '#ddead1'},
                    { range: [1, 2], color: '#c7ddb5'},
                    { range: [2, 3], color: '#b3cf99'},
                    { range: [3, 4], color: '#a3c585'},
                    { range: [4, 5], color: '#95bb72'},
                    { range: [5, 6], color: '#87ab69'},
                    { range: [6, 7], color: '#75975e'},
                    { range: [7, 8], color: '#658354'},
                    { range: [8, 9], color: '#4b6043'}
                ]
            }
        }
    ];

    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data1, layout);

});