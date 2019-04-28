// examples of how to save parts of the post request to variables

// const formData = {
//   name: "mera",
//   email: "sample@gmail.com"
// }
//
// const configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }
// fetch("url string", configObj)


function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => res.json())
    .then(json => handleResponse(json))
    .catch((er) => displayError(er))
}

function handleResponse(json) {
  const p = document.createElement('p')
  p.textContent = json.id

  const body = document.getElementById('body')
  body.appendChild(p)

}

function displayError(er) {
  const p = document.createElement('p')
  p.textContent = er.message

  const body = document.getElementById('body')
  body.appendChild(p)
}

// testing
// submitData("mera", "sample")
