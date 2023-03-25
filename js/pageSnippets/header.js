function generateHeader(){
    let header = document.querySelector('header');

    header.innerHTML = `
    <a href="index.html"><img src="./images/mikeDownsLogo.png" alt="Mike Downs Logo" id="websiteLogo"></a>
        <a id="ham" href="#">&#9776;</a>
        <nav>
            <ul class="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `
}
generateHeader();
