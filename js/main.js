'use strict'

/************************************
 * TOGGLE HAM
 * Target the Ham and make it respond 
 * when clicked
 * **********************************/
function toggleHam()
{
let ham = document.getElementById('ham');
let nav = document.querySelector('.navigation');
ham.addEventListener('click', () => {nav.classList.toggle('responsive')});
}

/************************************
 * FOTTER DATE
 * Date for footer.
 * **********************************/
function footer_date()
{
    let date = new Date()
    let year = date.getFullYear()

    document.getElementById('year').textContent = year;
}

/************************************
 * MAIN
 * Call Javascript Functions
 * **********************************/
function main()
{
    footer_date()
    toggleHam();

}

main()

//https://wireframe.cc/XI1pbh