tsx
export default function GamesPage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* This block lets you use your old HTML inside the new site */}
      <div dangerouslySetInnerHTML={{ __html: `
        
        <!-- PASTE YOUR ENTIRE index.html CODE STARTING BELOW THIS LINE -->

        <h1 style="color: white; text-align: center;">My Games Library</h1>
        <p style="color: white; text-align: center;">Games will load here...</p>

        <!-- PASTE YOUR CODE ABOVE THIS LINE -->

      ` }} />
    </div>
  );
}
