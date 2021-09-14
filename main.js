const checkbox = document.querySelector('#switch');
const modalText = document.querySelector('#kanye_quote');
const modal = document.querySelector('#myModal');
const form = document.querySelector('#emailform');
const genreHint = document.querySelector('#genreHint');

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

let span = document.getElementsByClassName("close")[0];

let getKanye = function() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => modalText.innerHTML = "\"" + (data.quote) + "\" <br> - Kanye West");

    modal.style.display = "block";
}

if (modal != null) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    let text = "";

    if (form.elements['genre'].value !== 'empty') {
        text += form.elements['name'].value + " : ";
        text += form.elements['email'].value + " : ";
        text += form.elements['genre'].value + " : ";
        text += form.elements['message'].value;
        form.textContent = text;
    } else {
        genreHint.innerHTML = 'Please Select a Genre.';
    }


})