function generateFooter() {
  let footer = document.querySelector("footer");

  footer.innerHTML = `        
  <p id="copyRight">&copy;<span id="year"></span> | Mike Downs</p>
    <div id="social_media_logo">
        <a href="https://linkedin.com/in/mike-downs" target="_blank"><img class="linkedin"
                src='./images/In-Blue-26.png' alt="Linked In Logo"></a>
    </div>
`;
}
generateFooter();