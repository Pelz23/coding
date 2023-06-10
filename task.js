// Dom
// Working with the html element

// document.getElementById(); for getting ID--- important
// document.getElementsByClassName(); for getting classes
// document.querySelector(); for getting id and classes---- important
// document.querySelectorAll(); for getting multiple ids or classes
// document.getElementsByTagName(); for getting html tags

// const id = document.getElementById('book')
// const get_id_or_class = document.querySelector('.book')
// console.log(get_id_or_class)
// console.log(id)

// id and classes
// event in js using the DOM
// click, mouse event, keyevent, form event, load event, dlclick

// Ass- Find out what is es6

// const something = () =>{
//     return 'Hello'
// }

// function removeElement(){
//     const content = document.querySelector('.content')
//     content.remove()
// }

// const button = document.getElementById('removeid')

// removeid.addEventListener('click', function(){
//     alert('Hi')
// })
// button.addEventListener('click', removeElement)

// function changeBackGroundBody(){
//     document.body.style.backgroundColor = 'red'
// }

// const btn = document.getElementById('body');
// btn.addEventListener('click',changeBackGroundBody)


const bookDatabase = [];

const bookForm = document.getElementById('book_form')
bookForm.addEventListener('submit', function(e){
    e.preventDefault();


const book_name = document.getElementById('book_name').value;
const author_name = document.getElementById('author_name').value;
const IsMark = document.getElementById('IsMark').value;
const isbn = document.getElementById('isbn').value;

bookDatabase.push({book_name, author_name, IsMark, isbn})




// Create Element in Javascript
const element_name = document.createElement('button')
const para = document.createElement('p')

// How to add text using textcontent, innerHTML, innertext
para.textContent = 'THIS IS PARA';

// How to add the created element to page... using append() or appendchild()

// const box = document.getElementById('box');
// box.appendChild(para)
// console.log(element_name, para)

const newDiv = document.createElement('div')

const element_one = document.createElement('h1')
const element_two = document.createElement('h1')
const element_three = document.createElement('h1')

const contain = document.getElementById('contain')

if (IsMark === 'true') {
    element_one.textContent = book_name;
    element_two.textContent = author_name
    element_three.textContent = isbn;
    newDiv.appendChild(element_one)
    newDiv.appendChild(element_two)
    newDiv.appendChild(element_three);

    // bring a style from css using classList.add()
    newDiv.classList.add('true')
    contain.appendChild(newDiv)
} else if (IsMark === 'false') {
    element_one.textContent = book_name;
    element_two.textContent = author_name
    element_three.textContent = isbn;
    newDiv.appendChild(element_one)
    newDiv.appendChild(element_two)
    newDiv.appendChild(element_three);

    // bring a style from css using classList.add()
    newDiv.classList.add('false')
    contain.appendChild(newDiv)
}



})

const info = ['Name', 'Mayowa', 'James', 'Boss']
const findData = info.find((name) => {
    return name === 'Boss'
})
console.log(findData)



// if(findData){
//     console.log('Name is found')
// }
// else(findData){
//     console.log('Name is not found')
// }
// console.log(findData)


const data = [
    { id: 1, name: 'Lagos', population:'300'},
    { id: 2, name: 'Oyo', population:'700'},
    { id: 3, name: 'Ekiti', population:'5500'},
    { id: 4, name: 'Rivers', population:'900'},
]

const findState = data.filter((state) => {
    return state.population > 400
})
console.log(findState)


const dataa = ['Hello', 'Over', 'Welcome', 'Maker', 'Beg', 'Bag']
// const [arr_one,arr_two, ...grab] = dataa
const [arr_one,arr_two, ,last] = dataa

console.log(arr_one)
// console.log(grab)
console.log(last)


