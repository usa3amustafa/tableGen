const table = document.querySelector('.table')
const listItems = document.querySelectorAll('li')
const tableContent = document.querySelector('.table')
const listItemsArr = [...listItems]

let num = 0
let tableArr = []

listItems.forEach(function (listItem) {
  listItem.addEventListener('click', function () {
    tableArr = []
    num = listItem.textContent

    for (let i = 1; i < 11; i++) {
      tableArr.push(`${num} * ${i} = ${num * i}<br>`)
    }
    table.innerHTML = tableArr.join('')
    table.classList.add('table-style')
  })
})
