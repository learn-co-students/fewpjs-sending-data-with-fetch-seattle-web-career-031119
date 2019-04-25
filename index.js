// Add your code here
function submitData(name, email) {

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then( res => res.json())
  .then( json => {
    let idDiv = document.createElement('div');
    idDiv.textContent = json.id
    document.body.appendChild(idDiv)
    return json
  })
  .catch( err => {
    let idDiv = document.createElement('div');
    idDiv.textContent = "Unauthorized Access"
    document.body.appendChild(idDiv)
  })
}
