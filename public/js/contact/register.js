const name = document.querySelector("#name")
const email = document.querySelector("#email")
const gender = document.querySelector("#gender")
const phone = document.querySelector("#phone")
const form = document.querySelector("#form")
const message = document.querySelector("#message")

const finishSend = (msg) => {
  form.reset()
  message.innerHTML = msg
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const data = {
    name: name.value,
    email: email.value,
    gender: gender.value,
    phone: phone.value,
  }
  const result = await fetch('http://localhost:8080/api/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if(result){
    finishSend('Sucesso ao enviar o cadastro.')
  }
  else{
    finishSend('Houver um erro ao enviar o formulário.')
  }
})