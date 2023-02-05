let meta = [];
d3.json(url).then(function(data){

    // Save metadata to list to reference for our plot
    meta = data.metadata;
    
    // Plot initial indicator gauge from first sample
    let data1 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: meta[0].wfreq,
            title: { text: "<b>Belly Button Wash Frequency</b><br>(Scrubs Per Week)" },
            type: "indicator",
            mode: "gauge+number",
            ids: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
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

    // Add layout information and display plot
    var layout = { width: 500, height: 450, margin: { t: 30, l: 30} };
    Plotly.newPlot('gauge', data1, layout);
});


// Function to Update Plot when new sample is chosen from dropdown menu
function optionChanged(x){

    // Get new sample name
    let name = d3.select('#selDataset').property('value');

    let wash = 0;
    
    // Iterate through the meta list to update wash frequency number
    for(i = 0; i < meta.length; i++){
                
        // Check if our selection matches
        if(meta[i].id.toString() === name){
    
            // Update wfreq variable
            wash = meta[i].wfreq;
        }
    }
    
    // Restyle the plot
    Plotly.restyle('gauge', 'value', [wash]);
}