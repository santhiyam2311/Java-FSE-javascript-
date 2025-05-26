class Event {
  constructor(name, category, seats) {
    this.name = name
    this.category = category
    this.seats = seats
  }
  checkAvailability() {
    return this.seats > 0
  }
}

const events = [
  new Event("Tech Conference", "Tech", 5),
  new Event("Art Expo", "Art", 0),
  new Event("Music Fest", "Music", 20)
]

function displayEvents(list) {
  const container = document.querySelector("#eventContainer")
  container.innerHTML = ""
  list.forEach(event => {
    const card = document.createElement("div")
    card.style.border = "1px solid #ccc"
    card.style.margin = "10px"
    card.style.padding = "10px"
    const keysValues = Object.entries(event).map(([k,v]) => `${k}: ${v}`).join(", ")
    card.textContent = keysValues
    const btn = document.createElement("button")
    btn.textContent = event.checkAvailability() ? "Register" : "Full"
    btn.disabled = !event.checkAvailability()
    btn.onclick = () => {
      if(event.checkAvailability()) {
        event.seats--
        displayEvents(events)
      }
    }
    card.appendChild(btn)
    container.appendChild(card)
  })
}

document.getElementById("addEventBtn").onclick = () => {
  events.push(new Event("Workshop on Baking", "Music", 10))
  displayEvents(events)
}

const musicEvents = events.filter(e => e.category === "Music")
const musicCards = musicEvents.map(e => `${e.name} (${e.seats} seats)`)

displayEvents(events)
