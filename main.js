
let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    let spotifyButton = document.getElementById("spotify-link");
    if (spotifyButton != null) {
        spotifyButton.src = "img/Spotify_Logo_CMYK_Black.png"
    }
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    let spotifyButton = document.getElementById("spotify-link");
    if (spotifyButton != null) {
        spotifyButton.src = "img/Spotify_Logo_CMYK_White.png"
    }
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});

const checkTheme = () => {
    let theme = localStorage.getItem('data-theme');
    let button = document.getElementById("switch")
    if (theme === 'dark') {
        changeThemeToDark()
        button.checked = true;
    }else {
        changeThemeToLight()
    }
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
let getKanye = function() {
    let modalText = document.querySelector('#kanye_quote')
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => modalText.innerHTML = "\"" + (data.quote) + "\" <br> - Kanye West");

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
if (modal != null) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const formFunction = () => {
    var x = document.getElementById("emailform");
    var text = "";
    var i;
    for (i = 0; i < x.length-1 ;i++) {
        text += x.elements[i].value + ";  ";
    }
    document.querySelector("form").textContent = text;
}
