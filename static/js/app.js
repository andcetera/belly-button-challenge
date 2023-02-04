const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Use a D3 dataPromise to fetch the JSON data from the url
d3.json(url).then(function(data){

    // Save each data type to a variable
    let names = data.names;
    let meta = data.metadata;
    let samples = data.samples;
    console.log(names);
    console.log(meta[0]);
    console.log(samples[0]);

    //create horizontal bar chart & plot to 'bar' div
    // top 10 
    //sample_values (x), otu_ids (y)
    //otu_labels as hovertext

    //add names to the dropdown menu 
    //(programmatically?) #selDataset (has property onchange="optionChanged(this.value))
    //and have other charts respond to changes (plotly.restyle)

    //create bubble chart & plot to 'bubble' div
    //otu_ids(x), sample_values(y), sample_values(marker size)
    //otu_ids(marker colors), otu_labels(text values)

    //add the metadata info to the panel-primary/panel-body div(?)

});

// can or should anything be done outside of the datapromise function?
// modify style of dashboard if desired

//create speedometer gauge in bonus.js file if time