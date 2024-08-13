const nameTag = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')
const ageTag = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
    nameTag.innerText = myData.name
}

if (myData.age) {
    ageTag.innerText = myData.age
}

nameInput.addEventListener('input', (e) => {
    myData.name = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    nameTag.innerText = e.target.value
})

ageInput.addEventListener('input', (e) => {
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    ageTag.innerText = e.target.value
})