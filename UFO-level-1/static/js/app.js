// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");


// //Console.log the UFO data from data.js

// console.log(data);

// //  //Step 1: Loop Through the 'data' and console.log each UFO data object

// data.forEach(function(UFOFinding){
//     console.log(UFOFinding);    
// }
// );



data.forEach((UFOFinding) => {

    // //Use d3 to append one table row `tr` for each  UFO data object
    var row = tbody.append("tr");

    // //Use `Object.entries` to console.log each UFO data report value
    Object.entries(UFOFinding).forEach(([key, value]) => {

        // Append a cell to the row for each value
//      // in the  UFO data report object
        var cell = row.append("td");

        //Use d3 to update each cell's text with
        // UFO report values (datetime, city, state, country, shape, durationMinutes, comments)
        cell.text(value);
    });
});


//input data from page
filter_button = d3.select("#filter-btn");
reset_button = d3.select("#reset-btn");
form = d3.select("form");




// // Set up event handler function for the date input



function filterUFOData(){
    
    //collect and store user input of Date

    var dateInput = d3.select("#datetime");
    var dateSelected = dateInput.property("value");

    console.log(dateSelected);


    //Filter Data by Date input by user

    var filtered_data = tableData.filter(sightData => sightData.datetime === dateSelected);

    console.log(filtered_data);

    // reset the table initially displayed

    tbody.html("");

    //repopulate table with filtered 

    filtered_data.forEach((UFOFinding) => {

        // //Use d3 to append one table row `tr` for each  UFO data object
        var row = tbody.append("tr");
    
        // //Use `Object.entries` to console.log each UFO data report value
        Object.entries(UFOFinding).forEach(([key, value]) => {
    
            // Append a cell to the row for each value
    //      // in the  UFO data report object
            var cell = row.append("td");
    
            //Use d3 to update each cell's text with
            // UFO report values (datetime, city, state, country, shape, durationMinutes, comments)
            cell.text(value);
        });
    });
    


};

function resetUFOData(){
    
    // reset the table initially displayed

    tbody.html("");

    //repopulate table with filtered 

    data.forEach((UFOFinding) => {

        // //Use d3 to append one table row `tr` for each  UFO data object
        var row = tbody.append("tr");
    
        // //Use `Object.entries` to console.log each UFO data report value
        Object.entries(UFOFinding).forEach(([key, value]) => {
    
            // Append a cell to the row for each value
    //      // in the  UFO data report object
            var cell = row.append("td");
    
            //Use d3 to update each cell's text with
            // UFO report values (datetime, city, state, country, shape, durationMinutes, comments)
            cell.text(value);
        });
    });
    


};


////Add event listener to call functions on click
filter_button.on("click", filterUFOData);
form.on("change", filterUFOData);


//Reset data

reset_button.on("click", resetUFOData);
form.on("change", resetUFOData);

  //