/* Theory
// const array = [1, 2, 4, 55]
// const arrayString = ['a', 'b', 'c', 'd', 'e']
// const array = new Array[1, 2, 3, 4]

// console.log(array.length)
// console.log(array[array.length - 1])
// console.log(array[0])
// array[0] = 'Hello'
// console.log(array[0])
*/

// const inputElement = document.getElementById('title')
// const createBtn = document.getElementById('create')
// const listElement = document.getElementById('list')
// const notes = ['Записать блок про массивы', 'Сходить в кино']

// function render() {
//     for(let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//     </li>
//     `
// }

/**
Object Theory

const person = {
    firstName: 'Ilya',
    lastName: 'Zhavzharov',
    year: 2006,
    hasGirlFriend: false,
    languages: ['en', 'ru', 'pl'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlFriend'
person.hasGirlFriend = true
console.log(person[key])
person.getFullName()

 */

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    // {
    // title: 'Прочитать книгу',
    // completed: false,
    // },
    // {
    //     title: 'Сделать домашнее задание',
    //     completed: true,
    // },
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No elements</p>'
    }
    for(let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}
render()

function getNoteTemplate(note, index) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center rounded mb-2">
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
            <span class="btn btn-small btn-${note.completed ? 'success' : 'primary'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
    </li>
    `
}

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }

        render()
    }
}