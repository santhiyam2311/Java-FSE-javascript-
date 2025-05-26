const events = [
  {name: "Tech Conference", category: "Tech", seats: 5},
  {name: "Art Expo", category: "Art", seats: 0},
  {name: "Music Fest", category: "Music", seats: 20}
]

function renderEvents() {
  const container = document.querySelector("#eventsContainer")
  container.innerHTML = ""
  events.forEach(event => {
    const card = document.createElement("div")
    card.style.border = "1px solid #ccc"
    card.style.margin = "8px"
    card.style.padding = "8px"
    card.innerHTML = `<strong>${event.name}</strong> (${event.category}) - Seats: ${event.seats}`
    const btn = document.createElement("button")
    btn.textContent = event.seats > 0 ? "Register" : "Full"
    btn.disabled = event.seats === 0
    btn.onclick = () => {
      if(event.seats > 0) {
        event.seats--
        renderEvents()
      }
    }
    card.appendChild(btn)
    container.appendChild(card)
  })
}

renderEvents()
