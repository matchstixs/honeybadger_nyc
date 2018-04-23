//needs to be used!!
window.onload = function() {

  //accessing nodes in the DOM

  const heading = document.getElementById('main-heading');
  //grabs node by id

  const heading2 = document.getElementsByTagName('h1');
  //grabs all specific tag returns array like structure

  const listItems = document.getElementsByClassName('list-item');
  //grabs all of specific class returns array like sturcture
  listItems[0]
  listItems[1]
  //accessing items from an array like structure

  const image = document.querySelector('#image');
  //returns item by using its css querySelector

  const descriptions = document.querySelectorAll('.description');
  //returns all items using the css selector


  heading.innerHTML
  //returns text inside node

  heading.innerHTML = 'new text'
  //edit text of node

  let newLi = document.createElement('li')
  newLi.classList.add('list-item')
  newLi.innerHTML = 'new LI'
  newLi.id = 'new-id'
  //adding elements into the DOM
  const list = document.getElementById('the-list')
  list.appendChild(newLI)
  //adding elements to a specific section of the DOM

  const lastLi = document.getElementById('new-id')
  lastLi.remove()
  listItems[1].remove()
  //removing elements from the DOM

  heading.style.color = 'red'
  heading.style.fontFamily = 'Arial'
  //updating styling

}
