console.log('client side javescript loaded.')

const submitForm = document.querySelector('form')
const inputedAdjective = document.querySelector('input')
const messageOne = document.querySelector('#m1')
const messageOneDiv = document.querySelector('#m1div')
const messageTwo = document.querySelector('#m2')
const hr = document.createElement("span")






submitForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const adjective = inputedAdjective.value

  fetch('/new?adjective=' + adjective).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOneDiv.style.display = 'block',
         messageOneDiv.textContent = data.error
      }else{
         messageOne.textContent = '',
         messageOneDiv.style.display = 'none',
         messageTwo.textContent = 'You are '+ data.adjective.toUpperCase() + " like "+ data.match

      }
    })
  })
})
