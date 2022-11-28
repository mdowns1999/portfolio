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
        data = jsonObject["data"];
        console.table(data)

        //Set the page to the first project on the list
        displayProjectLayoutOne(data[0]);
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
    <option value= 1 >Orbit</option>
    <option value= 2 >Lunar Lander</option> 
    <option value= 3 >Artillery</option> 
    <option value= 4 >Commerce Website</option> 
    <option value= 5 >5 Day Forecast Website</option>
    <option value= 6 >Data Structures Presentation</option>  
    
    </select>`;

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
        if(projectValue % 2 === 0)
        {
            displayProjectLayoutOne(data[projectValue]);
        }
        else
        {
            displayProjectLayoutTwo(data[projectValue]);
        }
    }
    else
    {
        displayProjectLayoutOne(data[0]);
    }

}

/****************************************
 * DISPLAY PROJECT:
 * Display the Page with a project
 * **************************************/
function displayProjectLayoutOne(project)
{
    //Get the Box we want to display the page
    let displayBox = document.getElementById('displayProjectBox');
    console.log(project.style)
    //Generate the HTML for the project
        displayBox.innerHTML = 
        `
        <div id="projectPage">

        <div id="projectOverview">
            <h1 id="projectHeading">${project.name}</h1>
            <p class = "projectContent">${project.overview}</p>
        </div>

        <div id="projectBoxOne" class="layoutStyleOne">
            <div id="layoutOneContentOne">
                <h2>Challenges:</h2>
                <p class = "projectContent">${project.challenges}</p>
            </div>

            <img id ="projectOnePhotoOneImg" src="${project.projectPic1}" alt = "${project.name} Project Photo">
        </div>

        <div id="projectBoxTwo">
            <div id="layoutOneContentTwo">
                <h2>Design:</h2>
                <p class = "projectContent">${project.design}</p>
            </div>

            <img id ="projectOnePhotoTwoImg" src="${project.projectPic2}" alt = "${project.name} Project Photo">
        </div>

        <div id="GitHubBanner" class="layoutStyleOne">
            <p class = "projectContent">Check out the Source Code on GitHub!:  </p>
            <a id="GitHubBtn" href="${project.GitHubLink}" alt="GitHub Source Code Link">GitHub Code</a>
        </div>


        </div>
        `;

}

function displayProjectLayoutTwo(project)
{
    //Get the Box we want to display the page
    let displayBox = document.getElementById('displayProjectBox');
    console.log(project.style)
    //Generate the HTML for the project
    displayBox.innerHTML = 
        `
        <div id="projectPage">

        <div id="projectOverview">
            <h1 id="projectHeading">${project.name}</h1>
            <p class = "projectContent">${project.overview}</p>
        </div>

        <div id="projectBoxOne" class="layoutStyleTwo">
            <div id="layoutTwoContentOne">
                <h2>Challenges:</h2>
                <p class = "projectContent">${project.challenges}</p>
            </div>

            <img id ="projectTwoPhotoOneImg" src="${project.projectPic1}" alt = "${project.name} Project Photo">
        </div>

        <div id="projectBoxTwo">
            <div id="layoutTwoContentTwo">
                <h2>Design:</h2>
                <p class = "projectContent">${project.design}</p>
            </div>

            <img id ="projectTwoPhotoTwoImg" src="${project.projectPic2}" alt = "${project.name} Project Photo">
        </div>

        <div id="GitHubBanner" class="layoutStyleTwo">
            <p class = "projectContent">Check out the Source Code on GitHub!:  </p>
            <a id="GitHubBtn" href="${project.GitHubLink}" alt="GitHub Source Code Link" target="_blank">GitHub Code</a>
        </div>


        </div>
        `;

        console.log(project.GitHubLink);

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


