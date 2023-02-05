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
                    { range: [0, 1], color: 'rgb(253, 231, 37)'},
                    { range: [1, 2], color: 'rgb(180, 222, 44)'},
                    { range: [2, 3], color: 'rgb(109, 205, 89)'},
                    { range: [3, 4], color: 'rgb(53, 183, 121)'},
                    { range: [4, 5], color: 'rgb(31, 158, 137)'},
                    { range: [5, 6], color: 'rgb(38, 130, 142)'},
                    { range: [6, 7], color: 'rgb(49, 104, 142)'},
                    { range: [7, 8], color: 'rgb(62, 74, 137)'},
                    { range: [8, 9], color: 'rgb(72, 40, 120)'}
                ],
                bar: { color: 'black', thickness: 0.1},
                borderwidth: 0
            }
        }
    ];

    // Add layout information and display plot
    var layout = { width: 500, height: 450, margin: { t: 30, l: 0} };
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