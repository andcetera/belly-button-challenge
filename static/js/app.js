const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Use a D3 dataPromise to fetch the JSON data from the url
d3.json(url).then(function(data){

    // Save each data type to a variable
    let names = data.names;
    let meta = data.metadata;
    let samples = data.samples;

    //print names & first meta/samples to console for reference
    console.log(names);
    console.log(meta[0]);
    console.log(samples[0]);


    // Get top 10 sample values & list in descending order
    let sample = samples[0];
    let x = sample.sample_values.slice(0, 10).reverse();
    let y = sample.otu_ids.slice(0, 10).reverse();
    let hover = sample.otu_labels.slice(0, 10).reverse();

    // Create horizontal barchart
    initbar = [{
        x: x,
        y: y.map(item => `OTU ${item.toString()} `),//add 'OTU ' to each label
        type: 'bar',
        orientation: 'h',
        text: hover
    }];


    // Display intial bar chart plot to 'bar' div
    Plotly.newPlot('bar', initbar);

    //create bubble chart & plot to 'bubble' div
    initbub = [{
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
            size: sample.sample_values,
            color: sample.otu_ids
        }
    }];
    //otu_ids(x), sample_values(y), sample_values(marker size)
    //otu_ids(marker colors), otu_labels(text values)
    Plotly.newPlot('bubble', initbub);


    // Add names to the dropdown menu & give each a property we can call later
    for(i = 0; i < names.length; i++){
        d3.select('#selDataset').append('option').text(`BB_${names[i]}`).property('value', names[i].toString());
    }

    // set listener on dropdown menu to run updatePlots function on change
     // (#selDataset has property onchange="optionChanged(this.value)...)
    d3.selectAll('#selDataset').on('change', updatePlots);

   
    // Function to Update Plots when new name is chosen from dropdown menu
    function updatePlots(){

        // Get new sample name
        let name = d3.select('#selDataset').property('value');

        // Set empty array variables for each item we need to update
        let x = [];
        let y = [];
        let hover = [];

        // Iterate through samples list
        for(i = 0; i < samples.length; i++){
            
            // Check if our selection matches
            if(samples[i].id === name){
                
                // Set the new values for x, y, and hover
                x = samples[i].sample_values.slice(0, 10).reverse();
                y = samples[i].otu_ids.slice(0, 10).reverse();
                y = y.map(item => `OTU ${item.toString()} `);
                hover = samples[i].otu_labels.slice(0, 10).reverse();
            }
        }

        //Update bar chart
        Plotly.restyle('bar', 'x', [x]);
        Plotly.restyle('bar', 'y', [y]);
        Plotly.restyle('bar', 'text', [hover]);
    }




    //add the metadata info to the panel-primary/panel-body div(?)

});

// can or should anything be done outside of the datapromise function?
// modify style of dashboard if desired

//create speedometer gauge in bonus.js file if time