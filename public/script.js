const container = document.getElementById('container');
const zoneViewer = document.getElementById('zoneViewer');
let zoneFrame = document.getElementById('zoneFrame');
const searchBar = document.getElementById('searchBar');
const sortOptions = document.getElementById('sortOptions');
// https://www.jsdelivr.com/tools/purge
const zonesURL = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json";
const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";
let zones = [];
let popularityData = {};
/**
* Fetches the list of zones from the server, updates the global zones array, refreshes popularity and sorting, and opens a zone if an 'id' query parameter is present; displays an error message on failure.
* @example
* listZones()
* Promise<void>
* @returns {{Promise<void>}} Promise that resolves when zones are loaded and the UI has been updated.
**/
async function listZones() {
    try {
        const response = await fetch(zonesURL);
        const json = await response.json();
        zones = json;
        await fetchPopularity();
        sortZones();
        const search = new URLSearchParams(window.location.search);
        const id = search.get('id');
        if (id) {
            const zone = zones.find(zone => zone.id + '' == id + '');
            if (zone) {
                openZone(zone);
            }
        }
    } catch (error) {
        container.innerHTML = `Error loading zones: ${error}`;
    }
}
/**
* Fetches yearly hit statistics for HTML files from jsDelivr and populates the global popularityData mapping by numeric file ID.
* @example
* fetchPopularity()
* Promise<void>
* @returns {Promise<void>} Resolves when popularityData has been updated; on error sets popularityData[0] = 0.
**/
async function fetchPopularity() {
    try {
        const response = await fetch("https://data.jsdelivr.com/v1/stats/packages/gh/gn-math/html@main/files?period=year");
        const data = await response.json();
        data.forEach(file => {
            const idMatch = file.name.match(/\/(\d+)\.html$/);
            if (idMatch) {
                const id = parseInt(idMatch[1]);
                popularityData[id] = file.hits.total;
            }
        });
    } catch (error) {
        popularityData[0] = 0;
    }
}

/**
* Sorts the global zones array according to the currently selected sort option and updates the display.
* @example
* sortZones()
* undefined
* @param {void} none - This function does not accept any parameters.
* @returns {undefined} No return value; sorts the zones array and calls displayZones(zones).
**/
function sortZones() {
    const sortBy = sortOptions.value;
    if (sortBy === 'name') {
        zones.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'id') {
        zones.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'popular') {
        zones.sort((a, b) => (popularityData[b.id] || 0) - (popularityData[a.id] || 0));
    }
    zones.sort((a, b) => (a.id === -1 ? -1 : b.id === -1 ? 1 : 0));
    displayZones(zones);
}

/**
 * Render a list of zone entries into the page container and update the zone count.
 * @example
 * displayZones([{ name: 'Zone 1', cover: '{{COVER_URL}}/cover.png' }])
 * undefined
 * @param {Array<Object>} zones - Array of zone objects each containing at least 'name' and 'cover' properties.
 * @returns {void} Updates the DOM with zone items and zone count; does not return a value.
 */
function displayZones(zones) {
    container.innerHTML = "";
    zones.forEach(file => {
        const zoneItem = document.createElement("div");
        zoneItem.className = "zone-item";
        zoneItem.onclick = () => openZone(file);
        const img = document.createElement("img");
        img.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        zoneItem.appendChild(img);
        const button = document.createElement("button");
        button.textContent = file.name;
        button.onclick = (event) => {
            event.stopPropagation();
            openZone(file);
        };
        zoneItem.appendChild(button);
        container.appendChild(zoneItem);
    });
    if (container.innerHTML === "") {
        container.innerHTML = "No zones found.";
    } else {
        document.getElementById("zoneCount").textContent = `Zones Loaded: ${zones.length}`;
    }
}

function filterZones() {
    const query = searchBar.value.toLowerCase();
    const filteredZones = zones.filter(zone => zone.name.toLowerCase().includes(query));
    displayZones(filteredZones);
}

/**
* Open a zone by navigating to an external URL or fetching and rendering HTML into an iframe.
* @example
* openZone({url: "http://example.com/zone", name: "Example Zone", id: "zone-1"})
* undefined
* @param {{Object}} {{file}} - Object describing the zone; must include url (string), name (string) and id (string).
* @returns {{void}} Void (no return value).
**/
function openZone(file) {
    if (file.url.startsWith("http")) {
        window.location.href = file.url;
    } else {
        const url = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
        fetch(url).then(response => response.text()).then(html => {
            if (zoneFrame.contentDocument === null) {
                zoneFrame = document.createElement("iframe");
                zoneFrame.id = "zoneFrame";
                zoneViewer.appendChild(zoneFrame);
            }
            zoneFrame.contentDocument.open();
            zoneFrame.contentDocument.write(html);
            zoneFrame.contentDocument.close();
            document.getElementById('zoneName').textContent = file.name;
            document.getElementById('zoneId').textContent = file.id;
            zoneViewer.style.display = "block";
        }).catch(error => alert("Failed to load zone: " + error));
    }
}

function aboutBlank() {
    const newWindow = window.open("about:blank", "_blank");
    let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent).url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
    fetch(zone).then(response => response.text()).then(html => {
        if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(html);
            newWindow.document.close();
        }
    })
}

function closeZone() {
    zoneViewer.style.display = "none";
    zoneViewer.removeChild(zoneFrame);
}

function fullscreenZone() {
    if (zoneFrame.requestFullscreen) {
        zoneFrame.requestFullscreen();
    } else if (zoneFrame.mozRequestFullScreen) {
        zoneFrame.mozRequestFullScreen();
    } else if (zoneFrame.webkitRequestFullscreen) {
        zoneFrame.webkitRequestFullscreen();
    } else if (zoneFrame.msRequestFullscreen) {
        zoneFrame.msRequestFullscreen();
    }
}

function saveData() {
    let data = JSON.stringify(localStorage) + "\n\n|\n\n" + document.cookie;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([data], {
        type: "text/plain"
    }));
    link.download = `${Date.now()}.data`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
* Loads JSON-formatted localStorage entries and cookie strings from a user-selected file and applies them to the current document.
* @example
* loadData(event)
* undefined
* @param {{Event}} {{event}} - The file input change event whose target.files[0] contains the uploaded data file.
* @returns {{void}} No return value; updates localStorage and document.cookie and displays an alert on completion.
*/
function loadData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        const content = e.target.result;
        const [localStorageData, cookieData] = content.split("\n\n|\n\n");
        try {
            const parsedData = JSON.parse(localStorageData);
            for (let key in parsedData) {
                localStorage.setItem(key, parsedData[key]);
            }
        } catch (error) {
            console.error(error);
        }
        if (cookieData) {
            const cookies = cookieData.split("; ");
            cookies.forEach(cookie => {
                document.cookie = cookie;
            });
        }
        alert("Data loaded");
    };
    reader.readAsText(file);
}
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
listZones();
