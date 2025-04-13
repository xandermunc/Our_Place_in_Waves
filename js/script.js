const menuIconDiv = document.getElementById('menu-icon-div');
const header = document.getElementById('header');
let fullscreen = false;

header.style.height = 'var(--header-height)';
header.style.background = 'rgba(255, 255, 255, 0.7)';
document.body.style.overflow = '';

menuIconDiv.addEventListener('click', () => {
    fullscreen = !fullscreen;
    header.style.height = fullscreen ? '100vh' : 'var(--header-height)';
    header.style.background = fullscreen ? 'rgba(255, 255, 255, 0.8)' : '';

    const nonMenuDivs = document.querySelectorAll('.non-menu-item');
    nonMenuDivs.forEach(div => {
        div.style.opacity = fullscreen ? '0' : '1';
        div.style.pointerEvents = fullscreen ? 'none' : 'all';
    });

    document.body.style.overflow = fullscreen ? 'hidden' : '';
});

// Search bar functionality
const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");
const searchBackground = document.getElementById("search-background");

let noResultsFound = false;

const keywords = [
    "light", "sound", "hydrogen", "spectrum", "interactive", "installation",
    "video", "poster", "chladni", "resonance", "motion", "about", "xander munc"
];

searchIcon.addEventListener("click", () => {
    fullscreen = !fullscreen;
    const isVisible = searchBar.classList.contains("visible");

    const nonSearchDivs = document.querySelectorAll('.non-searchbar-item');
    nonSearchDivs.forEach(div => {
        div.style.opacity = fullscreen ? '0' : '1';
        div.style.pointerEvents = fullscreen ? 'none' : 'all';
    });

    if (isVisible) {
        searchBar.classList.remove("visible");
        document.getElementById('chladni').classList.remove("visible");
    } else {
        searchBar.classList.add("visible");
        document.getElementById('chladni').classList.add("visible");
    }

    searchResults.style.display = "none";
    searchBar.value = "";

    header.style.height = fullscreen ? '100vh' : 'var(--header-height)';
    header.style.background = fullscreen ? 'rgba(255, 255, 255, 0.8)' : '';

    const nonMenuDivs = document.querySelectorAll('.non-menu');
    nonMenuDivs.forEach(div => {
        div.style.opacity = fullscreen ? '0' : '1';
    });

    document.body.style.overflow = fullscreen ? 'hidden' : '';
});

searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (!noResultsFound) {
            document.getElementById("search-container").classList.add("active");
            document.getElementById("search-results").classList.add("active");
        }
    }
});

const clickSound = new Audio("audio/click.wav");

searchBar.addEventListener("input", () => {
    clickSound.currentTime = 0; 
    clickSound.play();

    document.getElementById("search-container").classList.remove("active");
    document.getElementById("search-results").classList.remove("active");

    const query = searchBar.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.length > 0) {
        const matched = keywords.filter(keyword => keyword.includes(query));

        if (matched.length > 0) {
            matched.forEach(word => {
                const li = document.createElement("li");
                li.textContent = word;

                if (word === "interactive") {
                    li.classList.add("interactive-bg");
                } else if (word === "installation") {
                    li.classList.add("installation-bg");
                    li.addEventListener("click", () => {
                        window.location.href = "../hes.html";
                    });
                }

                searchResults.appendChild(li);
            });
            searchResults.style.display = "block";
            noResultsFound = false;
        } else {
            const li = document.createElement("li");
            li.textContent = "No results found.";
            li.style.color = "grey";
            searchResults.appendChild(li);
            searchResults.style.display = "block";
            noResultsFound = true;
        }
    } else {
        searchResults.style.display = "none";
    }
});

let soundOne = true;

document.getElementById("search-icon").addEventListener("click", () => {
    if (soundOne) {
        const audio = new Audio("audio/F2.wav");
        audio.play();
    } else {
        const audio = new Audio("audio/Eb2.wav");
        audio.play();
    }
    soundOne = !soundOne;
});

document.getElementById("menu-icon").addEventListener("click", () => {
    if (soundOne) {
        const audio = new Audio("audio/F2.wav");
        audio.play();
    } else {
        const audio = new Audio("audio/Eb2.wav");
        audio.play();
    }
    soundOne = !soundOne;
});
