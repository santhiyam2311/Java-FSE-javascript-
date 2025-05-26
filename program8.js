const events = [
  {name: "Tech Conference", category: "Tech", seats: 5},
  {name: "Music Fest", category: "Music", seats: 20},
  {name: "Art Expo", category: "Art", seats: 0},
  {name: "Workshop on Baking", category: "Music", seats: 10}
]

function renderEvents(list) {
  const container = document.getElementById("eventList")
  container.innerHTML = ""
  list.forEach(event => {
    const card = document.createElement("div")
    card.textContent = `${event.name} (${event.category}) - Seats: ${event.seats}`
    const btn = document.createElement("button")
    btn.textContent = event.seats > 0 ? "Register" : "Full"
    btn.disabled = event.seats === 0
    btn.onclick = () => {
      if(event.seats > 0) {
        event.seats--
        renderEvents(filterEvents())
      }
    }
    card.appendChild(btn)
    container.appendChild(card)
  })
}

function filterEvents() {
  const category = document.getElementById("categoryFilter").value
  const search = document.getElementById("searchInput").value.toLowerCase()
  return events.filter(e => 
    (category === "All" || e.category === category) &&
    e.name.toLowerCase().includes(search)
  )
}

document.getElementById("categoryFilter").onchange = () => renderEvents(filterEvents())
document.getElementById("searchInput").onkeydown = () => setTimeout(() => renderEvents(filterEvents()), 100)

renderEvents(events)
