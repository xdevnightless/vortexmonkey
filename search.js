

function searchGoogle() {

var searchInput = document.querySelector(".search-bar");

var query = searchInput.value.trim();

if (query !== "") {

var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

window.open(searchUrl, '_top');

searchInput.value = ''; // Clear the search bar

}

}

function searchKeyPress(event) {

if (event.key === "Enter") {

searchGoogle();

}

}

