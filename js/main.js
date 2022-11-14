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

// function hamToggle()
// {
//     let ham = document.getElementById('ham');
//     let nav = document.querySelector('.navigation');

//     ham.addEventListener('click', () => {nav.classList.toggle('.responsive')}, false);
//     console.log('Hello')
// }

/************************************
 * MAIN
 * Call Javascript Functions
 * **********************************/
function main()
{
    footer_date()

}

main()

let ham = document.getElementById('ham');
let nav = document.querySelector('.navigation');

    //ham.addEventListener('click', () => {nav.classList.toggle('.responsive')}, false);

    ham.addEventListener('click', () => {nav.classList.toggle('responsive')});


    // var i = 0;
    // function move() {
    //   if (i == 0) {
    //     i = 1;
    //     var elem = document.querySelector("myBar");
    //     var width = 1;
    //     var id = setInterval(frame, 15);
    //     function frame() {
    //       if (width >= 70) {
    //         clearInterval(id);
    //         i = 0;
    //       } else {
    //         width++;
    //         elem.style.width = width + "%";
    //       }
    //     }
    //   }
    // }

//move()