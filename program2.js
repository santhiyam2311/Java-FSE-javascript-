const eventName = "Tech Conference 2025"
const eventDate = "June 15, 2025"
let seats = 100

function updateDetails() {
  const details = `Event: ${eventName} | Date: ${eventDate} | Seats available: ${seats}`
  document.getElementById("eventDetails").textContent = details
}

document.getElementById("registerBtn").addEventListener("click", function() {
  if(seats > 0) seats--
  updateDetails()
})

updateDetails()
