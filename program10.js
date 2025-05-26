const events = [
  {name: "Tech Conference", category: "Tech", seats: 5},
  {name: "Music Fest", category: "Music", seats: 20},
  {name: "Art Expo", category: "Art", seats: 0}
]

const displayEvents = (eventList = events) => {
  const container = document.getElementById("eventDisplay")
  container.innerHTML = ""
  eventList.forEach(({name, category, seats}) => {
    const card = document.createElement("div")
    card.textContent = `${name} (${category}) - Seats: ${seats}`
    container.appendChild(card)
  })
}

const cloneAndFilter = (category = "All") => {
  let cloned = [...events]
  if(category !== "All") {
    cloned = cloned.filter(({category: cat}) => cat === category)
  }
  return cloned
}

displayEvents()
