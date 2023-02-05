
d3.json(url).then(function(data){

    let names = data.names;
    let meta = data.metadata;
    //let samples = data.samples;
    console.log(names[0])
    let data1 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: meta[0].wfreq,
            title: { text: "<b>Belly Button Wash Frequency</b><br>(Scrubs Per Week)" },
            type: "indicator",
            mode: "gauge",
            gauge: {
                axis: { range: [0, 9], ticks: ''},
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
                ],
                bar: { color: 'black', thickness: 0.1},
                borderwidth: 0
            }
        }
    ];

    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data1, layout);


    // set listener on dropdown menu to run updatePlots function on change
    // (#selDataset has property onchange="optionChanged(this.value)...)
        // works but breaks app.js updates
    //d3.selectAll('#selDataset').on('change', updateGauge);

    // Function to Update Plots when new name is chosen from dropdown menu
    function updateGauge(){

        //optionChanged(this.value);
        // Get new sample name
        let name = d3.select('#selDataset').property('value');

        let wash = 0;

         // Iterate through the meta list to update Demographic Info box
         for(i = 0; i < meta.length; i++){
            
            // Check if our selection matches
            if(meta[i].id.toString() === name){

                // Update wfreq variable
                wash = meta[i].wfreq;
            }
        }
        Plotly.restyle('gauge', 'value', [wash]);
    }

});