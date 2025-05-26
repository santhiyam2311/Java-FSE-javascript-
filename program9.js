const loading = document.getElementById("loading")
const eventsContainer = document.getElementById("events")

function fetchEvents() {
  loading.style.display = "block"
  fetch("https://mockapi.io/projects/yourendpoint/events")
    .then(res => res.json())
    .then(data => {
      loading.style.display = "none"
      eventsContainer.innerHTML = data.map(e => `<div>${e.name} (${e.category})</div>`).join("")
    })
    .catch(() => {
      loading.style.display = "none"
      eventsContainer.textContent = "Failed to load events."
    })
}

async function fetchEventsAsync() {
  loading.style.display = "block"
  try {
    const res = await fetch("https://mockapi.io/projects/yourendpoint/events")
    const data = await res.json()
    eventsContainer.innerHTML = data.map(e => `<div>${e.name} (${e.category})</div>`).join("")
  } catch {
    eventsContainer.textContent = "Failed to load events."
  }
  loading.style.display = "none"
}

// Choose one to run:
// fetchEvents()
// or
fetchEventsAsync()
