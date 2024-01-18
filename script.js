async function searchSong() {
  const apiKey = 'YOUR_SPOTIFY_API_KEY'; // Replace with your Spotify API key
  const songInput = document.getElementById('songInput').value;

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${songInput}&type=track`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const data = await response.json();

    if (data.tracks.items.length > 0) {
      const song = data.tracks.items[0];
      const songInfoContainer = document.getElementById('songInfo');
      songInfoContainer.innerHTML = `
        <h2>${song.name}</h2>
        <p>Artist: ${song.artists[0].name}</p>
        <p>Album: ${song.album.name}</p>
        <img src="${song.album.images[0].url}" alt="Album Cover" style="max-width: 200px;">
      `;
    } else {
      alert('Song not found. Please try another search.');
    }
  } catch (error) {
    console.error('Error fetching song information:', error.message);
  }
}
