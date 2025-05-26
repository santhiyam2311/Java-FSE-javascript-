const events = [
  {name: "Tech Conference", date: "2025-06-15", seats: 5},
  {name: "Art Expo", date: "2024-11-10", seats: 0},
  {name: "Music Fest", date: "2025-01-20", seats: 20}
]

const today = new Date()

function displayEvents() {
  const container = document.getElementById("eventsList")
  container.innerHTML = ""

  events.forEach(event => {
    const eventDate = new Date(event.date)
    if(eventDate >= today && event.seats > 0){
      const div = document.createElement("div")
      div.textContent = `${event.name} | Date: ${event.date} | Seats: ${event.seats}`
      const btn = document.createElement("button")
      btn.textContent = "Register"
      btn.onclick = function() {
        try {
          if(event.seats <= 0) throw "No seats left"
          event.seats--
          alert("Registered successfully")
          displayEvents()
        } catch (error) {
          alert(error)
        }
      }
      div.appendChild(btn)
      container.appendChild(div)
    }
  })
}

displayEvents()
