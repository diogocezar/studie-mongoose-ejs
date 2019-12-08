const list = document.querySelector("#list")

const loadJson = async () => {
  const result = await fetch('http://localhost:8080/api/contacts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  const {data} = await result.json()
  return data
}

const fillList = async () => {
  const data = await loadJson()
  console.log(data)
  list.insertAdjacentHTML('beforeend', data.map((item) => (
    `<tr>
      <th scope="row">${item._id}</th>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.gender}</td>
      <td>${item.phone}</td>
      <td><button type="submit" class="btn btn-primary">X</button></td>
      <td><button type="submit" class="btn btn-primary">~</button></td>
    </tr>`
  )))
}

fillList()