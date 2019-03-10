console.log('client side javescript loaded.')




const submitForm = document.querySelector('form')
const inputedAdjective = document.querySelector('input')
const messageOne = document.querySelector('#m1')
const messageTwo = document.querySelector('#m2')



submitForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const adjective = inputedAdjective.value

  fetch('http://localhost:3000/new?adjective=' + adjective).then((response) => {
    response.json().then((data) => {
      if(data.error) {
         messageOne.textContent = data.error
      }else{
         messageOne.textContent = '',
         messageTwo.textContent = 'YOU ARE '+ data.adjective.toUpperCase() + " LIKE "+ data.match
      }
    })
  })
})
