console.log("Script.js is ALIVE");

// Renamed to 'gameBox' to avoid the "already declared" error
var gameBox = document.getElementById('container');

// CORRECTED URLS (No 'www', strictly 'cdn')
// 'var' allows the script to run multiple times without crashing
var zonesURL = "https://cdn.jsdelivr.net";
var coverURL = "https://cdn.jsdelivr.net";
var htmlURL = "https://cdn.jsdelivr.net";

async function listZones() {
    console.log("Fetching games...");
    try {
        // Use a direct fetch with no-cache to bypass the redirect/403
        const response = await fetch(zonesURL, { 
            cache: "no-store",
            mode: "cors" 
        });
        
        if (!response.ok) throw new Error("HTTP " + response.status);
        
        const zones = await response.json();
        const container = document.getElementById('container');
        
        if (container) {
            container.innerHTML = ""; // Clear loading text
            zones.forEach(file => {
                const item = document.createElement("div");
                item.className = "zone-item";
                const cleanCover = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                item.innerHTML = `<img src="${cleanCover}" style="width:150px; border-radius:10px;"><p>${file.name}</p>`;
                item.onclick = () => window.location.href = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                container.appendChild(item);
            });
        }
    } catch (error) {
        console.error("Game Load Failed:", error);
        document.getElementById('container').innerHTML = "Failed to load games: " + error.message;
    }
}
listZones();
