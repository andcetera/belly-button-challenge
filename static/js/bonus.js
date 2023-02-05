let meta = [];
d3.json(url).then(function(data){

    // Save metadata to list to reference for our plot
    meta = data.metadata;
    
    // Plot initial indicator gauge from first sample
    let data1 = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: meta[0].wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>(Scrubs Per Week)" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [0, 9], 
                    ticks: '',
                    tickmode: 'linear',
                    tick0: 0,
                    dtick: 1,
                },
                steps: [
                    { range: [0, 1], color: 'rgba(253, 231, 37, 0.7)'},
                    { range: [1, 2], color: 'rgba(180, 222, 44, 0.7)'},
                    { range: [2, 3], color: 'rgba(109, 205, 89, 0.7)'},
                    { range: [3, 4], color: 'rgba(53, 183, 121, 0.7)'},
                    { range: [4, 5], color: 'rgba(31, 158, 137, 0.7)'},
                    { range: [5, 6], color: 'rgba(38, 130, 142, 0.7)'},
                    { range: [6, 7], color: 'rgba(49, 104, 142, 0.7)'},
                    { range: [7, 8], color: 'rgba(62, 74, 137, 0.7)'},
                    { range: [8, 9], color: 'rgba(72, 40, 120, 0.7)'}
                ],
                bar: { color: 'black', thickness: 0.1},
                borderwidth: 0
            }
        }
    ];

    // Add layout information and display plot
    var layout = { width: 450, height: 450, margin: { t: 100, l: 0} };
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