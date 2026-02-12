'use client';

import { useEffect, useState } from 'react';

export default function GamesPage() {
  const [zones, setZones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('name');

  const zonesURL = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json";
  const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
  const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch(zonesURL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setZones(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch games');
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const sortZones = (zonesList: any[]) => {
    const sorted = [...zonesList];
    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'id') {
      sorted.sort((a, b) => a.id - b.id);
    }
    return sorted;
  };

  const displayZones = () => {
    const sorted = sortZones(zones);
    return sorted.map((zone) => (
      <div
        key={zone.id}
        style={{
          display: 'inline-block',
          margin: '10px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
        onClick={() => openZone(zone)}
      >
        <img
          src={zone.cover
            .replace("{COVER_URL}", coverURL)
            .replace("{HTML_URL}", htmlURL)}
          alt={zone.name}
          style={{ width: '150px', borderRadius: '10px' }}
        />
        <p style={{ color: 'white', marginTop: '10px' }}>{zone.name}</p>
      </div>
    ));
  };

  const openZone = (zone: any) => {
    const url = zone.url
      .replace("{COVER_URL}", coverURL)
      .replace("{HTML_URL}", htmlURL);
    if (zone.url.startsWith("http")) {
      window.location.href = zone.url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '20px' }}>
      {loading ? (
        <h1 style={{ textAlign: 'center', paddingTop: '50px' }}>Loading Games...</h1>
      ) : error ? (
        <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'red' }}>
          Failed to load games: {error}
        </h1>
      ) : (
        <>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Games</h1>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <label style={{ marginRight: '10px' }}>Sort by: </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #666',
                backgroundColor: '#333',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <option value="name">Name</option>
              <option value="id">ID</option>
            </select>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {zones.length} games loaded
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayZones()}
          </div>
        </>
      )}
    </div>
  );
}
