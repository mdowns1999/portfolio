function generateHeader(){
    let header = document.querySelector('header');

    header.innerHTML = `
    <a href="index.html"><img src="../images/portfolioLogoBlue.png" alt="Mike Downs Logo" id="websiteLogo"></a>
        <a id="ham" href="#">&#9776;</a>
        <nav>
            <ul class="navigation">
                <li><a href="https://mdowns1999.github.io/portfolio/">Home</a></li>
                <li><a href="https://mdowns1999.github.io/pages/about.html">About</a></li>
                <li><a href="https://mdowns1999.github.io/pages/projects.html">Projects</a></li>
                <li><a href="https://mdowns1999.github.io/pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    `
}
generateHeader();
