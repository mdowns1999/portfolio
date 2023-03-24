function generateHeader(){
    let header = document.querySelector('header');

    header.innerHTML = `
    <a href="index.html"><img src="../images/portfolioLogoBlue.png" alt="Mike Downs Logo" id="websiteLogo"></a>
        <a id="ham" href="#">&#9776;</a>
        <nav>
            <ul class="navigation">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../pages/about.html">About</a></li>
                <li><a href="../pages/projects.html">Projects</a></li>
                <li><a href="../pages/contact.html">Contact</a></li>
            </ul>
        </nav>
    `
}
generateHeader();
