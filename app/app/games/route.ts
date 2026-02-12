export async function GET() {
  try {
    const zonesURL = "https://cdn.jsdelivr.net/gh/gn-math/assets@main/zones.json";
    
    const response = await fetch(zonesURL, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: `Failed to fetch: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return Response.json(data);
  } catch (error) {
    console.error('Games API Error:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch games' },
      { status: 500 }
    );
  }
}
