// Add your code here
let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    userName: userName,
    userEmail: userEmail
  })
};

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
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
  .then(ret => ret.json())
  .then( json => {
    let ul = document.getElementById('user-ids')
    let newLi = document.createElement('li')
    newLi.textContent = json.id
    ul.appendChild(newLi)
  })
  .catch(error => {
    let errorDiv = document.getElementById('error-message')
    errorDiv.textContent = error.message
  })
}
