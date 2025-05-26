const events = [
  {name: "Tech Conference", category: "Tech", seats: 5},
  {name: "Art Expo", category: "Art", seats: 0},
  {name: "Music Fest", category: "Music", seats: 20}
]

function displayMusicEvents() {
  const container = document.getElementById("musicEvents")
  const musicEvents = events.filter(e => e.category === "Music")
  const cards = musicEvents.map(e => `<div>${e.name} (${e.seats} seats)</div>`)
  container.innerHTML = cards.join("")
}

document.getElementById("addEventBtn").onclick = () => {
  events.push({name: "Workshop on Baking", category: "Music", seats: 10})
  displayMusicEvents()
}

displayMusicEvents()
