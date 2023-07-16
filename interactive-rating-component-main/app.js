let rating = ''
let ratingSelect = document.querySelectorAll('.rating-icon')
let submit = document.querySelector('.submitBtn')
let selection = document.querySelector('.selected-rating')
const container = document.querySelector('.rating-screen')
const thanks = document.querySelector('.thank-you')

for (let i = 0; i < ratingSelect.length; i++){
    ratingSelect[i].addEventListener('click', () => {
        rating = ratingSelect[i].textContent
    })
}

submit.addEventListener('click', () => {
     container.classList.add('hidden')
     thanks.classList.remove('hidden')

     selection.innerHTML = rating

})

