console.log("Script.js is ALIVE");

// Renamed to 'gameBox' to avoid the "already declared" error
const gameBox = document.getElementById('container');

// CORRECTED URLS (No 'www', strictly 'cdn')
const zonesURL = "https://cdn.jsdelivr.net";
const coverURL = "https://cdn.jsdelivr.net";
const htmlURL = "https://cdn.jsdelivr.net";

async function listZones() {
    console.log("Attempting to fetch zones...");
    try {
        const response = await fetch(zonesURL);
        
        if (!response.ok) throw new Error("HTTP error! status: " + response.status);
        
        const zones = await response.json();
        console.log("Zones fetched successfully:", zones.length);
        
        if (!gameBox) {
            console.error("CRITICAL: Element with ID 'container' not found!");
            return;
        }

        gameBox.innerHTML = ""; // Clear "Loading..."
        
        zones.forEach(file => {
            const zoneItem = document.createElement("div");
            zoneItem.style.display = "inline-block";
            zoneItem.style.margin = "10px";
            zoneItem.style.textAlign = "center";
            zoneItem.style.cursor = "pointer";
            
            // Fix URLs in the data
            const cleanCover = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
            
            zoneItem.innerHTML = `
                <img src="${cleanCover}" style="width:150px; border-radius:10px; display:block;">
                <p style="color:white; font-family:sans-serif; margin-top:5px;">${file.name}</p>
            `;
            
            // Redirect to the game on click
            zoneItem.onclick = () => {
                const gameUrl = file.url.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
                window.location.href = gameUrl;
            };

            gameBox.appendChild(zoneItem);
        });
        
    } catch (error) {
        console.error("FETCH ERROR:", error);
        if (gameBox) gameBox.innerHTML = "<p style='color:red;'>Error: " + error.message + "</p>";
    }
}

listZones();
