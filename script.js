const matchesContainer = document.getElementById("matches");
const loading = document.getElementById("loading");

fetch("https://www.scorebat.com/video-api/v3/")
  .then((response) => response.json())
  .then((data) => {
    loading.style.display = "none";
    const matches = data.response.slice(0, 6); // Get first 6 matches
    matches.forEach((match) => {
      const card = document.createElement("div");
      card.className = "match-card";
      card.innerHTML = `
        <div class="match-title">${match.title}</div>
        <div class="match-date">Scheduled: ${new Date(
          match.date
        ).toLocaleString()}</div>
      `;
      matchesContainer.appendChild(card);
    });
  })
  .catch((error) => {
    loading.innerText = "Failed to load matches.";
    console.error("Error fetching match data:", error);
  });
