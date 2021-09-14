
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

fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => console.log(data));