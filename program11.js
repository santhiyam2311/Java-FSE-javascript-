const form = document.getElementById("regForm")
form.addEventListener("submit", e => {
  e.preventDefault()
  clearErrors()
  const name = form.elements["name"].value.trim()
  const email = form.elements["email"].value.trim()
  const eventName = form.elements["event"].value
  let valid = true
  if(!name) {
    showError("nameErr", "Name required")
    valid = false
  }
  if(!email || !email.includes("@")) {
    showError("emailErr", "Valid email required")
    valid = false
  }
  if(!eventName) {
    showError("eventErr", "Select event")
    valid = false
  }
  if(valid) alert(`Registered ${name} for ${eventName}`)
})
function showError(id, msg) {
  document.getElementById(id).textContent = msg
}
function clearErrors() {
  ["nameErr","emailErr","eventErr"].forEach(id => document.getElementById(id).textContent = "")
}
