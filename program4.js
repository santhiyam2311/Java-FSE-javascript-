const events = [
  {name: "Tech Conference", category: "Tech", seats: 10},
  {name: "Art Expo", category: "Art", seats: 5},
  {name: "Music Fest", category: "Music", seats: 20}
]

function addEvent(newEvent) {
  events.push(newEvent)
  displayEvents()
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName)
  if(event && event.seats > 0) {
    event.seats--
    return true
  }
  return false
}

function filterEventsByCategory(category, callback) {
  return events.filter(e => e.category === category).filter(callback)
}

function totalRegistrations() {
  let count = 0
  return {
    register: function() {
      count++
    },
    getCount: function() {
      return count
    }
  }
}

const registrationTracker = totalRegistrations()

function displayEvents() {
  const container = document.getElementById("eventList")
  container.innerHTML = ""
  events.forEach(e => {
    const div = document.createElement("div")
    div.textContent = `${e.name} (${e.category}) - Seats: ${e.seats}`
    const btn = document.createElement("button")
    btn.textContent = "Register"
    btn.onclick = () => {
      if(registerUser(e.name)) {
        registrationTracker.register()
        alert("Registered! Total: " + registrationTracker.getCount())
        displayEvents()
      } else {
        alert("No seats available")
      }
    }
    div.appendChild(btn)
    container.appendChild(div)
  })
}

document.getElementById("addEventBtn").onclick = () => {
  addEvent({name: "New Event", category: "Tech", seats: 10})
}

displayEvents()
