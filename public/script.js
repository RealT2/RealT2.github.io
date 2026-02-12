<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Games Library</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- Top bar for searching and sorting -->
    <div class="controls">
        <input type="text" id="searchBar" placeholder="Search games..." oninput="filterZones()">
        <select id="sortOptions" onchange="sortZones()">
            <option value="popular">Most Popular</option>
            <option value="name">Name A-Z</option>
            <option value="id">ID</option>
        </select>
        <button id="darkModeToggle">Toggle Dark Mode</button>
        <span id="zoneCount">Zones Loaded: 0</span>
    </div>

    <!-- The main container where games will appear -->
    <div id="container">
        <h1 style="text-align: center; margin-top: 20%;">Loading Games...</h1>
    </div>

    <!-- The viewer for when you click a game -->
    <div id="zoneViewer" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; z-index: 100;">
        <div class="viewer-header" style="padding: 10px; background: #222; color: white;">
            <span id="zoneName"></span> (ID: <span id="zoneId"></span>)
            <button onclick="closeZone()">Close</button>
            <button onclick="fullscreenZone()">Fullscreen</button>
            <button onclick="aboutBlank()">Open in New Tab</button>
        </div>
        <iframe id="zoneFrame" style="width: 100%; height: calc(100% - 50px); border: none;"></iframe>
    </div>

    <!-- This must stay at the bottom -->
    <script src="./script.js"></script>
</body>
</html>
