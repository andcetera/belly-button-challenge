# Belly Button Biodiversity Dashboard
Building an interactive dashboard using JavaScript Plotly and D3 libraries to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
- - -
<img src='Images/corynebacteriumStockPhoto.jpg' width='900' height='500'>  

- - -
## Project Structure...TBA
- - -

## Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
## Instructions
Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    - Use `sample_values` as the values for the bar chart.

    - Use `otu_ids` as the labels for the bar chart.

    - Use `otu_labels` as the hovertext for the chart.

![OTU Bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.

    - Use `otu_ids` for the x values.

    - Use `sample_values` for the y values.

    - Use `sample_values` for the marker size.

    - Use `otu_ids` for the marker colors.

    - Use `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![Demographic Info Table](Images/hw03.png)

6. Update all the plots when a new sample is selected. 

![Dropdown Example](Images/dropdown.png)

Additionally, you are welcome to create any layout that you would like for your dashboard.  An example dashboard is shown as follows:

![Full Dashboard Example](Images/hw02.png)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

## Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

- Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.

- You will need to modify the example gauge code to account for values ranging from 0 through 9.

- Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Hints
- Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

- Refer to the [Plotly.js documentation](https://plotly.com/javascript/) when building the plots.

## Requirements
### Bar Chart (30 points)
- Chart initializes without error (10 points)

- Chart updates when a new sample is selected (5 points)

- Chart uses Top 10 sample values as values (5 points)

- Chart uses `otu_ids` as the labels (5 points)

- Chart uses `otu_labels` as the tooltip (5 points)

### Bubble Charts (40 points)
- Chart initializes without error (10 points)

- Chart updates when a new sample is selected (5 points)

- Chart uses `otu_ids` for the x values (5 points)

- Chart uses `otu_ids` for marker colors (5 points)

- Chart uses `sample_values` for the y values (5 points)

- Chart uses `sample_values` for the marker size (5 points)

- Chart uses `otu_labels` for text values (5 points)

### Metadata and Deployment (30 points)
- Metadata initializes without error (10 points)

- Metadata updates when a new sample is selected (10 points)

- App Successfully Deployed to Github Pages (10 points)

## Grading
This assignment will be evaluated against the requirements and assigned a grade according to the following table:

|Grade|Points|
|-----|------|
|A (+/-)|90+|
|B (+/-)|80–89|
|C (+/-)|70–79|
|D (+/-)|60–69|
|F (+/-)|< 60|
- - -

References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/