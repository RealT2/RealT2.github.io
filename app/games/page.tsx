'use client';

import { useEffect, useState } from 'react';

/**
* GamesPage React component that fetches games from /api/games and renders a searchable, sortable grid of game tiles with loading and error states.
* @example
* GamesPage()
* <JSX.Element />
* @returns {JSX.Element} The rendered Games page component.
**/
export default function GamesPage() {
  const [zones, setZones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  const coverURL = "https://cdn.jsdelivr.net/gh/gn-math/covers@main";
  const htmlURL = "https://cdn.jsdelivr.net/gh/gn-math/html@main";

  useEffect(() => {
    /**
    * Fetches game data from the /api/games endpoint, updates state via setZones/setLoading/setError, and handles errors.
    * @example
    * sync()
    * Promise<void>
    * @returns {Promise<void>} Returns a promise that resolves when the fetch completes and state has been updated.
    **/
    const loadGames = async () => {
      try {
        const response = await fetch('/api/games');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
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

  const filteredAndSortedZones = sortZones(
    zones.filter(zone =>
      zone.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  /**
  * Render a list of interactive zone card JSX elements from the provided zones array.
  * @example
  * renderZoneCards(filteredAndSortedZones)
  * [<div key="zone1">...</div>, <div key="zone2">...</div>]
  * @param {Array<Object>} filteredAndSortedZones - Array of zone objects (each should include at minimum id, name and cover properties).
  * @returns {JSX.Element[]} Array of JSX elements representing clickable, animated zone cards.
  */
  const displayZones = () => {
    return filteredAndSortedZones.map((zone) => (
      <div
        key={zone.id}
        onClick={() => openZone(zone)}
        style={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = 'scale(1.05)';
          el.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.transform = 'scale(1)';
          el.style.opacity = '1';
        }}
      >
        <div
          style={{
            width: '160px',
            aspectRatio: '1',
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={zone.cover
              .replace("{COVER_URL}", coverURL)
              .replace("{HTML_URL}", htmlURL)}
            alt={zone.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <p
          style={{
            color: '#1d1d1d',
            marginTop: '12px',
            fontSize: '15px',
            fontWeight: '500',
            textAlign: 'center',
            maxWidth: '160px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
          }}
        >
          {zone.name}
        </p>
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
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 50px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#1d1d1d',
            margin: '0 0 20px 0',
            letterSpacing: '-0.5px',
          }}
        >
          Games
        </h1>
        <p
          style={{
            fontSize: '21px',
            color: '#6e6e73',
            margin: '0',
            fontWeight: '400',
            letterSpacing: '0.3px',
          }}
        >
          Unblocked games for school
        </p>
      </div>

      {/* Search and Sort Section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 40px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #e5e5ea',
            fontSize: '16px',
            fontFamily: 'inherit',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: '#ffffff',
            color: '#1d1d1d',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#0071e3';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 113, 227, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#e5e5ea';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
          }}
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '12px 16px',
            borderRadius: '12px',
            border: '1px solid #e5e5ea',
            fontSize: '16px',
            fontFamily: 'inherit',
            backgroundColor: '#ffffff',
            color: '#1d1d1d',
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            appearance: 'none',
            paddingRight: '32px',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231d1d1d' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
            paddingRight: '36px',
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="id">Sort by ID</option>
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '3px solid #e5e5ea',
                borderTop: '3px solid #0071e3',
                margin: '0 auto 16px',
                animation: 'spin 1s linear infinite',
              }}
            />
            <p
              style={{
                color: '#6e6e73',
                fontSize: '16px',
                margin: '0',
              }}
            >
              Loading games...
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px 24px',
            backgroundColor: '#fff3cd',
            borderRadius: '18px',
            textAlign: 'center',
            border: '1px solid #ffe69c',
          }}
        >
          <h2
            style={{
              color: '#856404',
              fontSize: '20px',
              margin: '0 0 8px 0',
              fontWeight: '600',
            }}
          >
            Unable to load games
          </h2>
          <p
            style={{
              color: '#856404',
              fontSize: '15px',
              margin: '0',
            }}
          >
            {error}
          </p>
        </div>
      )}

      {/* Games Grid */}
      {!loading && !error && (
        <>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '32px',
              justifyItems: 'center',
            }}
          >
            {displayZones()}
          </div>

          {/* No Results */}
          {filteredAndSortedZones.length === 0 && zones.length > 0 && (
            <div
              style={{
                textAlign: 'center',
                marginTop: '60px',
                color: '#6e6e73',
              }}
            >
              <p style={{ fontSize: '17px', margin: '0' }}>
                No games found matching "{searchQuery}"
              </p>
            </div>
          )}

          {/* Games Count */}
          {zones.length > 0 && (
            <div
              style={{
                textAlign: 'center',
                marginTop: '60px',
                color: '#6e6e73',
                fontSize: '15px',
              }}
            >
              {filteredAndSortedZones.length} of {zones.length} games
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
