'use strict'
let data = {};
const requestURL = 'https://mdowns1999.github.io/portfolioMikeDowns/js/projectInfo.json';
//const requestURL = 'https://mdowns1999.github.io/wdd230/final_project_wdd230/js/temple_data.json';

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
        data = jsonObject["projects"];
        console.table(data)

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
    <select id="selectDropDown" name='project_dropdown' onchange='addProjects(this.value);'> 
    <option value = -1>Choose a Project</option>
    <option value= 0 >Chess</option>
    <option value= 1 >Orbit</option> </select>`;

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
    //displayProject(data[projectValue]);

    //This will make sure the option value is not 0.  
    //If it is, we will just set the value to 1 instead.
    if(projectValue != -1)
    {
        displayProject(data[projectValue]);
    }
    else
    {
        displayProject(data[0]);
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
        <div id="projectPage">

        <div id="projectOverview">
            <h1 id="projectHeading">${project.name}</h1>
            <p class = "projectContent">${project.overview}</p>
        </div>

        <div id="projectLayoutOne" class="layoutStyleOne">
            <div id="projectLayoutContentOne">
                <h2>Challenges:</h2>
                <p class = "projectContent">${project.challenges}</p>
            </div>

            <img id ="projectPhotoOneImg" src="${project.projectPic1}" alt = "${project.name} Project Photo">
        </div>

        <div id="projectLayoutTwo">
            <div id="projectLayoutContentTwo">
                <h2>Design:</h2>
                <p class = "projectContent">${project.design}</p>
            </div>

            <img id ="projectPhotoTwoImg" src="${project.projectPic2}" alt = "${project.name} Project Photo">
        </div>

        <div id="GitHubBanner" class="layoutStyleOne">
            <p class = "projectContent">Check out the Source Code on GitHub!:  </p>
            <a id="GitHubBtn" href="${project.GitHubLink}" alt="GitHub Source Code Link">GitHub Code</a>
        </div>


        </div>
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


