'use strict'
let data = {};
const requestURL = 'https://mdowns1999.github.io/wdd230/final_project_wdd230/js/temple_data.json';

/****************************************
 * MAIN:
 * Start the program.
 * **************************************/
function main()
{
    //Set up the Drop Down Menu
    projectSelection();

    //Get the Json Info to start the Project
    getJsonInfo();

}

/****************************************
 * GET JSON INFO:
 * Get the JSON file
 * **************************************/
function getJsonInfo()
{
    fetch(requestURL)
    .then(function(response){
        return response.json()
    })
    .then(function (jsonObject){
        //console.table(jsonObject)//See the data appears
        data = jsonObject["data"];

        //Set the page to the first project on the list
        displayProject(data[1]);
    })

}

/****************************************
 * PROJECT SELECTION:
 * Create the dropdown menu
 * **************************************/
function projectSelection()
{
    let selectBox = document.getElementById("projectSelectionBox");
    let item = document.createElement('div');

    item.innerHTML = `<h2> Project Selection</h2>
    <p>Select a Project you would like to view.</p>
    <select name='project_dropdown' onchange='addProjects(this.value);'> 
    <option value = 0 >Choose a Project</option>
    <option value= 1 >Chess</option>
    <option value= 2 >Orbit</option> </select>`;

    selectBox.appendChild(item);
}

/****************************************
 * ADD PROJECT:
 * Clear the box then add the page
 * **************************************/
function addProjects(projectValue)
{
    //Clear any content there already
    removeProject();

    //This will make sure the option value is not 0.  
    //If it is, we will just set the value to 1 instead.
    if(projectValue != 0)
    {
        displayProject(data[projectValue]);
    }
    else
    {
        displayProject(data[1]);
    }

}

/****************************************
 * DISPLAY PROJECT:
 * Display the Page with a project
 * **************************************/
function displayProject(project)
{
    //Get the Box we want to display the page
    let displayBox = document.getElementById('displayProjectBox');

    //Generate the HTML for the project
        displayBox.innerHTML = 
        `
        <section>
        <h1>${project.name}</h1>

        </section>
        `;

}

/****************************************
 * REMOVE PROJECT:
 * Remove any html within the display Box
 * **************************************/
function removeProject()
{
    document.getElementById('displayProjectBox').innerHtml = "";
}

main();


