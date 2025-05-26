const form = document.getElementById("regForm")
const message = document.getElementById("message")
form.addEventListener("submit", e => {
  e.preventDefault()
  const data = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    event: form.elements["event"].value
  }
  message.textContent = "Submitting..."
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.ok) {
        message.textContent = "Registration successful!"
        form.reset()
      } else {
        message.textContent = "Submission failed."
      }
    })
    .catch(() => message.textContent = "Error sending data.")
  }, 1000)
})
