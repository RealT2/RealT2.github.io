// Verification logs
console.log("Script.js is ALIVE");

const container = document.getElementById('container');
const zonesURL = "https://cdn.jsdelivr.net";
const coverURL = "https://cdn.jsdelivr.net";
const htmlURL = "https://cdn.jsdelivr.net";

async function listZones() {
    console.log("Attempting to fetch zones...");
    try {
        const response = await fetch(zonesURL);
        const zones = await response.json();
        console.log("Zones fetched successfully:", zones.length);
        
        if (!container) {
            console.error("CRITICAL: Element with ID 'container' not found!");
            return;
        }

        container.innerHTML = ""; // Clear the "Loading..." text
        
        zones.forEach(file => {
            const zoneItem = document.createElement("div");
            zoneItem.style.display = "inline-block";
            zoneItem.style.margin = "10px";
            zoneItem.style.textAlign = "center";
            zoneItem.style.color = "white";
            
            const img = document.createElement("img");
            img.src = file.cover.replace("{COVER_URL}", coverURL).replace("{HTML_URL}", htmlURL);
            img.style.width = "150px";
            img.style.borderRadius = "10px";
            img.style.display = "block";
            
            const name = document.createElement("p");
            name.textContent = file.name;

            zoneItem.appendChild(img);
            zoneItem.appendChild(name);
            container.appendChild(zoneItem);
        });
        
    } catch (error) {
        console.error("FETCH ERROR:", error);
        container.innerHTML = "Error: " + error.message;
    }
}

// Start immediately
listZones();
